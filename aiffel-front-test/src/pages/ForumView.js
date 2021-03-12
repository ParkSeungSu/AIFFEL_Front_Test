import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ForumView.css';
function ForumView(prop) {
    const forumdatas = prop.data;
    const { id } = useParams();
    console.log(id);

    const dummy = Array.from(forumdatas);
    console.log(dummy);

    const data = dummy.map(dum => {
        if (dum.id == id) {
            console.log(dum);
            return dum;
        }
    })
    console.log(data);
    const [isLiked, setIsLiked] = useState(data.isLiked);

    function toggleIsLiked() {

        fetch(`http://localhost:5000/forum/${data[0].id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...data,
                isLiked: !isLiked
            }),
        }).then(res => {
            if (res.ok) {
                setIsLiked(!isLiked);
            }
        });
    }
    function del() {
        if (window.confirm('삭제하시겠어요?')) {
            fetch(`http://localhost:5000/forum/${data[0].id}`, {
                method: 'DELETE',
            }).then(res => {
                if (res.ok) {
                    window.location.href = "/forum"
                }
            });
        }
    }

    return (
        <>
            <div className="ForumViewTitle"><p>{data[0].title}</p></div>
            <div className="ContentArea">
                <div className="TextArea">
                    {data[0].content}
                </div>
                <div className="LikeButton">
                    <div className={isLiked ? "Like" : "Unlike"}>
                        <input onClick={toggleIsLiked} type="checkbox" checked={isLiked} />👍
                    </div>
                </div>
            </div>
            <div className="ForumTag" style={{ color: data[0].tag.color }}>{data[0].tag.name}</div>
            <div className="EraseBT">
                <button onClick={del}>🗑</button>
            </div>

        </>
    );
}

export default ForumView;