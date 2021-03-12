import React, { useState, useRef } from "react";
import './WritePage.css';
function WritePage() {

    const titleRef = useRef(null);
    const contentRef = useRef(null);
    const tagNameRef = useRef(null);

    function gotoDB(e) {
        e.preventDefault();
        console.log(titleRef.current.value);
        console.log(contentRef.current.value);
        console.log(tagNameRef.current.value);
        if (titleRef.current.value != "" && contentRef.current.value != "") {
            fetch(`http://localhost:5000/forum/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: 0,
                    title: titleRef.current.value,
                    content: contentRef.current.value,
                    isLiked: false,
                    tag: {
                        name: tagNameRef.current.value,
                        color: "#ff1357"
                    }
                }),
            }).then(res => {
                if (res.ok) {
                    alert("생성이 완료 되었습니다!")
                    window.location.href = "/forum"
                }
            });
        } else {
            alert("제목과 내용을 입력하세요.");
        }
    }


    return (
        <>
            <div className="WritePage">
                <form onSubmit={gotoDB}>
                    <div className="Box">

                        <div className="WriteTitle">
                            <label>제목</label>
                            <input ref={titleRef} hint="Title.." type="text" name="title" id="title" required />
                            <label>Tag</label>
                            <select ref={tagNameRef} id="tag" name="tag" required >
                                <option name="general" value="general">general</option>
                                <option name="tip" value="tip">tip</option>
                                <option name="bug" value="bug">bug</option>
                                <option name="learn" value="learn">learn</option>

                            </select>
                        </div>
                        <div className="WriteContent">
                            <div><label>내용</label>
                            </div>
                            <textarea hint="Content.." required name="content" id="content" cols="50" rows="10" ref={contentRef}></textarea>

                        </div>
                    </div>
                    <div className="submitBT">
                        <button onClick={gotoDB}>📤</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default WritePage;