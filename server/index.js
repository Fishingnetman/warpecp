const express = require("express");
const cors = require("cors");
const taskRoutes = require("./routes/tasks.routes");
const app = express();
const port = process.env.PORT || 3000;

// Update CORS configuration to handle both development and production
const allowedOrigins = ['https://warpecp.com', 'http://localhost:8080'];
app.use(cors({
  origin: function(origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      return callback(new Error('The CORS policy for this site does not allow access from the specified Origin.'), false);
    }
    return callback(null, true);
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Test database connection
app.get("/api/test", async (req, res) => {
  try {
    const db = require("./config/db.config");
    const [rows] = await db.query("SELECT 1");
    res.json({ message: "Database connection successful", data: rows });
  } catch (error) {
    console.error("Database connection error:", error);
    res.status(500).json({ 
      message: "Database connection failed", 
      error: error.message 
    });
  }
});

// Use routes
app.use("/api", taskRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
