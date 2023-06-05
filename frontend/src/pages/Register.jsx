import { useEffect, useState } from "react";
import {useSelector , useDispatch } from "react-redux";
import {useNavigate } from "react-router-dom"
import {toast} from "react-toastify";
import Spinner from "../components/Spinner"
import {register , reset } from "../features/auth/auth/authSlice"
import { FaUser } from "react-icons/fa";


function Register() {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

const { name, email, password, password2 } = formData;
const navigate = useNavigate();
const dispatch = useDispatch();

const { user, isLoading, isError, isSuccess ,message }= useSelector(
    (state) => state.auth
    );


useEffect(() =>{
    if (isError){
        toast.error(message)
    }
    // IF USER LOGGED IN THEN GO TO / 
    if (isSuccess || user ){
        navigate ('/')
    }

    dispatch(reset())

},[user , isError, isSuccess , message , dispatch , navigate ])

const onChange= (e) => {
    setformData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
    }))
}


const onSubmit= (e) => {
    e.preventDefault();

    if (password !== password2){
        toast.error('Passwords do not match')
    }else{
        const userData = {
            name,
            email,
            password,
        }

    dispatch(register(userData))
    }


}
if (isLoading){
    return <Spinner />
    // i stopped here i need to open the serveer to check if the user can bre registred an will be redirected to /
}
return (
        <div>
        <section className="heading">
            <h1>
            <FaUser /> Register
            </h1>
            <p>Please create an account</p>
        </section>
        <section>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input
                        type="name"
                        className="form-control"
                        id="name"
                        name="name"
                        value={name}
                        placeholder="Enter your name "
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={email}
                        placeholder="Enter your email "
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={password}
                        placeholder="Enter password "
                        onChange={onChange}
                    />
                </div>

                <div className="form-group">
                    <input
                        type="password"
                        className="form-control"
                        id="password2"
                        name="password2"
                        value={password2}
                        placeholder="Confirm password "
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-block">Submit</button>
                </div>

            </form>
        </section>
        </div>
    );
    }

export default Register;
