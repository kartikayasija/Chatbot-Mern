import { useNavigate } from "react-router-dom";
import {useEffect,useState} from 'react';

const Avatar:React.FC = ()=>{

  const Navigate = useNavigate();
  const[user,setUser] = useState({pic:''});

  useEffect(()=>{
    const userJSON = localStorage.getItem('user');
    if(userJSON) setUser(JSON.parse(userJSON))
  },[])

  const handleClick = (e:React.FormEvent<HTMLButtonElement>)=>{
    e.stopPropagation();
    e.preventDefault();
    localStorage.removeItem('user');
    Navigate('/login');
  }

  return (
    <div className="avatar">
      <img src={user.pic} alt="user" width="50px" style={{borderRadius:'50%'}}/>
      <button onClick={handleClick}>Logout</button>
    </div>
  )
}

export default Avatar;