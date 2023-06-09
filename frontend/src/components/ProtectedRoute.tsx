import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

type ReactChildrenProps = {
  children: React.ReactNode;
};

const ProtectedRoute: React.FC<ReactChildrenProps> = ({ children }) => {
  const Navigate = useNavigate();
  
  useEffect(() => {
    (async () => {
      try {
        const userJSON = localStorage.getItem("user");
        if(!userJSON) return Navigate('/login');

        const user = JSON.parse(userJSON); 
        const response = await axios.post("/api/auth/verifyToken", null, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        if (!response?.data?.valid) Navigate("/login");
      } catch (err) {
        Navigate("/login");
        console.log(err);
      }
    })();
  }, []);

  return <>{children}</>;
};

export default ProtectedRoute;
