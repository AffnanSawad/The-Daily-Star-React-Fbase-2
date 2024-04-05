import { FaEye } from "react-icons/fa";

const News = ({news}) => {

    const {id,image_url,title,rating,details,total_view} = news;
    return (
        <div className="mb-10">
            
            <h1>{title} </h1>
            
           
            <img className=' w-4/5' src={image_url} alt=""  />

            <p className='text-xl font-semibold' >{details} </p>

            <div className="flex">
            <FaEye />
                <p className="-mt-1  ml-2">  {total_view} </p>
            </div>
            


        </div>
    );
};

export default News;