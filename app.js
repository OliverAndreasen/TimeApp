const express = require('express');
const app = express();
const PORT = 8080;

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


// the express.static() method is used to serve static files such as images, CSS files, and JavaScript files.
// because of security reasons, you can only access files that are in the public folder
app.use(express.static("public"))

app.get('/', (req, res) => {
    res.sendFile( __dirname + "/public/frontpage/frontpage.html");
});



app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log("Server is running on port " + PORT);
});