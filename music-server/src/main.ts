import express from 'express';
const app: express.Application = express();
const port: number = 3000;

// Handling '/' Request
app.get('/', (_req, _res) => {
	_res.send("TypeScript With Express");
});

// Server setup
app.listen(port, () => {
	console.log(`TypeScript with Express 
		http://localhost:${port}/`);
});

