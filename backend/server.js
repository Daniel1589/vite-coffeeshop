const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

// Create an Express application
const app = express();
const port = 5000;

// Path to data.json and countData.json in the root directory
const dataFilePath = path.join(__dirname, "..", "data.json");
const countFilePath = path.join(__dirname, "..", "countData.json");

const corsOptions = {
  origin: "http://localhost:5173",
};

app.use(cors(corsOptions)); // Allow cross-origin requests
app.use(bodyParser.json()); // Parse JSON request bodies

// Endpoint to handle review submissions
app.post("/submit-review", (req, res) => {
  const { name, text, rating } = req.body;

  // Check if name, text, and rating are provided
  if (!name || !text || rating === undefined) {
    return res
      .status(400)
      .json({ error: "Name, text, and rating are required" });
  }

  // Read existing reviews
  fs.readFile(dataFilePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Failed to read data file" });
    }

    let reviews = [];
    if (data) {
      reviews = JSON.parse(data).filter((review) => review.id !== 0); // Ignore the first review
    }

    // Add new review with timestamp and rating
    const newReview = {
      id: reviews.length + 1, // Simple incrementing ID
      name,
      text,
      rating, // Add rating
      timestamp: new Date().toISOString(), // Add timestamp
    };

    reviews.push(newReview); // Add new review to the list

    // Save reviews back to file
    fs.writeFile(dataFilePath, JSON.stringify(reviews, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: "Failed to save review" });
      }

      // Update the review count in countData.json
      fs.readFile(countFilePath, "utf8", (err, countData) => {
        if (err) {
          return res.status(500).json({ error: "Failed to read count file" });
        }

        let count = 0;
        if (countData) {
          count = JSON.parse(countData).count;
        }

        count += 1; // Increment count

        fs.writeFile(
          countFilePath,
          JSON.stringify({ count }, null, 2),
          (err) => {
            if (err) {
              return res.status(500).json({ error: "Failed to save count" });
            }

            res.status(200).json({ message: "Review submitted successfully!" });
          }
        );
      });
    });
  });
});

// New endpoint to get reviews and the current count
app.get("/reviews", (req, res) => {
  fs.readFile(dataFilePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Failed to read data file" });
    }

    let reviews = [];
    if (data) {
      reviews = JSON.parse(data).filter((review) => review.id !== 0); // Ignore the first review
    }

    fs.readFile(countFilePath, "utf8", (err, countData) => {
      if (err) {
        return res.status(500).json({ error: "Failed to read count file" });
      }

      let count = 0;
      if (countData) {
        count = JSON.parse(countData).count;
      }

      res.status(200).json({ count, reviews });
    });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
