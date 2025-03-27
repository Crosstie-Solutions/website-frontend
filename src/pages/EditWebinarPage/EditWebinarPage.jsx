import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { CrossContext } from "../../Context/CrossContext";
import { Link, useParams } from "react-router-dom";
import { LuMoveLeft } from "react-icons/lu";
import { CiEdit } from "react-icons/ci";
import { UpdatingBtn } from "../../components/LoadingBtn/LoadingBtn";
import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";



function EditWebinarPage() {
  const { baseUrl, setLoading, setActiveScreen } = useContext(CrossContext);

  const webinarId = useParams().webinarId;

  // to view webinar
  const [webinar, setWebinar] = useState(null);
  const [loadingWebinar, setLoadingWebinar] = useState(false);
      
  console.log("webinar:", webinar);  
      
    useEffect(()=>{
      const viewWebinar = async ()=> {
  
        try {
          setLoadingWebinar(true)
          const response = await axios.get(`${baseUrl}/api/webinar/${webinarId}`);
          setWebinar(response.data.data.data);
    
        } catch (error) {
          console.error('Error fetching webinar:', error);
        }finally{
          setLoadingWebinar(false);
        }
    
      }
  
      viewWebinar();
    }, [webinarId]);
    
    
    
  //funtions to edit webinar

  const [editErrors, setEditErrors] = useState({});

  //change webinar topic
  const [editTopic, setEditTopic] = useState(false);
  const [updatingTopic, setUpdatingTopic] = useState(false);

  const [topic, setTopic] = useState("");

  const toggleTopic = () => {
    setEditTopic(!editTopic);
  };

  const changeTopic = async () => {
    const validationErrors = {};

    //To ensure valid inputs

    if (!topic.trim()) {
      validationErrors.topic = "webinar topic is required.";
    }

    setEditErrors(validationErrors);

    const noError = Object.keys(validationErrors).length === 0;

    if (noError) {
      try {
        setUpdatingTopic(true);
        setEditTopic(false);
        const response = await axios.patch(
          `${baseUrl}/api/webinar/${webinarId && webinarId}`,
          {
            topic: topic,
          }
        );

        console.log("Webinar update response:", response.data);
        if ((response.data.status = "success")) {
          toast.success("Webinar updated successfully.");
        }
      } catch (error) {
        console.error("Error updating webinar:", error);
      } finally {
        setUpdatingTopic(false);
      }
    }
  };




  
    //change webinar description
    const [editDescription, setEditDescription] = useState(false);
    const [updatingDescription, setUpdatingDescription] = useState(false);
  
    const [description, setDescription] = useState("");
  
    const toggleDescription = () => {
      setEditDescription(!editDescription);
    };
  
    const changeDescription = async () => {
      const validationErrors = {};
  
      //To ensure valid inputs
  
      if (!description.trim()) {
        validationErrors.description = "webinar description is required.";
      }
  
      setEditErrors(validationErrors);
  
      const noError = Object.keys(validationErrors).length === 0;
  
      if (noError) {
        try {
          setUpdatingDescription(true);
          setEditDescription(false);
          const response = await axios.patch(
            `${baseUrl}/api/webinar/${webinarId && webinarId}`,
            {
              description: description,
            }
          );
  
          console.log("Webinar update response:", response.data);
          if ((response.data.status = "success")) {
            toast.success("Webinar updated successfully.");
          }
        } catch (error) {
          console.error("Error updating webinar:", error);
        } finally {
          setUpdatingDescription(false);
        }
      }
    };



     //change webinar date
     const [editDate, setEditDate] = useState(false);
     const [updatingDate, setUpdatingDate] = useState(false);
   
     const [date, setDate] = useState("");
   
     
     const toggleDate = () => {
       setEditDate(!editDate);
     };
   
     const changeDate = async () => {
       const validationErrors = {};
   
       //To ensure valid inputs
   
       if (!date.trim()) {
         validationErrors.date = "webinar date is required.";
       }
   
       setEditErrors(validationErrors);
   
       const noError = Object.keys(validationErrors).length === 0;
   
       if (noError) {
         try {
           setUpdatingDate(true);
           setEditDate(false);
           const response = await axios.patch(
             `${baseUrl}/api/webinar/${webinarId && webinarId}`,
             {
               date: date,
             }
           );
   
           console.log("Webinar update response:", response.data);
           if ((response.data.status = "success")) {
             toast.success("Webinar updated successfully.");
           }
         } catch (error) {
           console.error("Error updating webinar:", error);
         } finally {
           setUpdatingDate(false);
         }
       }
     };




       //change webinar time
       const [editTime, setEditTime] = useState(false);
       const [updatingTime, setUpdatingTime] = useState(false);
     
       const [time, setTime] = useState("");
     
       
       const toggleTime = () => {
         setEditTime(!editTime);
       };
     
       const changeTime = async () => {
         const validationErrors = {};
     
         //To ensure valid inputs
     
         if (!time.trim()) {
           validationErrors.time = "webinar time is required.";
         }
     
         setEditErrors(validationErrors);
     
         const noError = Object.keys(validationErrors).length === 0;
     
         if (noError) {
           try {
             setUpdatingTime(true);
             setEditTime(false);
             const response = await axios.patch(
               `${baseUrl}/api/webinar/${webinarId && webinarId}`,
               {
                 time: time,
               }
             );
     
             console.log("Webinar update response:", response.data);
             if ((response.data.status = "success")) {
               toast.success("Webinar updated successfully.");
             }
           } catch (error) {
             console.error("Error updating webinar:", error);
           } finally {
             setUpdatingTime(false);
           }
         }
       };



        //change webinar presenter
        const [editPresenter, setEditPresenter] = useState(false);
        const [updatingPresenter, setUpdatingPresenter] = useState(false);
      
        const [presenter, setPresenter] = useState("");
      
        
        const togglePresenter = () => {
          setEditPresenter(!editPresenter);
        };
      
        const changePresenter = async () => {
          const validationErrors = {};
      
          //To ensure valid inputs
      
          if (!presenter.trim()) {
            validationErrors.presenter = "webinar presenter is required.";
          }
      
          setEditErrors(validationErrors);
      
          const noError = Object.keys(validationErrors).length === 0;
      
          if (noError) {
            try {
              setUpdatingPresenter(true);
              setEditPresenter(false);
              const response = await axios.patch(
                `${baseUrl}/api/webinar/${webinarId && webinarId}`,
                {
                  presenter: presenter,
                }
              );
      
              console.log("Webinar update response:", response.data);
              if ((response.data.status = "success")) {
                toast.success("Webinar updated successfully.");
              }
            } catch (error) {
              console.error("Error updating webinar:", error);
            } finally {
              setUpdatingPresenter(false);
            }
          }
        };



      //change webinar duration
      const [editDuration, setEditDuration] = useState(false);
      const [updatingDuration, setUpdatingDuration] = useState(false);
    
      const [duration, setDuration] = useState("");
    
      
      const toggleDuration = () => {
        setEditDuration(!editDuration);
      };
    
      const changeDuration = async () => {
        const validationErrors = {};
    
        //To ensure valid inputs
    
        if (!duration.trim()) {
          validationErrors.duration = "webinar duration is required.";
        }
    
        setEditErrors(validationErrors);
    
        const noError = Object.keys(validationErrors).length === 0;
    
        if (noError) {
          try {
            setUpdatingDuration(true);
            setEditDuration(false);
            const response = await axios.patch(
              `${baseUrl}/api/webinar/${webinarId && webinarId}`,
              {
                duration: duration,
              }
            );
    
            console.log("Webinar update response:", response.data);
            if ((response.data.status = "success")) {
              toast.success("Webinar updated successfully.");
            }
          } catch (error) {
            console.error("Error updating webinar:", error);
          } finally {
            setUpdatingDuration(false);
          }
        }
      };



      //change webinar link
      const [editWebinarLink, setEditWebinarLink] = useState(false);
      const [updatingWebinarLink, setUpdatingWebinarLink] = useState(false);
    
      const [webinarLink, setWebinarLink] = useState("");
    
      
      const toggleWebinarLink = () => {
        setEditWebinarLink(!editWebinarLink);
      };
    
      const changeWebinarLink = async () => {
        const validationErrors = {};
    
        //To ensure valid inputs
    
        if (!webinarLink.trim()) {
          validationErrors.webinarLink = "webinar link is required.";
        }
    
        setEditErrors(validationErrors);
    
        const noError = Object.keys(validationErrors).length === 0;
    
        if (noError) {
          try {
            setUpdatingWebinarLink(true);
            setEditWebinarLink(false);
            const response = await axios.patch(
              `${baseUrl}/api/webinar/${webinarId && webinarId}`,
              {
                webinarLink: webinarLink,
              }
            );
    
            console.log("Webinar update response:", response.data);
            if ((response.data.status = "success")) {
              toast.success("Webinar updated successfully.");
            }
          } catch (error) {
            console.error("Error updating webinar:", error);
          } finally {
            setUpdatingWebinarLink(false);
          }
        }
      };




      //change youtubeLink
      const [editYoutubeLink, setEditYoutubeLink] = useState(false);
      const [updatingYoutubeLink, setUpdatingYoutubeLink] = useState(false);
    
      const [youtubeLink, setYoutubeLink] = useState("");
    
      
      const toggleYoutubeLink = () => {
        setEditYoutubeLink(!editYoutubeLink);
      };
    
      const changeYoutubeLink = async () => {
        const validationErrors = {};
    
        //To ensure valid inputs
    
        if (!youtubeLink.trim()) {
          validationErrors.youtubeLink = "youtubeLink link is required.";
        }
    
        setEditErrors(validationErrors);
    
        const noError = Object.keys(validationErrors).length === 0;
    
        if (noError) {
          try {
            setUpdatingYoutubeLink(true);
            setEditYoutubeLink(false);
            const response = await axios.patch(
              `${baseUrl}/api/webinar/${webinarId && webinarId}`,
              {
                youtubeLink: youtubeLink,
              }
            );
    
            console.log("Webinar update response:", response.data);
            if ((response.data.status = "success")) {
              toast.success("Webinar updated successfully.");
            }
          } catch (error) {
            console.error("Error updating webinar:", error);
          } finally {
            setUpdatingYoutubeLink(false);
          }
        }
      };



  
  return (
    <div className="flex flex-col items-start h-auto gap-2 mt-17 large:w-50vw small:w-90vw">
      <div className="flex gap-3">
        <Link
          to="/admin-dashboard"
          className="flex items-center text-crossLightPurple"
        >
          {" "}
          <LuMoveLeft className="flex text-25px" />
        </Link>
        <h4 className="pl-0 font-semibold text-crossLightPurple large:text-20px small:text-15px">
          Edit {webinar && webinar.past===true ? "Past" : "Upcoming" } Webinar
        </h4>
      </div>

      
      <div className="flex flex-col h-auto large:gap-2 small:gap-1 w-100 large:text-15px small:text-13px">

        {/* topic */}
        
        <div className="flex items-center justify-start h-auto gap-5 w-100">
          <div className="flex flex-col h-auto w-100">
            <label htmlFor="title">Topic</label>

            <div className="flex flex-col h-auto gap-1 w-100">
              {editTopic && (
                <input
                type="text"
                placeholder="Enter webinar topic"
                name="topic"
                className="p-0.5 border rounded-4"
                onChange={(e) => setTopic(e.target.value)}
                defaultValue={webinar && webinar.topic}
              />
              )}

              {!editTopic && webinar ?
                <div className="p-0.5 border rounded-4 flex items-center h-auto justify-between bg-white">
                  <div className="w-90">{webinar && webinar.topic}</div>
                  <CiEdit
                    className="cursor-pointer text-25px text-crossLightPurple"
                    onClick={toggleTopic}
                  />
                </div> : <Skeleton />}
                

              {editTopic && (
                <p className="text-13px text-vogueRed">{editErrors.topic}</p>
              )}

              {editTopic && (
                <div className="flex flex-row items-start h-auto gap-2 w-100">
                  <button
                    className="flex items-center justify-center w-auto px-1 border rounded text-crossLightPurple border-crossLightPurple h-30px"
                    onClick={toggleTopic}
                  >
                    Cancel
                  </button>
                  <button
                    className="flex items-center justify-center w-auto px-2 text-white border rounded bg-crossLightPurple border-crossLightPurple h-30px"
                    onClick={changeTopic}
                  >
                    Save
                  </button>
                </div>
              )}

              {updatingTopic && <UpdatingBtn />}
            </div>
          </div>
        </div>

        {/* description */}

        <div className="flex items-center justify-start h-auto gap-5 w-100">
          <div className="flex flex-col h-auto w-100">
            <label htmlFor="description">Description</label>

            <div className="flex flex-col h-auto gap-1 w-100">
              {editDescription && (
                <textarea
                type="text"
                placeholder="Enter webinar description"
                name="description"
                className="p-0.5 border rounded-4"
                onChange={(e) => setDescription(e.target.value)}
                defaultValue={webinar && webinar.description}
              />
              )}

              {!editDescription && webinar ?
                <div className="p-0.5 border rounded-4 flex items-center h-auto justify-between bg-white">
                  <div className="w-90">{webinar && webinar.description}</div>
                  <CiEdit
                    className="cursor-pointer text-25px text-crossLightPurple"
                    onClick={toggleDescription}
                  />
                </div> : <Skeleton />}

              {editDescription && (
                <p className="text-13px text-vogueRed">{editErrors.description}</p>
              )}

              {editDescription && (
                <div className="flex flex-row items-start h-auto gap-2 w-100">
                  <button
                    className="flex items-center justify-center w-auto px-1 border rounded text-crossLightPurple border-crossLightPurple h-30px"
                    onClick={toggleDescription}
                  >
                    Cancel
                  </button>
                  <button
                    className="flex items-center justify-center w-auto px-2 text-white border rounded bg-crossLightPurple border-crossLightPurple h-30px"
                    onClick={changeDescription}
                  >
                    Save
                  </button>
                </div>
              )}

              {updatingDescription && <UpdatingBtn />}
            </div>
          </div>
        </div>
        
            {/* date and time */}
        <div className="flex items-center justify-between h-auto gap-5 w-100">
          <div className="flex flex-col w-40 h-auto">
            <label htmlFor="date">Date</label>

            <div className="flex flex-col h-auto gap-1 w-100">
              {editDate && (
                <input
                type="date"
                placeholder="Enter webinar date"
                name="date"
                className="p-0.5 border rounded-4"
                onChange={(e) => setDate(e.target.value)}
                defaultValue={webinar && webinar.date}
              />
              )}

              {!editDate && webinar ?
                <div className="p-0.5 border rounded-4 flex items-center h-auto justify-between bg-white">
                  <div className="w-90">{webinar && webinar.date}</div>
                  <CiEdit
                    className="cursor-pointer text-25px text-crossLightPurple"
                    onClick={toggleDate}
                  />
                </div> : <Skeleton />
              }

              {editDate && (
                <p className="text-13px text-vogueRed">{editErrors.date}</p>
              )}

              {editDate && (
                <div className="flex flex-row items-start h-auto gap-2 w-100">
                  <button
                    className="flex items-center justify-center w-auto px-1 border rounded text-crossLightPurple border-crossLightPurple h-30px"
                    onClick={toggleDate}
                  >
                    Cancel
                  </button>
                  <button
                    className="flex items-center justify-center w-auto px-2 text-white border rounded bg-crossLightPurple border-crossLightPurple h-30px"
                    onClick={changeDate}
                  >
                    Save
                  </button>
                </div>
              )}

              {updatingDate && <UpdatingBtn />}
            </div>
          </div>

          <div className="flex flex-col w-40 h-auto">
            <label htmlFor="time">Time</label>

            <div className="flex flex-col h-auto gap-1 w-100">
              {editTime && (
                <input
                type="time"
                placeholder="Enter webinar time"
                name="time"
                className="p-0.5 border rounded-4"
                onChange={(e) => setTime(e.target.value)}
                defaultValue={webinar && webinar.time}
              />
              )}

              {!editTime && webinar ?
                <div className="p-0.5 border rounded-4 flex items-center h-auto justify-between bg-white">
                  <div className="w-90">{webinar && webinar.time}</div>
                  <CiEdit
                    className="cursor-pointer text-25px text-crossLightPurple"
                    onClick={toggleTime}
                  />
                </div> : <Skeleton />
              }

              {editTime && (
                <p className="text-13px text-vogueRed">{editErrors.time}</p>
              )}

              {editTime && (
                <div className="flex flex-row items-start h-auto gap-2 w-100">
                  <button
                    className="flex items-center justify-center w-auto px-1 border rounded text-crossLightPurple border-crossLightPurple h-30px"
                    onClick={toggleTime}
                  >
                    Cancel
                  </button>
                  <button
                    className="flex items-center justify-center w-auto px-2 text-white border rounded bg-crossLightPurple border-crossLightPurple h-30px"
                    onClick={changeTime}
                  >
                    Save
                  </button>
                </div>
              )}

              {updatingTime && <UpdatingBtn />}
            </div>
          </div>
        </div>

            {/* presenter and duration */}
        <div className="flex items-center justify-between h-auto gap-5 w-100">
          <div className="flex flex-col w-40 h-auto">
            <label htmlFor="presenter">Presenter</label>

            <div className="flex flex-col h-auto gap-1 w-100">
              {editPresenter && (
                <input
                type="text"
                placeholder="Enter webinar presenter"
                name="presenter"
                className="p-0.5 border rounded-4"
                onChange={(e) => setPresenter(e.target.value)}
                defaultValue={webinar && webinar.presenter}
              />
              )}

              {!editPresenter && webinar ?
                <div className="p-0.5 border rounded-4 flex items-center h-auto justify-between bg-white">
                  <div className="w-90">{webinar && webinar.presenter}</div>
                  <CiEdit
                    className="cursor-pointer text-25px text-crossLightPurple"
                    onClick={togglePresenter}
                  />
                </div> : <Skeleton />
              }

              {editPresenter && (
                <p className="text-13px text-vogueRed">{editErrors.presenter}</p>
              )}
              

              {editPresenter && (
                <div className="flex flex-row items-start h-auto gap-2 w-100">
                  <button
                    className="flex items-center justify-center w-auto px-1 border rounded text-crossLightPurple border-crossLightPurple h-30px"
                    onClick={togglePresenter}
                  >
                    Cancel
                  </button>
                  <button
                    className="flex items-center justify-center w-auto px-2 text-white border rounded bg-crossLightPurple border-crossLightPurple h-30px"
                    onClick={changePresenter}
                  >
                    Save
                  </button>
                </div>
              )}

              {updatingPresenter && <UpdatingBtn />}
            </div>
          </div>

          <div className="flex flex-col w-40 h-auto">
            <label htmlFor="duration">Duration</label>

            <div className="flex flex-col h-auto gap-1 w-100">
              {editDuration && (
                <input
                type="text"
                placeholder="Enter webinar duration"
                name="duration"
                className="p-0.5 border rounded-4"
                onChange={(e) => setDuration(e.target.value)}
                defaultValue={webinar && webinar.duration}
              />
              )}

              {!editDuration && webinar ?
                <div className="p-0.5 border rounded-4 flex items-center h-auto justify-between bg-white">
                  <div className="w-90">{webinar && webinar.duration}</div>
                  <CiEdit
                    className="cursor-pointer text-25px text-crossLightPurple"
                    onClick={toggleDuration}
                  />
                </div> : <Skeleton />
              }

              {editDuration && (
                <p className="text-13px text-vogueRed">{editErrors.duration}</p>
              )}
              

              {editDuration && (
                <div className="flex flex-row items-start h-auto gap-2 w-100">
                  <button
                    className="flex items-center justify-center w-auto px-1 border rounded text-crossLightPurple border-crossLightPurple h-30px"
                    onClick={toggleDuration}
                  >
                    Cancel
                  </button>
                  <button
                    className="flex items-center justify-center w-auto px-2 text-white border rounded bg-crossLightPurple border-crossLightPurple h-30px"
                    onClick={changeDuration}
                  >
                    Save
                  </button>
                </div>
              )}

              {updatingDuration && <UpdatingBtn />}
            </div>
          </div>
        </div>

            {/* webinar link */}
        <div className="flex items-center justify-start h-auto gap-5 w-100">
          <div className="flex flex-col h-auto w-100">
            <label htmlFor="category">Webinar Link</label>
            

            <div className="flex flex-col h-auto gap-1 w-100">
              {editWebinarLink && (
                <input
                type="text"
                placeholder="Enter webinar link"
                name="webinarLink"
                className="p-0.5 border rounded-4"
                onChange={(e) => setWebinarLink(e.target.value)}
                defaultValue={webinar && webinar.webinarLink}
              />
              )}

              {!editWebinarLink && webinar ?
                <div className="p-0.5 border rounded-4 flex items-center h-auto justify-between bg-white">
                  <div className="w-90">{webinar && webinar.webinarLink}</div>
                  <CiEdit
                    className="cursor-pointer text-25px text-crossLightPurple"
                    onClick={toggleWebinarLink}
                  />
                </div> : <Skeleton />
              }

              {editWebinarLink && (
                <p className="text-13px text-vogueRed">{editErrors.webinarLink}</p>
              )}
              

              {editWebinarLink && (
                <div className="flex flex-row items-start h-auto gap-2 w-100">
                  <button
                    className="flex items-center justify-center w-auto px-1 border rounded text-crossLightPurple border-crossLightPurple h-30px"
                    onClick={toggleWebinarLink}
                  >
                    Cancel
                  </button>
                  <button
                    className="flex items-center justify-center w-auto px-2 text-white border rounded bg-crossLightPurple border-crossLightPurple h-30px"
                    onClick={changeWebinarLink}
                  >
                    Save
                  </button>
                </div>
              )}

              {updatingWebinarLink && <UpdatingBtn />}
            </div>
          </div>
        </div>

        {/* youtube link */}
          
        {webinar && webinar.past===true &&
        <div className="flex items-center justify-start h-auto gap-5 w-100">
          <div className="flex flex-col h-auto w-100">
            <label htmlFor="category">Youtube Link</label>
            
            
            <div className="flex flex-col h-auto gap-1 w-100">
              {editYoutubeLink && (
                <input
                type="text"
                placeholder="Enter youtube link"
                name="youtubeLink"
                className="p-0.5 border rounded-4"
                onChange={(e) => setYoutubeLink(e.target.value)}
                defaultValue={webinar && webinar.youtubeLink}
              />
              )}

              {!editYoutubeLink && webinar ?
                <div className="p-0.5 border rounded-4 flex items-center h-auto justify-between bg-white">
                  <div className="w-90">{webinar && webinar.youtubeLink}</div>
                  <CiEdit
                    className="cursor-pointer text-25px text-crossLightPurple"
                    onClick={toggleYoutubeLink}
                  />
                </div> : <Skeleton />
              }

              {editYoutubeLink && (
                <p className="text-13px text-vogueRed">{editErrors.youtubeLink}</p>
              )}
              

              {editYoutubeLink && (
                <div className="flex flex-row items-start h-auto gap-2 w-100">
                  <button
                    className="flex items-center justify-center w-auto px-1 border rounded text-crossLightPurple border-crossLightPurple h-30px"
                    onClick={toggleYoutubeLink}
                  >
                    Cancel
                  </button>
                  <button
                    className="flex items-center justify-center w-auto px-2 text-white border rounded bg-crossLightPurple border-crossLightPurple h-30px"
                    onClick={changeYoutubeLink}
                  >
                    Save
                  </button>
                </div>
              )}

              {updatingYoutubeLink && <UpdatingBtn />}
            </div>
          </div>
        </div>}
        
      </div>
    </div>
  );
}

export default EditWebinarPage;
