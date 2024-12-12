import express, { json, urlencoded } from "express";
import { RegisterRoutes } from "./routes/routes";

const app = express();
app.use(urlencoded({ extended: true }));
app.use(json());

RegisterRoutes(app);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}); 