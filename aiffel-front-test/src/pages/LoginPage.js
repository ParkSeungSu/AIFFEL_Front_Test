import React, { useState, useEffect, useRef } from 'react';
import './LoginPage.css';
function LoginPage() {

    const emailRef = useRef(null);
    const passwdRef = useRef(null);
    const [loggin, setLoggin] = useState({});
    useEffect(() => {
        fetch('http://localhost:5000/login')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setLoggin(data[0]);
            });
    }, []);

    console.log(loggin.email, loggin.password);
    function login(e) {
        e.preventDefault();
        console.log(emailRef.current.value);
        console.log(passwdRef.current.value);
        if (emailRef.current.value != "" && passwdRef.current.value != "") {
            alert("환영합니다!");
            window.location.href = "/forum";
        } else {
            alert("Email 과 Password를 확인해 주세요.");
        }

    }

    return (

        <div className="LoginPage">
            <form onSubmit={login}>
                <div className="Card">
                    <div className="Email">
                        <label>Email </label>
                        <input ref={emailRef} type="email" required />
                    </div>
                    <div className="Password">
                        <label>Password </label>
                        <input ref={passwdRef} type="password" />
                    </div>
                    <button>Login</button>
                </div>
            </form>

        </div>

    );
}


export default LoginPage;