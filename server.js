// The address of this server connected to the network("Internet") is
// URL :> https://localhost:8383
// IP : 127.0.0.1:8383
const express = require('express'); // This line of code initialize a variable called express 
//which basically import/require express dependency
const app = express(); // Initalizes app variable with express to use
const PORT = 8383; // specify a port for the server to listen

//This is made up data object we will send to client whenever it request for data

let data = ['Tahir']

// middleware
app.use(express.json())

//ENDPOINT - HTTP VERBS(they are methods basically) && Routes (or paths)
// The method informs the nature of request and the route is a further subdirectory 
//(basically we direct the request to the body of code to respond appropriately, and 
//these locations or routes are called endpoints)

// Website endpoints(These endpoints typically sends out html/website, these usually come into play when a user 
// writes a url in the search bar)
app.get('/' , (req , res) => {
    // this is endpoint 1 at - '/'
    res.send(`
        <body style="background : #a8da61; ">
            <h1>Data: </h1>
            <p>${JSON.stringify(data)}</p>
            <a href="/dashboard">Dashboard</a>
        </body>`)
})

app.get('/dashboard' , (req , res) => {
    // this is endpoint 1 at - '/'
    res.send(`
        <body style="background : #a8da61; " >
        <h1>Dashboard</h1>
        <a href="/">Home</a>
        </body>`
        );
})

// Api Endpoints(These endpoints typically work their magic in situations like when user interacts on the website,
// that can be the case when user enters his creditionals at the login page)

//CRUD - METHOD , CREATE - POST, READ - GET, UPDATE - PUT , DELETE - DELETE

app.get('/api/data', (req,res) => {
    console.log("this is for data");
    res.send(data);
})

app.post('/api/data', (req , res) => {
    //someone wants to create a user (for example when they click a sign up button)
    // The user clicks the sign up button after entering their credentials, and
    // their browser is wired up to send out a network request to the server to handle that action.

    const newEntry = req.body
    console.log(newEntry)
    data.push(newEntry.name)
    res.sendStatus(201)
})

app.delete('/api/data', (req , res) => {
    data.pop()
    console.log("We deleted the last element of the array")
    res.sendStatus(203)
})

console.log("nodemon running");
app.listen(PORT, () => {console.log(`Server is running at: ${PORT}`)}); // here server listens to port and a callback function for response 