"use client";
import React, { useEffect, useState } from "react";
import GlobalApi from "@/app/_utils/GlobalApi";

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
                        <img 
                            src={blogInfo.imageOne.url} 
                            alt={blogInfo.blogTitle} 
                            className="w-full my-4 rounded-lg"
                        />
                    )}
                    <p className="text-lg">{blogInfo.blogContent}</p>
                </div>
            ) : (
                <p className="text-center">Loading blog...</p>
            )}
        </div>
    );
}

export default Page;
