require("dotenv").config();
const app = require("./src/app");
const connectToDb = require("./src/config/database");

connectToDb();

// Dynamic PORT Assignment
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("server is running on port 3000");
});
