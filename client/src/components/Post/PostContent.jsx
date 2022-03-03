import React from 'react';
import TimeAgo from 'timeago-react';
/*import ReactMarkdown from "react-markdown";*/
/*import gfm from "remark-gfm";*/

export default function PostContent(props) {
    return (
        <div>
            <h5 > Posted by u/{props.author} <TimeAgo datetime={props.postedAt} /></h5>
            <h2 >{props.title}</h2>

        </div>
    );
}

