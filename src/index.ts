import express, { Application, NextFunction, Request, Response } from 'express';

const app: Application = express();
const port: Number = 4000; //Port bebas

app.use('/health', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ status: 200 });
}); //membuat sebuah routing atau endpoint

app.listen(port, () => console.log(`server is listerning on port ${port}`)); //untuk menjalankan servernya
