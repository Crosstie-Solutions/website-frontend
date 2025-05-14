import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import axios from 'axios';
import { useContext, useState } from 'react';
import { CrossContext } from '../../../Context/CrossContext';
import { toast } from 'react-toastify';



function AddReport() {
  const { baseUrl, setLoading } = useContext(CrossContext);

  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [link, setLink] = useState('');
  const [overview, setOverview] = useState('');
  const [date, setDate] = useState('');
  const [reportImage, setReportImage] = useState(null);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
      }),
      Image,
    ],
    content: '<p>Start writing your blog post...</p>',
  });

  const addLink = () => {
    const url = prompt('Enter the URL');
    if (url) {
      editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
    }
  };

  
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
  

  const handleSubmit = async () => {
    // if (!title || !reportImage || !editor) return alert('Please fill in all fields');
    if (!title || !reportImage || !editor || !overview || !date || !type) return  toast.error('Please fill in all fields');

    if (type==='external' && !link) return  toast.error('Provide link to external resource');

    if (type==='external' && !link.startsWith('https')) return  toast.error('Invalid link to external resource');

    const content = editor.getHTML();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('overview', overview);
    formData.append('date', date);
    formData.append('link', link);
    formData.append('type', type);
    formData.append('content', content);
    formData.append('reportImage', reportImage);


    try {
        setLoading(true)
        window.scrollTo({ top: 0, behavior: "auto" });
        
      const response = await axios.post(`${baseUrl}/api/report`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      
      if(response.status===201){
            toast.success('Report created successfully!');
            setTitle('');
            setReportImage(null);
            editor.commands.setContent('<p></p>');
        }
            
    } catch (error) {
       if(error){
                toast.error(error.response.data.message)

                console.log("Error creating Report", error)
        }
    }finally{
        setLoading(false)
    }
  };

  return (
    <div className="max-w-3xl p-3 mx-auto space-y-3 bg-white shadow-md rounded-xl">
      <h3 className='text-20px font-semibold'>Add a Report</h3>

      <div className="flex flex-col items-start justify-center h-auto w-100">
        <label htmlFor="title">Title</label>

         <input
        className="w-full h-40px p-1 border rounded"
        placeholder="Enter report title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      </div>
              
     <div className="flex flex-col items-start justify-center h-auto w-100">
        <label htmlFor="reportImage">Featured Image (thumbnail)</label>

          <input
          type="file"
          accept="image/*"
          onChange={(e) => setReportImage(e.target.files[0])}
          className="w-full h-40px border rounded"
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
      
      <h3 className='font-semibold'>Add more contents (Optional)</h3>

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
          <button onClick={addImage} className="btn">Insert Image</button>
        </div>
      )}

      <div className="border p-3 rounded min-h-[200px]">
        <EditorContent editor={editor} />
      </div>

      <button
        onClick={handleSubmit}
        className="w-auto px-2 text-white rounded bg-crossLightPurple h-40px"
      >
        Publish Report
      </button>
    </div>
  );
}

export default AddReport;
