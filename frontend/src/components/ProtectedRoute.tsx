import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

type ReactChildrenProps = {
  children: React.ReactNode;
}

const ProtectedRoute:React.FC<ReactChildrenProps> = ({children})=>{
  const Navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(()=>{
    (async () => {
      try{
        const response = await axios.post('/api/auth/verifyToken',null,{
          headers:{
            Authorization : `Bearer ${token}`
          }
        })
        if(!response?.data?.valid) Navigate('/login');
      } catch(err) {
        Navigate('/login');
        console.log(err)
      }
    })();
  },[])

  return <>{children}</>
}

export default ProtectedRoute;