import React, { useEffect, useState } from 'react';
import profileImg from '../profile.png';
function Profile() {

    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/login')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setProfiles(data[0]);
            });
    }, []);


    return (
        <div>
            <div className="ProfileBanner">Profile</div>
            <ul className='ProfileList'>
                <li className="proImage">
                    <img src={profileImg} alt="" />
                </li>
                <ul className="ProTextArea">
                    <li>Name: {profiles.username}</li>
                    <li>Email: {profiles.email}</li>
                </ul>
            </ul>
        </div>
    );
}

export default Profile;