const express = require("express");
const router = express.Router();
const mobileController = require("../controllers/mobileController");

router.get('/', (req, res) => {
    db.query('SELECT * FROM mobile_user', (err, results) => {
      if (err) {
        console.error('Erreur lors de la récupération des données : ' + err.message);
        res.status(500).json({ err: 'Erreur serveur' });
        return;
      }
  
      res.status(200).json(results);
    });
  });

router.post("/add", mobileController.addUser);

router.post("/delete", mobileController.deleteUser);

router.post("/update", mobileController.updateValue);

router.get("/getUserInfo", mobileController.getUserInfo);

router.post("/login", mobileController.login);

module.exports = router;