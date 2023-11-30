import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

// Load the .env file
dotenv.config();

// Creat the express App
const app: Express = express();

// Get the port from the environment
const port = process.env.PORT;

// Define the routes
app.get('/', (req: Request, res: Response) => {
	res.send('Web Terminal Root');
});

// Start the server
app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
