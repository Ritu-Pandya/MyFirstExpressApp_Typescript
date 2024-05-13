import express from 'express'
import { PostController } from '../controller/posts.controller'

export const router = express.Router()

//add post route
router.post('/',PostController.addpost)

//get all post
router.get('/',PostController.getPosts)

//get single post
router.get('/:id',PostController.getAPost)