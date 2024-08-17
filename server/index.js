const express = require("express");
const app = express();
const port = 3001;

const userRoutes = require('./src/Routes/userRoute')

app.use(express.json());

app.use('/users', userRoutes);

app.listen(port, () =>{
  console.log(`listening at ${port}`)
})


