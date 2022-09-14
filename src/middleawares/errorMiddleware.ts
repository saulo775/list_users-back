import { Request, Response, NextFunction } from "express";

import { AppError } from "../errors/appError";

const errorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }
  return res.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message}`,
  });
};

export default errorMiddleware;