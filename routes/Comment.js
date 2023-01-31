const { Router } = require("express");
const router = new Router();
const { findAll, findByPk, create } = require("../Models/Comments");
const {Comments}=require("../Models");


router.get("/Comments", async (req, res) => {
try {
const comments = await Comments.findAll();
res.json(comments);
} catch (error) {
res.status(500).json({ error: "Internal server error" });
}
});


router.get("/Comments/:id", async (req, res) => {
try {
const comment = await findByPk(req.params.id);
if (!comment) {
return res.status(404).json({ error: "Comment not found" });
}
res.json(comment);
} catch (error) {
res.status(500).json({ error: "Internal server error" });
}
});


router.post("/Comments", async (req, res) => {
try {
const comment = await create({
content: req.body.content,
post_id: req.body.post_id,
user_id: req.body.user_id,
});
res.status(201).json(comment);
} catch (error) {
res.status(500).json({ error: "Internal server error" });
}
});

router.put("/Comments/:id", async (req, res) => {
    try {
    const comment = await findByPk(req.params.id);
    if (!comment) {
    return res.status(404).json({ error: "Comment not found" });
    }
    comment.content = req.body.content;
    comment.post_id = req.body.post_id;
    comment.user_id = req.body.user_id;
    await comment.save();
    res.json(comment);
    } catch (error) {
    res.status(500).json({ error: "Internal server error" });
    }
    });

router.delete("/Comments/:id", async (req, res) => {
    try {
    const comment = await findByPk(req.params.id);
    if (!comment) {
    return res.status(404).json({ error: "Comment not found" });
    }
    await comment.destroy();
    res.json({ message: "Comment deleted successfully" });
    } catch (error) {
    res.status(500).json({ error: "Internal server error" });
    }
    });
    
    module.exports = router;
    
    
    
    
    