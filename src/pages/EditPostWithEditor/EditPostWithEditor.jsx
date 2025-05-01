import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate, Link as RouterLink } from 'react-router-dom';
import { CrossContext } from '../../Context/CrossContext';
import { toast } from 'react-toastify';
import { BsStack } from "react-icons/bs";
import { MdKeyboardBackspace } from "react-icons/md";



function EditPostWithEditor() {
  const { baseUrl, setLoading, me } = useContext(CrossContext);
  
  const { postId } = useParams(); // blog ID from URL
 

  const [title, setTitle] = useState('');
  const [blogImage, setBlogImage] = useState('');
  const [existingImage, setExistingImage] = useState('');

  const editor = useEditor({
     extensions: [
          StarterKit,
          Link.configure({
            openOnClick: false,
          }),
          Image,
        ],
    content: '<p>Loading...</p>',
  });

  useEffect(() => {
    // Fetch existing blog post
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/blog/${postId}`);
        setTitle(response.data.data.data.title);
        setExistingImage(response.data.data.data.blogImage);
        editor?.commands.setContent(response.data.data.data.content);
      } catch (err) {
        console.error(err);
      }
    };

    if (editor) {
      fetchPost();
    }
  }, [editor, postId, baseUrl]);


  const addImage = async () => {
      
      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.accept = 'image/*';
  
      fileInput.onchange = async () => {
        const file = fileInput.files[0];
        const formData = new FormData();
        formData.append('image', file);
  
        try {
          const res = await axios.post(`${baseUrl}/api/blog/blog-content-image`, formData);
          const imageUrl = res.data.url;
          editor.chain().focus().setImage({ src: imageUrl }).run();
        } catch (err) {
          toast.error(err.response.data.message);
        }
      };
  
      fileInput.click();
    };


  //to update the post
  const handleUpdate = async () => {
    const content = editor.getHTML();

    

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (blogImage) {
      formData.append('blogImage', blogImage);
    }

    if (!title){
        return  toast.error('Post title is required');
    }

    if (!blogImage){
        return  toast.error('Post image is required');
    }

    if (!content){
        return  toast.error('Content can not be empty');
    }

    try {
        setLoading(true);
        window.scrollTo({ top: 0, behavior: "auto" });
        
     const response = await axios.patch(`${baseUrl}/api/blog/${postId}`, formData);
       
      if(response.status===200){
            toast.success('Blog post updated successfully!');
            setTitle('');
            setExistingImage(null);
            editor.commands.setContent('<p></p>');
        }
      
    } catch (error) {
        if(error){
            toast.error(error.response.data.message)

            console.log("Error updating blog post", error)
    }
    }finally{
        setLoading(false)
    }
  };

  

  
  
  return (
    <div className="max-w-3xl p-6 mx-auto space-y-6 bg-white shadow-md rounded-xl large:mt-20 small:mt-12">

    {me && me.role !=="user" &&
     <RouterLink className='flex items-center justify-center gap-1 border rounded text-crossLightPurple w-200px border-crossLightPurple h-40px' to="/admin-dashboard"><MdKeyboardBackspace className='text-20px'/>Back to dashboard</RouterLink>}
        
      <input
        type="text"
        className="w-full p-3 text-xl font-semibold border rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post Title"
      />

      {/* Image Preview */}
      {existingImage && (
        <img
          src={existingImage}
          alt="Current blog"
          className="object-cover w-full h-64 mb-4 rounded"
        />
      )}

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setBlogImage(e.target.files[0])}
        className="w-full p-2 border rounded"
      />

      {/* Toolbar */}
      {editor && (
        <div className="flex flex-wrap gap-2 mb-2">
          <button onClick={() => editor.chain().focus().toggleBold().run()} className="btn">Bold</button>
          <button onClick={() => editor.chain().focus().toggleItalic().run()} className="btn">Italic</button>
          <button onClick={() => editor.chain().focus().toggleBulletList().run()} className="btn">Bullet List</button>
          <button onClick={() => editor.chain().focus().toggleOrderedList().run()} className="btn">Numbered List</button>
          <button onClick={() => editor.chain().focus().setParagraph().run()} className="btn">Paragraph</button>
          <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className="btn">H2</button>
          <button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className="btn">H3</button>
          <button
            onClick={() => {
              const url = prompt('Enter URL');
              if (url) {
                editor.chain().focus().setLink({ href: url }).run();
              }
            }}
            className="btn"
          >
            Add Link
          </button>
          <button onClick={addImage} className="btn">Insert Image</button>
        </div>
      )}

      <div className="border p-3 rounded min-h-[200px]">
        <EditorContent editor={editor} />
      </div>

      <button
        onClick={handleUpdate}
        className="w-auto px-2 text-white rounded bg-crossLightPurple h-40px"
      >
        Update Blog Post
      </button>
      
    </div>
  );
};

export default EditPostWithEditor;
