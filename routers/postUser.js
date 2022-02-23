const User = require("../models/User");

const router = require("express").Router();

router.post("/", async (req, res) => {
  try {
    const {id, email, name, score } = req.body;
    
    //console.log("akash")
    console.log(req.body);

    const user = await User.findOne({ email: email });

    console.log(user);

    if (!user) {
      const newUser = new User({
        id, 
        name,
        email,
        score,
      });
      await newUser.save();

      console.log(newUser);

      return res.status(200).json({
        message: "User created successfully!",
      });
    }

    await User.findOneAndUpdate(
      {
        email: email,
      },
      {
        score: score,
      }
    );

    return res.status(200).json({
      message: "User details updated successfully!",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server error try again later!",
    });
  }
});

module.exports = router;
