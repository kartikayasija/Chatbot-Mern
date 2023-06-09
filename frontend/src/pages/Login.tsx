import { useState,FormEvent } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [input, setInput] = useState<object>({});
  const Navigate = useNavigate();

  const handleSubmit = async(e:FormEvent<HTMLFormElement>)=>{
    e.stopPropagation();
    e.preventDefault();
    try{
      const response = await axios.post('/api/auth/login',input);
      const user = response?.data;
      localStorage.setItem('user',JSON.stringify(user));
      Navigate('/');
    } catch(err:any) {
      const error = err?.response?.data?.message; 
      alert(error);
    }
  }

  return (
    <div className="login">
      <div className="form">
        <h1>Login.</h1>
        <p>Log in to your account</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            placeholder="Enter your Email"
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
          />
          <input
            type="text"
            name="password"
            placeholder="Enter your password"
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
            />
            <Link to='/signup' className="link">Create Your Account</Link>
          <button type="submit">Login</button>
        </form>
      </div>
      <div className="vector">
        <img
          src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?w=740&t=st=1686165857~exp=1686166457~hmac=33683f040907acb274dd01027461fb77126c1598e2e2d9edc701496689f4296a"
          alt="login"
        />
      </div>
    </div>
  );
};
export default Login;
