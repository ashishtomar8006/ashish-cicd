import express from "express";
import type { Application, Request, Response } from "express";
import "dotenv/config";
import cors from "cors";

const app: Application = express();
const PORT = process.env.PORT || 7000;

// * Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const quotes: string[] = [
  "Success is the sum of small efforts repeated day in and day out.",
  "Do something today that your future self will thank you for.",
  "Great things never come from comfort zones.",
  "Push yourself, because no one else is going to do it for you.",
  "Dream big. Start small. Act now.",
];

app.get("/", (req: Request, res: Response) => {
   const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  return res.send(randomQuote);
});


app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));