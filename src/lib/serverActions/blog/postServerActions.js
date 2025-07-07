"use server"

import { connectToDB } from "@/lib/utils/db/connectToDB";
import { Post } from "@/lib/models/post";

export async function addPost(formData) {
    const { title, markdownArticle } = Object.fromEntries(formData);

    try {
        await connectToDB()

        const newPost = new Post({
            title,
            markdownArticle
        })

        const savedPost = await newPost.save();
        console.log("Post saved successfully:", savedPost);

        return {success: true, slug: savedPost.slug}
    } catch (err) {
        console.log("Error saving post:", err);
        throw new Error(err.message || "An error occured while creating the post");
    }
}