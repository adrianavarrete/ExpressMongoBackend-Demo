"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class PostRoutes {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    getPosts(req, res) {
        res.send('Posts');
    }
    getPost() {
    }
    createPost() {
    }
    updatePost() {
    }
    deletePost() {
    }
    routes() {
        this.router.get('/routes', (req, res) => res.send('fwfwef'));
    }
}
const postRoutes = new PostRoutes();
exports.default = postRoutes.routes;
