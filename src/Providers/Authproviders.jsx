import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState} from "react";
import app from '../firebase/firebase.config'
import { signOut } from "firebase/auth/cordova";
 
export const  AuthContext = createContext(null);

 const auth = getAuth(app);







const Authproviders = ({children} ) => {

    const [user,setuser] = useState(null);
    const [loading,setloading]= useState(true);

    const createuser = (email,password)=>{
        setloading(true)
        return  createUserWithEmailAndPassword(auth,email,password)
      
       }


       const signin = (email,password)=>{
        setloading(true)

        return  signInWithEmailAndPassword(auth,email,password)
      
       }


       const logout = ()=> {
        setloading(true)

         return signOut(auth);
       }

         //observer (onAuth)
         useEffect( ()=> {
  
            const unsubscribe=  onAuthStateChanged(auth, (currentuser) => {
                if (currentuser) {
                 
                 setuser(currentuser)
                } 
                else {
                setuser(null)
                }
                setloading(false)
              });
      
              return ()=> {
                unsubscribe();
              }
        
             },[])

    const authInfo = {

     user,
     createuser,
     signin,
     logout


    }
    
    
    
    
    return (
        <div>
           <AuthContext.Provider value={authInfo} >
            
            {children}
            
            
            </AuthContext.Provider> 
        </div>
    );
};

export default Authproviders;