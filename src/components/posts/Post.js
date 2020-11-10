import React from 'react'
import './Post.css'
import { Avatar } from '@material-ui/core';

function Post({ username, caption, imgsrc }) {
    return (
        <div className="post">

            <div className="post__header">
                <Avatar
                    className="post__img"
                    alt={username}
                    src="https://images.unsplash.com/profile-1494547972332-68fd6ba5e3f1?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
                />
                <h3>username</h3>
            </div>


            <img className="post__img"
                src={imgsrc}
                alt={caption} />

            <h4 className="post__text">
                <strong>{username}</strong>
                {caption}
            </h4>

        </div>
    )
}

export default Post
