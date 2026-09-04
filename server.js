// const http = require("http");
// const app = require("./app");

// const server = http.createServer(app);
// let PORT = 3000;
// server.listen(PORT, function () {
//   console.log(
//     `The Server is running successfully on port: ${PORT}, http://localhost:${PORT}`,
//   );
// });



const http = require("http");

const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://mamadrayimovbilolbek001_db_user:ol85yRXRtVqHvURV@cluster0.4ay2yly.mongodb.net/Reja?=cluster0";

mongodb.connect(connectionString, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err, client) => {
        if (err) console.log("ERROR on connection MongoDB");
        else{
            console.log("MongoDB connection succeed");
            db = client.db();
            // console.log(client);
            module.exports = client;
            const app = require("./app");
            const server = http.createServer(app);
            const PORT = 3000;
            server.listen(PORT, function () {
                console.log(`The server is running succesfully on port: ${PORT}, http://localhost:${PORT}`);
            });
        }
    }
)

