import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import { connectSQL } from './src/Database/MySql.Database';
import router from './src/Routes/index.routes'




const app = express();



connectSQL(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(router);

app.use('*', (req,res,next)=>{
    res.status(404).json({
        message: `This url not found ${req.baseUrl}`
    })
})

