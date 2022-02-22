const User = require("../models/User");

const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const allUsers = await User.find();

    if (!User) {
      return res.status(404).json({
        message: "Users details nt found!",
      });
    }

    return res.status(200).json({
      message: "User details fetched successfully!",
      allUsers,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server error try again later!",
    });
  }
});

module.exports = router;
