import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftsideNav = () => {
    const [categories,setcategories] = useState([]);

    useEffect(()=>{
        fetch('categories.json')
        .then(res=> res.json())
        .then(data=> setcategories(data))
    } ,[])
   

    return (
        <div className="space-y-6">
     

     <h1 className="text-2xl"> ALL CATEGORIES  </h1>

    {
        categories.map( catagory => <Link
             
             className="block ml-4 text-xl  font-semibold"
             key={catagory.id} 
             to={`/category/${catagory.id}`}
             
             >
              

                 
                 
                 {catagory.name} 
                 
                 
                 </Link>    )
    }

        </div>
    );
};

export default LeftsideNav;