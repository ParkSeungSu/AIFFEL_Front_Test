import React, { useState, useEffect } from 'react';

function LoginPage() {


    return (

        <div className="LoginPage">
            <div className="Card">
                <div className="Email">
                    <label>Email </label>
                    <input type="email" required />
                </div>
                <div className="Password">
                    <label>Password </label>
                    <input type="password" />
                </div>
            </div>

        </div>

    );
}


export default LoginPage;