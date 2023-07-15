import express from 'express' ;
import dotenv from 'dotenv';
// import morgan from 'morgan';
import connect  from './config/db/index.js';
import authRoutes from './routes/authRoute.js';
import categoryRoutes from './routes/categoryRoutes.js';
import productRoutes from './routes/productRoutes.js';
import cors from 'cors'

//config env
dotenv.config()

connect();

//rest obj
const app = express();

// middleware
app.use(cors());
app.use(express.json())
// app.use(morgan('dev'))

app.use('/api/v1/auth', authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

app.get('/', (req, res) => {
    res.send("hello World!");
})

//Port
const PORT = process.env.PORT || 8080;

//Run listen
app.listen(PORT, () => {
    console.log(`Server Running on ${process.env.DEV_MODE} on port ${PORT}`);
});