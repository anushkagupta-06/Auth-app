const ensureAuthenticated = require("../middlewares/auth");

const router = require("express").Router();

router.get("/", ensureAuthenticated, (req,res) => {
    console.log("----logged in user detail----",req.user);
    res.status(200).json([
        {
            name: "mobile",
            price: 10000
        },
        {
            name: "tv",
            price: 20000
        }
    ])          //sets the status code to 200 and sends data to frontend in json format
})

module.exports = router; 