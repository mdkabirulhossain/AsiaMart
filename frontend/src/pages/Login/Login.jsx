import './Login.css';
import { IoIosEye } from "react-icons/io";
import { FaUser,FaEyeSlash } from "react-icons/fa";
import { useState } from 'react';
import { Link } from "react-router-dom";

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({
        email:"",
        password:""
    })
    const onChangeHandler = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data =>({...data, [name]:value}))

    }

    const handleSubmit = (event)=>{
        event.preventDefault();
    }
    // console.log(data)
    return (
        <div className="hero bg-base-200 ">
            <div className="hero-content">

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className='flex justify-center'>
                            <div className='flex justify-center items-center border rounded-full w-12 h-12 text-orange-500 border-orange-500'>
                                <FaUser></FaUser>
                            </div>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" onChange={onChangeHandler} name='email' value={data.email} placeholder="email" className="border py-1 pl-2 rounded-md input-bordered w-full outline-none" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className='flex justify-between items-center'>
                                <input type={showPassword? "text" : 'password'} placeholder="password" onChange={onChangeHandler} name='password' value={data.password} className="border py-1 pl-2 rounded-md input-bordered w-full outline-none" required />
                                <div className='absolute right-10 cursor-pointer' >
                                   {
                                    showPassword? 
                                    <FaEyeSlash onClick={()=>setShowPassword(false)}/>
                                    
                                    :
                                    <IoIosEye onClick={()=>setShowPassword(true)}/>
                                   }
                                    
                                </div>
                            </div>
                            <label className="label">
                                
                                <Link to='/forgotPassword' href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-1">
                            <button type='submit' className="w-full bg-orange-500 text-white rounded-md py-1">Login</button>
                        </div>
                        <p className='text-sm'>Don't have account?<Link to='/signUp'><span className='text-orange-500 hover:underline'> Sign Up</span></Link> </p>
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default Login;