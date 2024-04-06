import { Link } from "react-router-dom";
import Nav from "../shared/Navbar/Nav";
import { useContext } from "react";
import { AuthContext } from "../../Providers/Authproviders";

const Login = () => {

    const {signin} = useContext(AuthContext)

    const handlelogin = e => {
        e.preventDefault();
        const email= e.target.email.value 
        const password= e.target.password.value 

        console.log(email,password);

        signin(email,password)
        .then(result=> console.log(result.user))
        .catch(error=>console.error(error));
    }


    return (
        <div>
            <Nav></Nav>
 

<div>

<form onSubmit={handlelogin} className=" md:w-3/4 lg:w-1/2 mx-auto" >

     

<h1 className="font-bold text-center">Please Log In</h1>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input name="email" type="email" placeholder="email" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input name="password" type="password" placeholder="password" className="input input-bordered" required />
      <label className="label">
        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
      </label>
    </div>
    <div className="form-control mt-6">
      <button className="btn btn-primary">Login</button>
    </div>
  </form>


  <p className="text-2xl font-bold text-center" >DO NOT HAVE AN ACCOUNT? PLEASE  <Link className=" text-blue-600" to='/register'>REGISTER</Link> </p>




</div>
    
    </div>












    
      
    );
};

export default Login;