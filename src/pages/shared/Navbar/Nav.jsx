import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/Authproviders";

const Nav = () => {

    const { user , logout } = useContext(AuthContext) 
    
    const handlelogout = () => {
      logout()
      .then()
      .catch()
    }

    const links = <>
    
    <li className="text-xl" > <NavLink to='/'>Home</NavLink> </li>
    <li className="text-xl" > <NavLink to='/about'>About</NavLink> </li>
    <li className="text-xl" > <NavLink to='/career'>Career</NavLink> </li>
    <li className="text-xl" > <NavLink to='/login'>Log In</NavLink> </li>
    <li className="text-xl" > <NavLink to='/register'>Register</NavLink> </li>
    
    </>
    return (
        <div>
<div className="navbar bg-base-100 font-bold text-2xl">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {links}
      </ul>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>

    {
      user ?

      <button onClick={handlelogout} className="btn">Sign Out</button>
     :
     <Link to='/login' > 
    
     <button className="btn">LOG IN</button>
     </Link>
    }


   
  </div>
</div>        </div>
    );
};

export default Nav;