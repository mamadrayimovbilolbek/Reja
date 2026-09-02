const http = require("http");

const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://todouser:todo14@cluster0.b91ez.mongodb.net/Reja?authSource=admin";

mongodb.connect(connectionString, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err, client) => {
        if (err) console.log("ERROR on connection MongoDB");
        else{
            console.log("MongoDB connection succeed");
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

