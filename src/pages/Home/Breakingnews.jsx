import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Breakingnews = () => {
    return (
        <div className="flex">
       <button className="btn btn-accent bg-red-500">BREAKING NEWS</button>

       <Marquee speed={150} >
   


    <Link className="mr-10" to='/'>  Although the concept of the Palestine region and its geographical extent has varied throughout history, it is now considered to be composed by the modern State of Israel, the West Bank and the Gaza Strip.
    </Link>

    <Link className="mr-10" to='/'> Airstrikes and fighting will continue to have devastating impacts on civilians. 
    </Link>

  
   
      </Marquee>
       
        </div>
    );
};

export default Breakingnews;