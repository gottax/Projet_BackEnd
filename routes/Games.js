const { Router } = require("express");
const router = new Router();
const { findAll, findByPk, create } = require("../Models/Games");
const {Games}=require("../Models");

router.get("/Games", async (req, res) => {
  try {
    const games = await Games.findAll();
    res.json(games);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/Games/:id", async (req, res) => {
  try {
    const game = await findByPk(req.params.id);
    if (!game) {
      return res.status(404).send("Game not found");
    }
    res.json(game);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/Games", async (req, res) => {
  try {
    const game = await create(req.body);
    res.status(201).json(game);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/Games/:id", async (req, res) => {
  try {
    const game = await findByPk(req.params.id);
    if (!game) {
      return res.status(404).send("Game not found");
    }
    await game.update(req.body);
    res.json(game);
  } catch (error) {
    res.status(500).send(error);
  }
});


router.delete("/Games/:id", async (req, res) => {
  try {
    const game = await findByPk(req.params.id);
    if (!game) {
      return res.status(404).send("Game not found");
    }
    await game.destroy();
    res.send("Game deleted");
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports=router;
