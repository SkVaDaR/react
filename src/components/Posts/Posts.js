import Post from '../Post/Post';
import {useEffect, useState} from "react";

const Posts = () => {
    const [posts, setPost] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => setPost(value))
    }, [])
    return (
        <div>
            {posts.map(value => <Post id={value.id} title={value.title} body={value.body}/>)}
        </div>
    );
};

export default Posts;
