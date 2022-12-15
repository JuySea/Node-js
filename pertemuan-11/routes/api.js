// Import StudentControllers
const StudentController = require("../controllers/StudentController.js")

// Import express
const express = require("express");

// Membuat object router
const router = express.Router();

// Membuat routing

router.get("/",(req,res) => {
    res.send("Hello World");
})

router.get("/students", StudentController.index);
router.post("/students", StudentController.store);
router.put("/students/:id", StudentController.update);
router.delete("/students/:id", StudentController.destroy);

//export router
module.exports = router;