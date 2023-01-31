const { Router } = require('express');
const router = Router();
const { findAll, findByPk, create } = require('../Models/Posts');
const {Posts}=require("../Models");

router.get('/Posts', (req, res) => {
  Posts.findAll()
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.get('/Posts/:id', (req, res) => {
  findByPk(req.params.id)
    .then((post) => {
      if (!post) {
        return res.status(404).send('Article introuvable');
      }
      res.json(post);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.post('/Posts/', (req, res) => {
  create(req.body)
    .then((post) => {
      res.json(post);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.put('/Posts/:id', (req, res) => {
  findByPk(req.params.id)
    .then((post) => {
      if (!post) {
        return res.status(404).send('Article introuvable');
      }
      return post.update(req.body);
    })
    .then((post) => {
      res.json(post);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.delete('/Posts/:id', (req, res) => {
  findByPk(req.params.id)
    .then((post) => {
      if (!post) {
        return res.status(404).send('Article introuvable');
      }
      return post.destroy();
    })
    .then(() => {
      res.send('Article supprimé');
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports=router;