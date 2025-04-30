import express from 'express';
const app: express.Application = express();
const port: number = 3000;
const appRoot = '/wetwayne-music-server'


app.get(`${appRoot}/:sondId`, (req, res) => {
	console.log('received')
	res.sendFile('/home/noah/Music/Anamanaguchi/00 - Anamanaguchi - Miku feat. Hatsune Miku.flac')
});

app.listen(port, () => {
	console.log(`TypeScript with Express 
		http://localhost:${port}${appRoot}/`);
});

