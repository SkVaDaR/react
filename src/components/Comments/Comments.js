import Comment from "../Comment/Comment";

import React, {useEffect, useState} from 'react';

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => setComments(value))
    },[])
    return (
        <div>
            {comments.map(value => <Comment id={value.id} name={value.name} email={value.email} body={value.body}/>)}
        </div>
    );
};

export default Comments;
