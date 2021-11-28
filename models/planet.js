const planets = require("./models/Planets")



const getAllPlanets = async (req, res, next) => {
    try {
      const planets = await planet.find();
      return res.status(200).json(planets);
    } catch (err) {
      return res.status(500).json(err);
    }
  };
  
  const addNewPlanet = async (req, res, next) => {
    const planetBody = req.body;
    const newPlanet = {
      color: planetBody.color,
    };
  
    try {
      await Planet.create(newPlanet);
      return res.status(201).json('Planet added!');
    } catch (err) {
      return res.status(500).json(err);
    }
  };
  
  const updatePlanet = async (req, res, next) => {
    const id = req.params.id;
    const PlanetBody = req.body;
  
    const newPlanet = {
      color: PlanetBody.color,
    };
  
    try {
      await Planet.findByIdAndUpdate(id, newPlanet);
      return res.status(200).json('Updated planet!');
    } catch (error) {
      return res.status(500).json(error);
    }
  };
  
  
  const editPlanet = async (id, newInfo) => {
    planets = planets.map((planet) => {
      if (planet.id === id) {
        return {
          id=newid,
          name: newInfo.name,
         
        };
      } else {
        return planet;
      }
    });
  };
  
  const deletePlanet = async (id) => {
    planets = planets.filter((planet) => planet.id !== id);
  };
  const deletePlanet = async (req, res, next) => {
    const id = req.params.id;
  
    try {
      await planet.findByIdAndDelete(id);
      return res.status(200).json('Deleted planet with ID: ' + id);
    } catch (err) {
      return res.status(500).json(err);
    }
  };
  module.exports = {
    getAllPlanets,
  addNewPlanet,
  updatePlanet,
  deletePlanet,
  };