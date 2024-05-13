import { Post, } from '../models/Posts.model'

interface Ipost{
    title:string;
    description:string;
    author:string;
    published:boolean;
}
export class postService{
    async createPost(data: Ipost) {
        try {
            const newPost = await Post.create(data)
            return newPost

        } catch (error) {
            console.log(error)
        }
    }
    
  //get all posts
  async getPosts() {
    try {
        const posts = await Post.find({})
        return posts

    } catch (error) {
        console.log(error)
    }
}
//get a single post
async getPost(id: string) {
      
    try {
        const post = await Post.findById({_id:id})
        if (!post) {
            return 'post not available'
        }
        return post

    } catch (error) {
        console.log(error)
    }
}
}

export const postServices = new postService()