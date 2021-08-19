import express, {Request, Response} from 'express';
import dotenv = require('dotenv');

//load env variables
dotenv.config({ path: './config/config.env' });

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/v1/chores', (req: Request, res: Response) => {

    //error handling
    res.status(200).json({ success: true, msg: 'Show all chores' });
    
})

app.listen(port, console.log(`Server running on port ${port} in ${process.env.NODE_ENV}`));