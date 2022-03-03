
import React from "react";
import Post from "./Post";
import { useState, useEffect } from "react";
import axios from "axios";

export default function PostsListing() {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get('http://localhost: 3035/comments', { withCredentials: true })
            .then(response => setComments(response.data));

    }, []);


    return (
        <div>
            {comments.map(comment => (
                <Post {...comment} isListing={true} />
            ))}
        </div>
    );
}

