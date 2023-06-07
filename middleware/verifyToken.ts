import { Request, Response, NextFunction } from "express";
import jwt,{JwtPayload} from "jsonwebtoken";

const verify = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      const token:string = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
      res.locals.user = decoded;
      next();
    } catch (error) {
      next({message:"Token is invalid", status:401})
    }
  }
  else{
    next({message:"There is no Token", status:401})
  }
}; 

export default verify;