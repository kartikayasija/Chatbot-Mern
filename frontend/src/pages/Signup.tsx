import { useState,FormEvent,ChangeEvent } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup: React.FC = () => {
  const [input, setInput] = useState<object>({});
  const Navigate = useNavigate();
  const [loading,setLoading] = useState<boolean>(false);

  const handleSubmit = async(e:FormEvent<HTMLFormElement>)=>{
    e.stopPropagation();
    e.preventDefault();
    try{
      const response = await axios.post('/api/auth/signup',input);
      const user = response?.data;
      localStorage.setItem('user',JSON.stringify(user));

      Navigate('/');
    } catch(err:any) {
      const error = err?.response?.data?.message; 
      alert(error);
    }
  }

  const handleImg = async(e:ChangeEvent<HTMLInputElement>)=>{
    setLoading(true);
    const file = e.target.files?.[0];
    if(!file) return;
    if (file.type === "image/jpeg" || file.type === "image/png") {
      try{
        const data = new FormData();
        data.append("file", file);
        data.append("cloud_name", "dzyvijbn6");
        data.append("upload_preset", "chat-user");
        const response  = await axios.post("https://api.cloudinary.com/v1_1/dzyvijbn6/image/upload",data);
        console.log(response)
        setInput({ ...input, pic: response.data.url }); 
        setLoading(false)
      } catch(err){
        setLoading(false);
        throw err;
        
      }
    }
  }

  return (
    <div className="login">
      <div className="form">
        <h1>Signup.</h1>
        <p>Create your account</p>
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
            <input type="file" accept="image/*" onChange={handleImg}/>
            <Link to='/login' className="link">Already have an Accout?</Link>
          <button type="submit">{loading?'Loading':'Signup'}</button>
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
export default Signup;
