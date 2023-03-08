import { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
function Login() {
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

const { email, password } = formData;

const onChange= (e) => {
    setformData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
    }))
}


const onSubmit= (e) => {
    e.preventDefault();
}

return (
        <div>
        <section className="heading">
            <h1>
            <FaSignInAlt /> Login
            </h1>
            <p>LOGIN</p>
        </section>
        <section>
            <form onSubmit={onSubmit}>
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
                    <button type="submit" className="btn btn-block">Submit</button>
                </div>

            </form>
        </section>
        </div>
    );
    }

export default Login;
