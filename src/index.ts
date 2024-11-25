import express from 'express';
import dotenv from 'dotenv';
import movieRoutes from './routes/movieRoutes';
import { errorHandler } from './utils/errorHandler';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

console.log('process.env', process.env)

app.use(express.json());
app.use('/api', movieRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
