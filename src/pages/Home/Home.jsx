import Header from "../shared/Header/Header";
import Nav from "../shared/Navbar/Nav";
import RightsideNav from "../shared/RightsideNav/RightsideNav";
import LeftsideNav from "../shared/leftsideNav/LeftsideNav";
import Breakingnews from "./Breakingnews";
import Mainnews from "./Mainnews";

const Home = () => {





    return (
        <div>
            <Header>  </Header>
            <Breakingnews></Breakingnews>
            <Nav></Nav>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6" >

         <div>
          
          <LeftsideNav></LeftsideNav>

         </div>


         <div className=" col-span-1 md:col-span-2 lg:col-span-2" >
           
         <Mainnews></Mainnews>
         </div>

         <div>

            <RightsideNav></RightsideNav>
         </div>






          </div>


        </div>
    );
};

export default Home;