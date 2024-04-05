import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";



const RightsideNav = () => {
    return (
        <div>

    <div className="p-4 w-full space-y-2 mb-6">
        <h1>Log In With: </h1>
        <button className="btn btn-outline">
            
        <FaFacebook />
       
       LogIn with GOOGLE
  
</button>
        <button className="btn btn-outline">
            
        <FaGithub />

       
       LogIn with GIT HUB
  
</button>



    </div>
    <div className="p-4 w-full space-y-2 mb-6 ">
        <h1>FIND US ON: </h1>
        <button className="btn btn-outline m-10 ">
            
        <FaFacebook />
       
       FACEBOOK
  
</button>
        <button className="btn btn-outline m-10">
            
        <FaTwitter />

       
       TWITTER
  
</button>
        <button className="btn btn-outline ml-8 ">
            
        <FaInstagram />

       
      INSTRAGRAM
  
</button>



      
    </div>



<div className="p-4 space-y-3 mb-3">

    <h1>Q ZONE</h1>

    <img src={qZone1} alt="" />
    <img src={qZone2} alt="" />
    <img src={qZone3} alt="" />




</div>



      </div>
    );
};

export default RightsideNav;