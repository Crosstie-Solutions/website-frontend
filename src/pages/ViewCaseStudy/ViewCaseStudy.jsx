import React, { useContext, useEffect, useState } from 'react';
import { PHOTOS } from '../../assets/images';
import { CrossContext } from '../../Context/CrossContext';
import axios from "axios";
import { Link, useParams } from 'react-router-dom';


function ViewCaseStudy() {

    const {
    baseUrl, me, formatDate,
    } = useContext(CrossContext);

    const postId = useParams().postId;
    

    const [post, setPost] = useState(null);
    const [loadingPost, setLoadingPost] = useState(false);

    
    console.log("case study:", post);
        
        
    useEffect(()=>{
        const viewPost = async ()=> {

        try {
        setLoadingPost(true)
        const response = await axios.get(`${baseUrl}/api/case-study/${postId}`);
        setPost(response.data.data.data);
    
        } catch (error) {
        console.error('Error fetching case study:', error);
        }finally{
        setLoadingPost(false);
        }
    
    }

    viewPost();
    }, [postId]);


    // to split paragraph
    // function splitParagraphByFullStops(text, limit = 3) {
    // const sentences = text.split('.').map(s => s.trim()).filter(Boolean);
    // const paragraphs = [];
    
    // for (let i = 0; i < sentences.length; i += limit) {
    //     const chunk = sentences.slice(i, i + limit).join('. ') + '.';
    //     paragraphs.push(chunk);
    // }
    
    // return paragraphs;
    // }
    


    // const mainParagraphs = post && splitParagraphByFullStops(post.mainContent);




    //related case studies
    const [relatedCaseStudies, setRelatedCaseStudies] = useState([]);
    
    console.log("relatedCaseStudies:", relatedCaseStudies)
    
    useEffect(()=>{
    const viewRelatedCaseStudies = async () => {
      try {
       
        const response = await axios.get(`${baseUrl}/api/case-study/related/${postId}`);
    
        setRelatedCaseStudies(response.data.data.matchingCaseStudies);
      } catch (dupError) {
        console.log("error fetching Related CaseStudies:", dupError);
      }finally{
      }
    };
    
    viewRelatedCaseStudies();
    }, [postId]);



    
  return (
    <div className='flex flex-col items-center h-auto bg-white large:mt-17 w-100vw small:mt-12'>
        
        <div className='relative flex flex-col items-start h-auto w-100'>
          <img src={post && post.caseStudyImage} alt="image" className='h-auto w-100'/>
  
          <div className='absolute flex flex-col items-start text-white large:gap-2 large:justify-start large:pt-20 large:pl-10 bg-caseStudyOverlay h-100 w-100 small:pl-3 small:pt-0 small:justify-end small:gap-1 small:pb-2 large:pb-0'>
            
              <div className='large:text-20px'>Case Studies</div>
                <div className='font-semibold large:text-35px large:w-50 small:w-100'>{post && post.title}</div>
                <div className='text-crossYellow'>By <span className="font-semibold">{post && post.author}</span> | {post && post.date}</div>
          </div>
        </div>
  
  
        <div className='relative z-10 flex flex-col items-center gap-5 pt-5 bg-white min-h-45vh w-100 large:-top-20'>

            {/* result and the rest */}
           <div className='flex flex-col items-start h-auto large:gap-5 w-83vw small:gap-3'>
                <div className='flex flex-col h-auto gap-2'>
                        <h4 className='font-semibold large:text-25px small:text-17px'>The Challenge</h4>
                        <p>{post && post.challenge}</p>
                </div>

                <div className='flex flex-col h-auto gap-2'>
                        <h4 className='font-semibold large:text-25px small:text-17px'>The Solution</h4>
                        <p>{post && post.solution}</p>
                </div>


                <div className='flex flex-col h-auto gap-2'>
                        <h4 className='font-semibold large:text-25px small:text-17px'>The Result</h4>
                        <p>{post && post.result}</p>
                </div>
           </div>

           {/* related case studies */}

           <div className='flex flex-col items-center h-auto gap-3 large:w-83vw'>
                <h3 className='font-semibold large:text-25px small:text-17px'>Related Case Studies</h3>


                <div className='flex flex-row flex-wrap items-center justify-center h-auto gap-5 w-100'>
                    {
                        relatedCaseStudies && relatedCaseStudies.map((post, i)=>
                            <Link 
                                to={`/case-studies/${post._id}`}
                                 className='relative h-auto rounded w-350px'>
                                <img src={post.caseStudyImage} alt="photo" className='rounded w-100 h-100'/>
                            
                                <div className='absolute top-0 flex flex-col items-start justify-around pl-3 text-white rounded h-100 bg-caseStudyOverlay w-100'>
                                    <div className='text-15px'>Case Study</div>
        
                                    <div className='flex flex-col gap-1 w-100'>
                                        <div className='font-semibold large:text-20px small:text-17px'>{post.title}</div>
                                        
                                        <div className='flex flex-row gap-1 text-15px w-100 text-crossYellow'>By <span className="">{post.author}</span> | <span><div className="">{post.date}</div></span></div>
                                    </div>
                                </div>
                            </Link>
                        )
                    }
                    
                   
                    
                </div>
           </div>
        </div>
      </div>
  )
}

export default ViewCaseStudy;
