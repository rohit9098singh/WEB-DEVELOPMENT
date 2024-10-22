const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
app.use(express.json());

// Directory where files are stored
const filesDirectory = path.join(__dirname, 'files');
console.log(filesDirectory);


// Endpoint to list all files in the ./files/ directory
app.get("/files", (req, res) => {
    fs.readdir(filesDirectory, (err, files) => {
        if (err) {
            console.error("Error reading directory:", err);
            return res.status(500).json({ error: "Unable to read files directory" });
        }
        res.status(200).json(files);
    });
});

// Endpoint to get content of a specific file by name
app.get("/file/:filename", (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(filesDirectory, filename);

    console.log("Requested file:", filename);
    console.log("Constructed file path:", filePath);

    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            console.error("File access error:", err);
            return res.status(404).send("File not found");
        }

        fs.readFile(filePath, "utf8", (err, data) => {
            if (err) {
                console.error("File read error:", err);
                return res.status(500).send("Error reading file");
            }
            res.status(200).send(data);
        });
    });
});

// Handle all other undefined routes
app.use((req, res) => {
    res.status(404).send("404 Not Found");
});

module.exports = app;

// Start the server on port 3000
if (require.main === module) {
    const port = 3000;
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}
