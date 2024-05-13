import { postServices } from '../service/post.service'
import { Request,Response } from 'express'
import { PostschemaValidate } from '../models/Posts.model'

 class postController{
    addpost = async (req: Request, res: Response) => {
        //data to be saved in database
        const data = {
            title: req.body.title,
            author: req.body.author,
            description: req.body.description,
            published: req.body.published
        }
        //validating the request
        const {error, value} = PostschemaValidate.validate(data)

        if(error){
            res.send(error.message)

        }else{
            //call the create post function in the service and pass the data from the request
            const post = await postServices.createPost(value)
            res.status(201).send(post)          
        }
        
    }

    //get all posts
    getPosts = async (req: Request, res: Response) => {
        const posts = await postServices.getPosts()
        res.send(posts)
    }

    //get a single post
    getAPost = async (req: Request, res: Response) => {
        //get id from the parameter
        const id = req.params.id
        const post = await postServices.getPost(id)
        res.send(post)
    }


}

export const PostController = new postController()