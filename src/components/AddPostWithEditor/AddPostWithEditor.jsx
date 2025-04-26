import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import axios from 'axios';
import { useContext, useState } from 'react';
import { CrossContext } from '../../Context/CrossContext';
import { toast } from 'react-toastify';



function AddPostWithEditor() {
  const { baseUrl, setLoading } = useContext(CrossContext);

  const [title, setTitle] = useState('');
  const [blogImage, setBlogImage] = useState(null);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
      }),
    ],
    content: '<p>Start writing your blog post...</p>',
  });

  const addLink = () => {
    const url = prompt('Enter the URL');
    if (url) {
      editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
    }
  };

  const handleSubmit = async () => {
    // if (!title || !blogImage || !editor) return alert('Please fill in all fields');
    if (!title || !blogImage || !editor) return  toast.error('Please fill in all fields');

    const content = editor.getHTML();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('blogImage', blogImage); // This is the uploaded file

    try {
        setLoading(true)
      const response = await axios.post(`${baseUrl}/api/blog`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      
      if(response.status===201){
            toast.success('Blog post created successfully!');
            setTitle('');
            setBlogImage(null);
            editor.commands.setContent('<p></p>');
        }
            
    } catch (error) {
       if(error){
                toast.error(error.response.data.message)

                console.log("Error creating blog post", error)
        }
    }finally{
        setLoading(false)
    }
  };

  return (
    <div className="max-w-3xl p-6 mx-auto space-y-6 bg-white shadow-md rounded-xl">
      <input
        className="w-full p-3 text-xl font-semibold border rounded"
        placeholder="Post Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setBlogImage(e.target.files[0])}
        className="w-full p-2 border rounded"
      />

      {editor && (
        <div className="flex flex-wrap gap-2 mb-2">
          <button onClick={() => editor.chain().focus().toggleBold().run()} className="btn">Bold</button>
          <button onClick={() => editor.chain().focus().toggleItalic().run()} className="btn">Italic</button>
          <button onClick={() => editor.chain().focus().toggleBulletList().run()} className="btn">Bullet List</button>
          <button onClick={() => editor.chain().focus().toggleOrderedList().run()} className="btn">Numbered List</button>
          <button onClick={() => editor.chain().focus().setParagraph().run()} className="btn">Paragraph</button>
          <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className="btn">H2</button>
          <button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className="btn">H3</button>
          <button onClick={addLink} className="btn">Insert Link</button>
        </div>
      )}

      <div className="border p-3 rounded min-h-[200px]">
        <EditorContent editor={editor} />
      </div>

      <button
        onClick={handleSubmit}
        className="w-auto px-2 text-white rounded bg-crossLightPurple h-40px"
      >
        Publish Blog Post
      </button>
    </div>
  );
}

export default AddPostWithEditor;
