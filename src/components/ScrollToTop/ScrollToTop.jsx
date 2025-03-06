import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';



function ScrollToTop() {

    const { pathname } = useLocation();

    useEffect(() =>{
        window.scrollTo({top: 0, behavior: "auto"});
    }, [pathname]);

  return null;
}


export default ScrollToTop
