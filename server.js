const express = require('express');
const app = express();
const port = 3000;


app.use(express.static(__dirname));// Serve all files in the current directory as static (HTML, CSS, JS)
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Handle GET requests to the homepage (optional if you go directly to contact.html)
app.get('/', (req, res) => { 
    res.sendFile(__dirname + '/contact.html'); // Sends contact.html when someone visits the root URL
});

/*
  Route: POST /submit-form
  Purpose: This handles the form submission from contact.html.
  - When the user submits the form, their input (name, email, message)
    is sent to this server using a POST request.
  - The server logs the input to the terminal.
  - Then, it redirects the user back to contact.html to show a fresh form.
*/

// Retrieve name, email, and message input from form
app.post('/submit-form', (req, res) => {
    const name = req.body.name;       
    const email = req.body.email;
    const message = req.body.message;

    // Log the user's input in the terminal (server-side console)
    console.log('Form submitted:', { name, email, message });

    // Redirect the user back to the contact page (resets the form visually)
    res.redirect('/contact.html'); 
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});