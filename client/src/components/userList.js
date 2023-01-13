import React from 'react';
import { Button } from "@chakra-ui/button";

import './style/UserList.css'



const UserList = ({ users }) => {
    if (!users.length) {
        return <h3>No Profiles Yet</h3>;
    }

    const addToList = () => {
        const list = []
        
    }

    return (
        <div>
            <div className='container'>
                {users && users.map((user) => (
                    <div key={user._id} className='listStyle'>
                        <Button 
                        className='buttonStyle'
                        onClick={addToList}>
                            {user.name}
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UserList;