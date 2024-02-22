import React, {useContext} from 'react'
import UserContext from '../context/UserContext';

function Profile() {
    const {user} = useContext(UserContext);
     
    if (!user) return <div>Please Logged In</div>

    return <div>
        <h2>Welcome to Your {user.username}</h2>
        <p>Your password is {user.password}</p>
    </div>
}

export default Profile
