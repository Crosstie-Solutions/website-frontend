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



function EditReport() {
  const { baseUrl, setLoading, me } = useContext(CrossContext);
  
  const { postId } = useParams(); // blog ID from URL
 

  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [link, setLink] = useState('');
  const [overview, setOverview] = useState('');
  const [date, setDate] = useState('');
  const [reportImage, setReportImage] = useState('');
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
        const response = await axios.get(`${baseUrl}/api/report/${postId}`);
        setTitle(response.data.data.data.title);
        setType(response.data.data.data.type);
        setLink(response.data.data.data.link);
        setOverview(response.data.data.data.overview);
        setDate(response.data.data.data.date);
        setExistingImage(response.data.data.data.reportImage);
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
          const res = await axios.post(`${baseUrl}/api/report/report-content-image`, formData);
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
    formData.append('type', type);
    formData.append('overview', overview);
    formData.append('link', link);
    formData.append('date', date);
    formData.append('content', content);


    if (reportImage) {
      formData.append('reportImage', reportImage);
    }

    if (!title){
        return  toast.error('Post title is required');
    }

    if (!type){
        return  toast.error('Post type is required');
    }

    if (!overview){
        return  toast.error('Post overview is required');
    }

    if (!date){
        return  toast.error('Post date is required');
    }

    if (type==='external' && !link){
        return  toast.error('Provide external link');
    }

    if (!existingImage && !reportImage){
        return  toast.error('Post image is required');
    }

    if (!content){
        return  toast.error('Content can not be empty');
    }

    try {
        setLoading(true);
        window.scrollTo({ top: 0, behavior: "auto" });
        
     const response = await axios.patch(`${baseUrl}/api/report/${postId}`, formData);
       
      if(response.status===200){
            toast.success('Media report updated successfully!');
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
        className="w-full p-1 h-40px border rounded"
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

      <div>
        <label htmlFor="">Replace Image</label>
        <input
        type="file"
        accept="image/*"
        onChange={(e) => setReportImage(e.target.files[0])}
        className="w-full p-2 border rounded"
      />
      </div>


      <div className="flex flex-col items-start justify-center h-auto w-100">
        <label htmlFor="overview">Overview</label>

         <textarea
        className="w-full p-1 border rounded h-100px"
        placeholder="Enter report overview"
        value={overview}
        onChange={(e) => setOverview(e.target.value)}
      />
      </div>


      <div className="flex flex-col items-start justify-center h-auto w-100">
        <label htmlFor="date">Date</label>

          <input
          type="text"
          name='date'
          value={date}
          placeholder='Enter report date in the right format'
          onChange={(e) => setDate(e.target.value)}
          className="w-full h-40px border rounded p-1"
        />

      </div>

      <div className="flex flex-col items-start justify-center h-auto small:w-100 large:w-50">
        <label htmlFor="type">Report Type</label>

        <select name="type" id="" className="w-full h-40px border rounded cursor-pointer"
         onChange={(e) => setType(e.target.value)}>
          
          <option value="">-select-</option>
          <option value="external">External (External resource)</option>
          <option value="internal">Internal (Within Crosstie website)</option>
        </select>

      </div>

      {
        type ==='external' &&
        <div className="flex flex-col items-start justify-center h-auto w-100">
          <label htmlFor="link">Link to external resource</label>
            <input
            type="text"
            name='link'
            placeholder='e.g - https://crosstiesolutions.com'
            onChange={(e) => setLink(e.target.value)}
            className="w-full h-40px border rounded p-1"
          />
          
        </div>
      }



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
        Update Report
      </button>
      
    </div>
  );
};

export default EditReport;
