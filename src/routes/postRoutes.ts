import { Request, Response, Router } from 'express';
import Post from '../models/Post';
class PostRoutes {

    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    getPosts(req: Request, res: Response): void{
        Post.find({}).then((data) => {
            //let status = 200;
            //if(data == null) status = 404;
            res.status(200).json(data);

        }).catch((err) => {
            res.status(500).json(err);
        });
    }

    getPost(req: Request, res: Response): void{
        const url:string = req.params.url;

        Post.findOne({ "url": url })
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(500).json(err);
            })
    }
    

    createPost(req: Request, res: Response): void{
        const {title, url, content, image} = req.body;
        const newPost = new Post({title, url, content, image});
        console.log(newPost);

        newPost.save().then((data) => {
            res.status(201).json(data);

        }).catch((err) => {
            res.status(500).json(err);
        });        
    }

    updatePost(){

    }

    deletePost(){

    }

    routes(){
        this.router.get('/posts', this.getPosts);
        this.router.get('/posts/:url', this.getPost);
        this.router.post('/posts', this.createPost);
        this.router.put('/posts/:url', this.updatePost);
        this.router.delete('/posts/:url', this.deletePost);
    }
}

const postRoutes = new PostRoutes();
postRoutes.routes();

export default postRoutes.router;

