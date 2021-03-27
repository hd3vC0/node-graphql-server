import express from 'express';
import * as env from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';

const app = express();

env.config()

if(!process.env.PORT){
    console.log('PORT is not defined');
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT);

app.use(cors());
app.use(helmet());
app.listen(PORT,() => {
    console.log(`Service running in port ${PORT}`);
})