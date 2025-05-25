import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { CrossContext } from '../../../Context/CrossContext';
import { PHOTOS } from '../../../assets/images';


function AddProduct() {

    const { baseUrl, setLoading, setActiveScreen } = useContext(CrossContext);

    const maxImageSize = 2 * 1024 * 1024; //to limit images to 2MB in bytes
    const [imageSizeErrors, setImageSizeErrors] = useState("");


      const [title, setTitle] = useState('');
      const [price, setPrice] = useState(0);
      const [priceDiscount, setPriceDiscount] = useState(0);   
      const [pages, setPages] = useState(0);   
      const [description, setDescription] = useState('');      
      const [previews, setPreviews] = useState([]);
      const [material, setMaterial] = useState(null);


      
      const [previewsImages, setPreviewImages] = useState([]);

      const handleFileChange = (e) => {
        setPreviews(e.target.files);

        const selectedFiles = Array.from(e.target.files).slice(0, 10);

        const previewUrls = selectedFiles.map((file) => URL.createObjectURL(file));
        setPreviewImages(previewUrls);


        //to check images size (1mb max)
        const allFiles = Array.from(e.target.files);
        for (let file of allFiles) {
          if (file.size > maxImageSize) {
            setImageSizeErrors(
              `File ${file.name} is too large. Max. image size is 2MB.`
            );
            return;
          }
        }

        setImageSizeErrors(""); // Clear error if all files are okay
      };


       const handlePdfChange = (e) => {
          setMaterial(e.target.files[0]);
        };
      
      

           

          //partner request
const [productErrors, setProductErrors] = useState({});


//funtion for signup
const addProduct = async (event) => {
  
event.preventDefault();

const validationErrors = {};

//To ensure valid inputs
if (!title.trim()) {
  validationErrors.title = "product title is required";
}

if (price===0) {
  validationErrors.price = "price is required";
}

if (pages===0) {
  validationErrors.pages = "number of pages is required";
}

if (!description.trim()) {
  validationErrors.description = "description is required";
}

if (!material) {
  validationErrors.material = "Upload product material";
}

 if (!previews) {
  validationErrors.previews = "Preview images are required";
}

 else if (previews.length < 2) {
  validationErrors.previews = "A product needs 2 preview images.";
}



setProductErrors(validationErrors);

const noError = Object.keys(validationErrors).length === 0;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    formData.append("priceDiscount", priceDiscount);
    formData.append("pages", pages);
    formData.append("description", description);
    formData.append("material", material);
    

    for (let i = 0; i < previews.length; i++) {
      formData.append("previews", previews[i]);
    }
  

if (noError) {
  try {
    
    setLoading(true);
    const response = await axios.post(`${baseUrl}/api/product`,
      formData,
      {
        headers: {
           "Content-Type": "multipart/form-data"
        },
      }
    );

    if (response.status === 201) {
      toast.success(`Product added successfully`);

      setActiveScreen('overview')
    }
  } catch (error) {
    
    if(error){
      console.log("Error adding event:", error);
      toast.error(error.response.data.message);
    }
  
  } finally {
    setLoading(false);
  }
}
};
    




  return (
    <div className='flex flex-col h-auto gap-2 py-2 small:px-0 large:px-2 large:w-80 text-15px small:w-90vw'>
      <h4 className="font-semibold text-crossLightPurple small:hidden large:flex">Add Product</h4>

      <div className='flex flex-col items-end gap-2 p-1 bg-white large:p-2 rounded-10 w-100'>

        <div className='flex flex-col h-auto w-100'>
            <label htmlFor="title">Product Title</label>
            <input type="text" id='titleField' placeholder='Enter event title' name='title' className='pl-1 border rounded h-40px w-100'
             onChange={(e) => setTitle(e.target.value)}
            />
            <p className='text-vogueRed'>{productErrors && productErrors.title}</p>
        </div>

        <div className='flex flex-col h-auto w-100'>
            <label htmlFor="price">Price (Naira)</label>
            <input type="number" id='priceField' name='price' className='pl-1 border rounded h-40px w-100'
             onChange={(e) => setPrice(e.target.value)}
            />
            <p className='text-vogueRed'>{productErrors && productErrors.price}</p>
        </div>

        <div className='flex flex-col h-auto w-100'>
            <label htmlFor="priceDiscount">Price Discount (Optional)</label>
            <input type="number" id='priceDiscountField' name='priceDiscount' className='pl-1 border rounded h-40px w-100'
             onChange={(e) => setPriceDiscount(e.target.value)}
            />
        </div>

        <div className='flex flex-col h-auto w-100'>
            <label htmlFor="pages">Number of pages</label>
            <input type="number" name='pages' id='pagesField' className='pl-1 border rounded h-40px w-100'
             onChange={(e) => setPages(e.target.value)}
            />
            <p className='text-vogueRed'>{productErrors && productErrors.pages}</p>
        </div>

        <div className='flex flex-col h-auto w-100'>
            <label htmlFor="description">Product Description</label>
            <textarea type="text" name='description' id='' className='pl-1 border rounded h-150px w-100'
            placeholder='Describe this product'
             onChange={(e) => setDescription(e.target.value)}
            />
            <p className='text-vogueRed'>{productErrors && productErrors.description}</p>
        </div>


        <div className='flex flex-col h-auto w-100'>
            <label htmlFor="material">Product File (PDF)</label>
            <input type="file" name='material' id='materialField' className='pl-1 border rounded h-40px w-100'
            // accept="image/*"
            accept=".pdf"
            onChange={handlePdfChange}
            />

            <p className='text-vogueRed'>{productErrors && productErrors.material}</p>
        </div>


        <div className='flex flex-col h-auto w-100'>
            <label htmlFor="previews">Preview Images (2)</label>
            <input type="file" name='previews' id='previewsField' className='pl-1 border rounded h-40px w-100'
            accept="image/*"
            multiple
            onChange={handleFileChange}
            />

            <div className='flex flex-wrap items-center justify-center h-auto gap-2 mt-1 w-100'>
              {
                previewsImages && previewsImages.map((src, i)=>
                  <img key={i} src={src} alt={`image preview ${i + 1}`} className='w-auto rounded h-50px'/>
                )
              }
              
            </div>

            <p className='text-vogueRed'>{productErrors && productErrors.previews}</p>
            <p className='text-vogueRed'>{imageSizeErrors && imageSizeErrors}</p>
        </div>


        <button className='flex items-center justify-center text-white rounded h-40px w-100 bg-crossLightPurple'
        onClick={addProduct}
        >Add Product</button>
      </div>
    </div>
  )
}

export default AddProduct;
