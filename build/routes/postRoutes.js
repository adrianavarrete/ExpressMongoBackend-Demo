"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Post_1 = __importDefault(require("../models/Post"));
class PostRoutes {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    getPosts(req, res) {
        Post_1.default.find({}).then((data) => {
            //let status = 200;
            //if(data == null) status = 404;
            res.status(200).json(data);
        }).catch((err) => {
            res.status(500).json(err);
        });
    }
    getPost(req, res) {
        const url = req.params.url;
        Post_1.default.findOne({ "url": url })
            .then((data) => {
            res.status(200).json(data);
        })
            .catch((err) => {
            res.status(500).json(err);
        });
    }
    createPost(req, res) {
        const { title, url, content, image } = req.body;
        const newPost = new Post_1.default({ title, url, content, image });
        console.log(newPost);
        newPost.save().then((data) => {
            res.status(201).json(data);
        }).catch((err) => {
            res.status(500).json(err);
        });
    }
    updatePost() {
    }
    deletePost() {
    }
    routes() {
        this.router.get('/posts', this.getPosts);
        this.router.get('/posts/:url', this.getPost);
        this.router.post('/posts', this.createPost);
        this.router.put('/posts/:url', this.updatePost);
        this.router.delete('/posts/:url', this.deletePost);
    }
}
const postRoutes = new PostRoutes();
postRoutes.routes();
exports.default = postRoutes.router;
