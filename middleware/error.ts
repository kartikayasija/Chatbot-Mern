import { Request, Response, NextFunction } from "express";

interface customError extends Error {
  status: number;
}


const errorHandler = (err: customError, req: Request, res: Response, next: NextFunction): void => {
  console.log(err)
  const statusCode: number = err.status || (res.statusCode===200 ? 500 : res.statusCode);
  // const errorMessage: string = err.message || 'Internal Server Error';

  res.status(statusCode).json(err);
};

export default errorHandler;