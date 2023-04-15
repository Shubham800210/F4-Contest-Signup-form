import React, {useState} from 'react';


function Signup(){
 
    const [name, setName] = useState("");
    const [email,setEmail]= useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setconfirmPassword] = useState("");
    const [errors, setErrors]= useState("");



    const handelEmailChange = (e) => setEmail(e.target.value);
    const handelNameChange = (e) => setName(e.target.value);
    const handelPasswordChange = (e) => setPassword(e.target.value);
    const handelConfirmPasswordChange = (e) => setconfirmPassword(e.target.value);



    const validate = (e) =>{
        e.preventDefault();
        const errors = {};

        if(!name && !email && !password && !confirmPassword){
            errors.all= "All The fields are mandatory" ;
        }

        if(!name) errors.name = "Name is required";

        if(!email) {
            errors.email = "Email is required";
        }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            errors.email="Email is invalid";
        }
        if(!password) errors.password="Password is required";
        if(!confirmPassword)errors.confirmPassword="Please confirm password";
        if(password !== confirmPassword)errors.confirmPassword="passwords do not match";

        setErrors(errors);

        if(Object.keys(errors).length === 0){
            errors.submit = "Successfully Signed Up";
            setErrors(errors);
        }






    }

    return(
        <>
         <div className='form'>
            <h1>SignUp</h1>
             {/* <div> */}
                <input type="text" placeholder='Full Name:' onChange={handelNameChange}/>
                {errors.name && <span>{errors.name} </span>}
                <input type="email" placeholder='Email:' onChange={handelEmailChange}/>
                {errors.email && <span>{errors.email} </span>}
                <input type="text" placeholder="Password:" onChange={handelPasswordChange}/>
                {errors.password && <span>{errors.password}</span>}
                <input type="password" placeholder="Confirm Password:" onChange={handelConfirmPasswordChange}/>
                {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
                <div>
                    {/* if() */}
                  {errors.all && <span>{errors.all}</span>}
                  {errors.submit && <span className='success-msg'>{errors.submit}</span>}
                </div>

                <button type="submit" onClick={validate}>Signup</button>

             {/* </div> */}
            
         </div>
        </>
    )
}

export default Signup;


// function SignUp(){
    
//     let [userData , setUserData] = useState({name:"" , email:"", password:"", confirmPassword:""});
//     console.log(userData);
//     let [errorMsg1 , setErrorMsg1] = useState("");
//     let [errorMsg2 , setErrorMsg2] = useState("");
//     let [errorMsg3 , setErrorMsg3] = useState("");
//     let [successMsg , setSuccessMsg] = useState("");


//     function validate(e) {
//         e.preventDefault();
//         let arr = Object.keys(userData);
//         let newError = "";
//       //form validate
//         arr.map((val) => {
//           if (userData[val] === "") {
//             newError = "Error: All The fields are mandatory";
//           }
//         });
//         setErrorMsg1(newError);
//         console.log( newError , errorMsg1);

//         //email validate
//         if(!validateEmail(userData.email)){
//             setErrorMsg2("Please enter a valid email")
//         }else{
//             setErrorMsg2("")
//         }

//         //password validate
//         if(userData.password !== userData.confirmPassword){
//             setErrorMsg3("Password and Confirm Password mismatch")
//         } else{
//             setErrorMsg3("")
//         }

//         //validation
//         if( errorMsg1==="" && errorMsg2==="" && errorMsg3==="" && userData.password!=="" && userData.password === userData.confirmPassword ){
//             setSuccessMsg("Successfully Signed Up")
//         }else{
//             setSuccessMsg("")
//         }

//       }

//       function validateEmail(email) {
//         const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return re.test(email);
//       }
      
      
//     return (
//         <div className="form">
//             <h1>Signup</h1>

//             <input type="text" placeholder="Full Name" 
//             onChange={(e) => {setUserData({...userData, name: e.target.value})}} />

//             <input type="email" placeholder="Email" 
//             onChange={(e) => {setUserData({...userData, email: e.target.value})}} />

//             <input type="text" placeholder="Password" 
//             onChange={(e) => {setUserData({...userData, password: e.target.value})}} />

//             <input type="password" placeholder="Confirm Password" 
//             onChange={(e) => {setUserData({...userData, confirmPassword: e.target.value})}} />

//             <div>
//                 <div className="error-msg">{errorMsg1} </div>
//                 <div className="error-msg">{errorMsg2} </div>
//                 <div className="error-msg">{errorMsg3} </div>
//                 <div className="success-msg">{successMsg} </div>

//             </div>
//             <button type="button" onClick={validate}>Sign Up</button>
//         </div>
//     );
// }