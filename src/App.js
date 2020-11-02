/* eslint-disable no-unused-vars */

import './App.css';
import Post from './components/posts/Post.js';
import Header from './components/header/Header.js';
import React, { useEffect, useState } from "react";

function App() {

    const [posts, setPosts] = useState([
        {
            username: "ruben",
            caption: "wowowow",
            imgsrc: "https://images.unsplash.com/photo-1530389361604-f5fb2936a855?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
        },
        {
            username: "mariana",
            caption: "it works",
            imgsrc: "https://images.unsplash.com/photo-1575111589590-2f0ee8eec5d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        },
    ]);

    return (
        <div className="app">

            <Header />

            {
                posts.map(post => (
                    <Post
                        username={post.username}
                        caption={post.caption}
                        imgsrc={post.imgsrc}
                    />
                ))
            }1

        </div>
    );
}

export default App;
