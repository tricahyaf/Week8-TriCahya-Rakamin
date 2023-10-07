const express = require("express");
const film = express.Router();
const {
    getAllFilm,
    getFilmById,
    getAllCategories,
    getFilmByCategory,
} = require("../queries.js");

film.get("/film", (req, res) => {
    getAllFilm((err, film) => {
        if (err) {
            return res
                .status(500)
                .json({ success: false, message: "Error Query: " + err.message });
        }
        res
        .status(200)
        .json({
            success: true,
            message: "Data film berhasil",
            data: film,
        });
    });
});

film.get("/film/:id", (req, res) => {
    const filmId = req.params.id;

    getFilmById(filmId, (err, film) => {
        if (err) {
            return res
                .status(500)
                .json({ success: false, message: "Error Query: " + err.message });
        }
        if (!film) {
        return res
            .status(404)
            .json({ success: false, message: "Film tidak ditemukan" });
        }
        res
        .status(200)
        .json({
            success: true,
            message: "Data film berhasil",
            data: film,
        });
    });
});

film.get("/categories", (req, res) => {
    getAllCategories((err, categories) => {
        if (err) {
            return res
                .status(500)
                .json({ success: false, message: "Error Query: " + err.message });
        }
        res
        .status(200)
        .json({
            success: true,
            message: "Data kategori berhasil",
            data: categories,
        });
    });
});

film.get("/film/category/:categoryId", (req, res) => {
    const categoryId = req.params.categoryId;

    getFilmByCategory(categoryId, (err, film) => {
        if (err) {
            return res
                .status(500)
                .json({ success: false, message: "Error Query: " + err.message });
        }
        res
        .status(200)
        .json({
            success: true,
            message: "Data film berdasarkan kategori berhasil",
            data: film,
        });
    });
});

module.exports = film;