import cors from "cors";
import express from "express";

const app = express();
const appRouter = express.Router();

app.use(cors());
app.use(express.json());

app.use("/api", appRouter);

appRouter.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(process.env.PORT || 3002, () => {
  console.log(`Server listening on ${process.env.PORT || 3002}`);
});
