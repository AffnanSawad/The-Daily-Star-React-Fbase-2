import { useEffect, useState } from "react";
import News from "./News";

const Mainnews = () => {
    const [newss,setnews] = useState([]);

    useEffect( ()=> {
        fetch('news.json')
        .then(res=>res.json())
        .then(data=>setnews(data))
    } ,[])
    return (
        <div>

    {
        newss.map( news=> <News key={news.id} news={news} ></News>   )
    }




        </div>
    );
};

export default Mainnews;