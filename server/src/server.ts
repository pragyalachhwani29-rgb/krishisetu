import express from 'express';import cors from 'cors';import dotenv from 'dotenv';import mongoose from 'mongoose';import api from './routes/api.js';dotenv.config();
const app=express();app.use(cors());app.use(express.json());app.use('/api',api);const port=Number(process.env.PORT)||5000;
mongoose.connect(process.env.MONGODB_URI||'mongodb://127.0.0.1:27017/krishi_setu').then(()=>console.log('MongoDB connected')).catch(e=>console.warn('MongoDB unavailable; demo endpoints still run:',e.message));
app.listen(port,()=>console.log(`Krishi Setu API running at http://localhost:${port}`));
