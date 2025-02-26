"use client";
import React, { useEffect, useState } from "react";
import GlobalApi from "@/app/_utils/GlobalApi";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Image from "next/image";

function Page({ params }) {
    const [blogInfo, setBlogInfo] = useState(null);

    useEffect(() => {
        if (params?.blogId) {
            console.log("Fetching blog for slug:", params.blogId);
            getBlogBySlugName();
        }
    }, [params]);

    const getBlogBySlugName = async () => {
        const blog = await GlobalApi.getBlogBySlug(params.blogId);
        console.log("API Response:", blog);
        setBlogInfo(blog);
    };

    return (
        <div className="pt-20">
            {blogInfo ? (
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-3xl font-bold">{blogInfo.blogTitle}</h1>
                    {blogInfo.imageOne?.url && (
                        <Image
                            src={blogInfo.imageOne.url} 
                            alt={blogInfo.blogTitle} 
                            className="w-full my-4 rounded-lg"
                            width={500}
                            height={500}
                        />
                    )}
                    
                    <Markdown className="prose lg:prose-lg max-w-full"
    remarkPlugins={[remarkGfm]} 
    rehypePlugins={[rehypeRaw]}>{blogInfo.blogContent}</Markdown>
                </div>
            ) : (
                <p className="text-center">Loading blog...</p>
            )}
        </div>
    );
}

export default Page;
