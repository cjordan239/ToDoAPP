const express = require("express");
const cors = require("cors")
const app = express();
const port = 3001;

const userRoutes = require('./src/Routes/userRoute')

app.use(express.json());
app.use(cors())

app.use('/users', userRoutes);

app.listen(port, () =>{
  console.log(`listening at ${port}`)
})


