import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CrossContext } from "../../Context/CrossContext";
import axios from "axios";
import { IoSearchOutline } from "react-icons/io5";
import './ProductDetailsPage.css'


function ProductDetailsPage() {
  
  const { baseUrl, me, addToCart } = useContext(CrossContext);

  const productId = useParams().productId;
 

  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const [zoomStyle, setZoomStyle] = useState({ display: 'none' });
  const imgRef = useRef(null);

  const [loadingProduct, setLoadingProduct] = useState(false);


  
  console.log("product:", product);


  useEffect(()=>{
    const viewProduct = async ()=> {

      try {
        setLoadingProduct(true)
        const response = await axios.get(`${baseUrl}/api/product/${productId}`);
        setProduct(response.data.data);

        setSelectedImage(response.data.data.previews?.[0]);
  
      } catch (error) {
        console.error('Error fetching product:', error);
      }finally{
        setLoadingProduct(false);
      }
  
    }

    viewProduct();
  }, [productId]);

  //discount
   const discount = product && (product.priceDiscount / 100 ) * product.price;

  const discountedPrice = product && product.price - discount;




  // to split paragraph
  function splitParagraphByFullStops(text, limit = 2) {
    const sentences = text.split('.').map(s => s.trim()).filter(Boolean);
    const paragraphs = [];
  
    for (let i = 0; i < sentences.length; i += limit) {
      const chunk = sentences.slice(i, i + limit).join('. ') + '.';
      paragraphs.push(chunk);
    }
  
    return paragraphs;
  }
  

  const paragraphs = product && splitParagraphByFullStops(product.description);


  //for zoom effect
   const handleMouseMove = (e) => {
    const rect = imgRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    setZoomStyle({
      display: 'block',
      backgroundImage: `url(${selectedImage})`,
      backgroundPosition: `${xPercent}% ${yPercent}%`,
      backgroundRepeat: 'no-repeat',
      // backgroundSize: `${rect.width * 2}px ${rect.height * 2}px`,
      backgroundSize: `'200% 200%',`,
      maxWidth: '400px', // limit for larger screens
      position: 'absolute',
      top: 0,
      left: 0,
      // left: '100%',
      // width: rect.width,
      width: '100%',
      height: rect.height,
      border: '2px solid #ccc',
      zIndex: 5,
    });
  };

  const hideZoom = () => {
    setZoomStyle({ display: 'none' });
  };

  

  return (
    <div className="flex justify-start gap-5 bg-white small:items-center small:flex-col large:flex-row large:mt-17 large:text-15px large:w-83vw large:h-auto small:w-90vw small:h-auto small:mt-12 small:text-13px large:py-5 small:py-3 large:px-2 large:items-start">
      
      <div className="flex flex-col items-start h-auto gap-1 bg-white border-2 small:py-1 large:py-3 large:w-40 border-crossLightPurple small:w-100">
        
        <IoSearchOutline className="relative self-end cursor-pointer text-30px text-crossTextGray right-2" onClick={handleMouseMove}/>

        <div className="relative flex items-center justify-center bg-white cursor-pointer large:h-auto large:w-100 small:w-100 small:h-auto large:px-2 large:py-3 rounded-5 small:px-0 small:py-0"
        onMouseMove={handleMouseMove}
        onMouseLeave={hideZoom}
        >
          
           {/* Main Image */}
          {selectedImage && (
          <img src={selectedImage} ref={imgRef} alt="cover image" 
            className="shadow-lg cursor-pointer shadow-gray-600 -rotate-12 large:h-250px large:w-50 small:w-50 small:h-200px"
          /> )}
          
          <div style={zoomStyle} className="rounded cursor-pointer zoom-box" />
        </div>

        {/* Thumbnails */}
        <div className="flex gap-2 px-2 mt-4 thumbnails">
          {product && product.previews.map((preview, index) => (
            
              <img
                key={index}
                src={preview}
                alt={`Preview ${index + 1}`}
                onClick={() => setSelectedImage(preview)}
                className={`w-80px h-100px object-cover cursor-pointer border ${
                  selectedImage === preview ? 'border-crossYellow' : 'border-gray-300'
                }`}
              />
            
          ))}
        </div>
      </div>

      <div className="flex flex-col h-auto gap-2 px-1 py-2 bg-gray-100 large:w-50 small:w-100">
        <h2 className="font-semibold text-crossLightPurple large:text-17px small:text-15px">{product && product.title}</h2>

        {
          paragraphs && paragraphs.map((para, i)=>
            <p key={i}>{para}</p>
          )
        }

        
        
        <p className="font-semibold">Number of pages: <span className="font-semibold text-crossLightPurple">{product && product.pages}</span></p>

        {product && product.priceDiscount === 0 &&
        <p className="flex gap-1"><span className="font-semibold">Cost:</span> 
          <span className="font-semibold text-crossLightPurple">&#8358;{product && product.price.toLocaleString()}</span>      
        </p>}

           {product && product.priceDiscount != 0 &&
        <p className="flex gap-1"><span className="font-semibold">Cost:</span>  
          
          <span className="line-through text-crossTextGray">&#8358;{product && product.price.toLocaleString()}</span>

          <span className="font-semibold text-crossLightPurple">&#8358;{product && discountedPrice.toLocaleString()}</span>
        
        </p>}

        <div className="flex items-center justify-between h-auto w-100">
          <div className="flex items-center justify-center w-40 border rounded cursor-pointer text-crossLightPurple border-crossLightPurple h-40px"
        onClick={() => addToCart(product && product.id)}
        >Add To Cart</div>

        <Link to='/cart' className="flex items-center justify-center w-40 text-white border rounded cursor-pointer bg-crossLightPurple h-40px"
        >Checkout</Link>
        </div>

        

        

        <Link to='/our-solutions/resource-vault' className="flex items-center justify-center w-auto text-white rounded bg-crossDarkPurple h-40px">Back To Resource Vault</Link>
      </div>
    </div>
  );
}


export default ProductDetailsPage;

