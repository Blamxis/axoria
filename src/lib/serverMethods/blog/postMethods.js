import { connectToDB } from "@/lib/utils/db/connectToDB";
import { Post } from "@/lib/models/post";

export async function getPost(slug) {
    try {
        await connectToDB();
        const post = await Post.findOne({slug})
        return post
    } catch (err) {
        console.error("Error while fetch a post", err)
        throw new Error("Failed to fetch the post. Please try again later.");
    }
}