import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { CrossContext } from '../../Context/CrossContext';
import { useParams } from 'react-router-dom';



function EditProductPage() {

    const { baseUrl, setLoading, setActiveScreen } = useContext(CrossContext);


    const { productId } = useParams(); // blog ID from URL
    
         const [product, setProduct] = useState(null);

         console.log('product:', product);
    
    
        useEffect(() => {
            // Fetch existing product
            const fetchProduct = async () => {
              try {
                
                const response = await axios.get(`${baseUrl}/api/product/${productId}`);
                setProduct(response.data.data);
                
              } catch (err) {
                console.log('Error fetching product:', err);
              }
            };
        
            
              fetchProduct();
            
          }, [productId, baseUrl]);

    

    const maxImageSize = 2 * 1024 * 1024; //to limit images to 2MB in bytes
    const [imageSizeErrors, setImageSizeErrors] = useState("");


      const [title, setTitle] = useState('');
      const [price, setPrice] = useState(0);
      const [priceDiscount, setPriceDiscount] = useState(0);   
      const [pages, setPages] = useState(0);   
      const [description, setDescription] = useState('');      
      const [previews, setPreviews] = useState(null);
      const [material, setMaterial] = useState(null);


      
      const [previewsImages, setPreviewImages] = useState([]);

      const handleFileChange = (e) => {

         const fileList = e.target.files; // FileList
        const files = Array.from(fileList); // Convert to array
        
        setPreviews(files);

        const selectedFiles = Array.from(e.target.files).slice(0, 10);

        const previewUrls = selectedFiles.map((file) => URL.createObjectURL(file));
        setPreviewImages(previewUrls);

      };


       const handlePdfChange = (e) => {
          setMaterial(e.target.files[0]);
        };
      
        
          //product request
const [productErrors, setProductErrors] = useState({});
    


const idToEdit = product && product.id;



const updateProduct = async (idToEdit, updatedFields) => {
  try {
    setLoading(true)
    const formData = new FormData();


    // Append only the fields that are provided
    for (const key in updatedFields) {
      const value = updatedFields[key];

      if (value === null || value === undefined || value === '') continue;

      // Handle file fields
      if (key === 'material' && value instanceof File) {
        formData.append('material', value);
      } else if (key === 'previews' && Array.isArray(value)) {
        value.forEach((file) => {
          if (file instanceof File) {
            formData.append('previews', file);
          }
        });
      } else {
        formData.append(key, value);
      }
    }

    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }


    const response = await axios.patch(
      `${baseUrl}/api/product/edit/${idToEdit}`,
      formData
      // {
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //   },
      // }
    );

     if(response.status === 200){
          toast.success('Product updated successfully')
      }

    return response.data;
  } catch (error) {
     if(error){
          toast.error(error.response.data.message);
        console.log("Error editing product:", error);
    }
  }finally{
    setLoading(false)
  }
};


  const handleSubmit = async () => {
    
  const updatedFields = {
    title: title || null,
    description: description || null,
    price: price || null,
    pages: pages || null,
    priceDiscount: priceDiscount || null,
    material: material, // File object or undefined
    previews: previews, // Array of File objects
  };

  console.log("edit product formData:", updatedFields);

  await updateProduct(idToEdit, updatedFields);
  
};






  return (
    <div className='flex flex-col h-auto gap-2 py-2 small:px-0 large:px-2 large:w-80 text-15px small:w-90vw mt-17'>
      <h4 className="font-semibold text-crossLightPurple small:hidden large:flex">Edit Product</h4>

      <div className='flex flex-col items-end gap-2 p-1 bg-white large:p-2 rounded-10 w-100'>

        <div className='flex flex-col h-auto w-100'>
            <label htmlFor="title">Product Title</label>
            <input type="text" id='titleField' placeholder='Enter product title' name='title' className='pl-1 border rounded h-40px w-100'
             onChange={(e) => setTitle(e.target.value)}
             defaultValue={product && product.title}
            />
            <p className='text-vogueRed'>{productErrors && productErrors.title}</p>
        </div>

        <div className='flex flex-col h-auto w-100'>
            <label htmlFor="price">Price (Naira)</label>
            <input type="number" id='priceField' name='price' className='pl-1 border rounded h-40px w-100'
             onChange={(e) => setPrice(e.target.value)}
             defaultValue={product && product.price}
            />
            <p className='text-vogueRed'>{productErrors && productErrors.price}</p>
        </div>

        <div className='flex flex-col h-auto w-100'>
            <label htmlFor="priceDiscount">Price Discount (Optional)</label>
            <input type="number" id='priceDiscountField' name='priceDiscount' className='pl-1 border rounded h-40px w-100'
             onChange={(e) => setPriceDiscount(e.target.value)}
             defaultValue={product && product.priceDiscount}
            />
        </div>

        <div className='flex flex-col h-auto w-100'>
            <label htmlFor="pages">Number of pages</label>
            <input type="number" name='pages' id='pagesField' className='pl-1 border rounded h-40px w-100'
             onChange={(e) => setPages(e.target.value)}
             defaultValue={product && product.pages}
            />
            <p className='text-vogueRed'>{productErrors && productErrors.pages}</p>
        </div>

        <div className='flex flex-col h-auto w-100'>
            <label htmlFor="description">Product Description</label>
            <textarea type="text" name='description' id='' className='pl-1 border rounded h-150px w-100'
            placeholder='Describe this product'
             onChange={(e) => setDescription(e.target.value)}
             defaultValue={product && product.description}
            />
            <p className='text-vogueRed'>{productErrors && productErrors.description}</p>
        </div>


        <div className='flex flex-col h-auto w-100'>
          <div className='font-semibold text-crossBlue'>{product && product.material.split('/').pop()}</div>
          
            <label htmlFor="material" className='mt-1'>Product File (PDF)</label>
            <input type="file" name='material' id='' className='pl-1 border rounded h-40px w-100'
            // accept="image/*"
            accept=".pdf"
            onChange={handlePdfChange}
            />

            <p className='text-vogueRed'>{productErrors && productErrors.material}</p>
        </div>


        <div className='flex flex-col h-auto w-100'>
            <label htmlFor="previews">Preview Images (2)</label>
            <input type="file" name='previews' id='' className='pl-1 border rounded h-40px w-100'
            accept="image/*"
            multiple
            onChange={handleFileChange}
            />

            <div className='flex flex-wrap items-center justify-start h-auto gap-2 mt-1 w-100'>
              {
               !previews && product && product.previews.map((src, i)=>
                  <img key={i} src={src} alt={`image preview ${i + 1}`} className='w-auto rounded h-50px'/>
                )
              }
              
              {
                previews && previewsImages.map((src, i)=>
                  <img key={i} src={src} alt={`image preview ${i + 1}`} className='w-auto rounded h-50px'/>
                )
              }
            </div>

            <p className='text-vogueRed'>{productErrors && productErrors.previews}</p>
            <p className='text-vogueRed'>{imageSizeErrors && imageSizeErrors}</p>
        </div>


        <button className='flex items-center justify-center text-white rounded h-40px w-100 bg-crossLightPurple'
        onClick={handleSubmit}
        >Update Product</button>
      </div>
    </div>
  )
}

export default EditProductPage;
