var express = require("express");
var router = express.Router();

router.get("/userDocSection/consultDoc", function (req, res) {
  res.render("userDocSection/index");
});

////+++////

//Doctor routes
router.get("/userDocSection/patientList/:id", function (req, res) {
  res.render("userDocSection/docfiles/patientList");
});

router.get("/userDocSection/patientList/patientInfo/:id", function (req, res) {
  res.render("userDocSection/docfiles/patientInfo");
});

router.get("/userDocSection/reports/:id", function (req, res) {
  res.render("userDocSection/reports");
});

router.post("/sendEmail", (req, res) => {
  const Data = {
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    text: req.body.text,
  };

  sendMail(
    Data.name,
    Data.email,
    Data.subject,
    Data.text,
    function (err, data) {
      if (err) {
        res.status(500).json({ message: "Internal Error" });
      } else {
        res.redirect("/userDocSection/patientInfo");
        res.status({ message: "Email sent!!!" });
      }
    }
  );
});

router.get("/userDocSection/consultDoc/presc", function (req, res) {
  res.render("userDocSection/docfiles/prescription");
});

////+++////

//patient routes

router.get("/userDocSection/docList/:id", function (req, res) {
  res.render("userDocSection/patientfiles/docList");
});
router.get("/userDocSection/docList/docInfo/:id", function (req, res) {
  res.render("userDocSection/patientfiles/docInfo");
});

router.get("/userDocSection/changeDoc/:id", function (req, res) {
  res.render("userDocSection/patientfiles/changeDoc");
});

router.get("/userDocSection/searchDoc", function (req, res) {
  res.render("userDocSection/searchDoc");
});

router.get("/userDocSection/prescrip/:id", function (req, res) {
  res.render("userDocSection/patientfiles/prescription");
});
////+++////

//universal routes
router.get("/userDocSection/appointments/:id", function (req, res) {
  res.render("userDocSection/appointments");
});

module.exports = router;
