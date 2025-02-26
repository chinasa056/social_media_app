// const express = require ("express");

// const port = 5566;

// const app = express();
// app.use

const express = require("express");
const connection = require("./database/dbconnect");
const userRoutes = require("./routes/userRoutes");
const followRoutes = require("./routes/followRoutes");

const PORT = 3000;

const app = express();

app.use(express.json());

app.use('/users', userRoutes);
app.use('/follows', followRoutes)

app.listen(PORT, async () => {
    await connection()
    console.log(`Server is listening on port:${PORT}`);
});