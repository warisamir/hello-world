import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  console.log("Hello, World!");
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Your server is running successfully on PORT ${PORT}`);
});
