import express from 'express';
import cors from 'cors';

const app = express();
//To resolve the cors policy issue.
app.use(cors());

app.get('/', (req, res) => {
    res.send("HELLO WORKING")
})

const jokes = [
    {
        joke: "Why did the chicken cross the road?"
    },
    {
        joke: "To get to the other side"
    }
]

app.get('/api/jokes', (req, res) => {
    res.send(jokes);
})

app.listen(3000, () => {
    console.log("App running at port 3000");
})