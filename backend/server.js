const express = require('express'); 
const connectDB = require('./config/db_config');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT 

//db
connectDB();

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});

app.use("/api/todo", require("./routes/todoRoutes"));   // Import the router objectwwwwwww

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});