const express = require("express");
const actor = express.Router();
const {
    getAllActor,
    getActorById,
    getActorByFirstName,
} = require("../queries.js");

actor.get("/actor", (req, res) => {
    getAllActor((err, actor) => {
        if (err) {
            return res
                .status(500)
                .json({ success: false, message: "Error Query: " + err.message });
        }
        res
        .status(200)
        .json({
            success: true,
            message: "Data aktor berhasil",
            data: actor,
        });
    });
});

actor.get("/actor/:id", (req, res) => {
    const actorId = req.params.id;

    getActorById(actorId, (err, actor) => {
        if (err) {
            return res
                .status(500)
                .json({ success: false, message: "Error Query: " + err.message });
        }
        if (!actor) {
        return res
            .status(404)
            .json({ success: false, message: "Aktor tidak ditemukan" });
        }
        res
        .status(200)
        .json({
            success: true,
            message: "Data aktor berhasil",
            data: actor,
        });
    });
});

actor.get("/actor/firstName/:firstName", (req, res) => {
    const firstName = req.params.firstName;

    getActorByFirstName(firstName, (err, actor) => {
        if (err) {
            return res
                .status(500)
                .json({ success: false, message: "Error Query: " + err.message });
        }
        if (!actor) {
        return res
            .status(404)
            .json({ success: false, message: "Aktor tidak ditemukan" });
        }
        res
        .status(200)
        .json({
            success: true,
            message: "Data aktor berhasil",
            data: actor,
        });
    });
});

module.exports = actor;