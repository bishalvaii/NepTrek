const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const {Pool} = require("pg")

const app = express();

const pool = new Pool ({
    user: "postgres",
    host: "localhost",
    database: "data",
    password: "noobmaster69",
    port: "5433"
})
// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.post("/api/contact", (req, res) => {
  const { name, email, phone, message } = req.body;
//   // Do something with the form data (e.g. send an email)
//   console.log(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`);
//   res.json({ message: "Form data received!" });
pool.query(
    'INSERT INTO contacts(name,email,phone,message) VALUES ($1, $2, $3, $4)',
    [name, email, phone, message],
    (error, results) => {
        if (error) {
            console.log(error);
            res.status(500).send("Error saving contact")
        } else {
            res.status(200).send("Contact saved successfully")
        }
    }
)
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
