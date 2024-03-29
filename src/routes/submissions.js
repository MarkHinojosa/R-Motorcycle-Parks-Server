var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
const Submission = require("../models/Submission");

router.get("/", async (req, res) => {
  try {
    const submissions = await Submission.find();
    res.json(submissions);
  } catch (err) {
    res.json({ message: error });
  }
});

router.post("/", async (req, res) => {
  console.log(req.body);
  const { email, trailName, details, lat, lng } = req.body;

  const submission = new Submission({
    email: email,
    coordinates: req.body.coordinates,
    details: details,
    trailName: trailName,
    lat: lat,
    lng: lng
  });
  try {
    const savedSubmission = await submission.save();
    res.json(savedSubmission);
  } catch (error) {
    console.error({ message: error });
  }
});

module.exports = router;
