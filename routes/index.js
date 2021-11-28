const router = require('express').Router();
const planetsHandlers = require('../controllers/planet');
const bodyValidator = require('../middlewares/planetValidator');

router.get('/planets', planetsHandlers.getAllPlanets);
router.post('/planets', bodyValidator, planetsHandlers.addNewPlanet);
router.delete('/planet', planetHandlers.deletePlanets);
router.put(
  '/planet/:id',
  bodyValidator,
  planetHandlers.updatePlanet
);

router.use('*', (req, res, next) => {
  return res.status(404).json('Not Found.');
});

module.exports = router;