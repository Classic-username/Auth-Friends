import React, {useState, useEffect} from 'react';
import Loader from 'react-loader-spinner';

import { axiosWithAuth } from '../utils/axiosWithAuth';
import { getSnapshotData } from 'jest-snapshot/build/utils';
import FriendForm from './FriendForm';

const Friends = () => {
    const [friends, setFriends] = useState([])

        
    

    useEffect(() => {
        axiosWithAuth()
            .get('/friends')
            .then(res => setFriends(res.data))
            .catch(err => console.log(err))
    }, [])

    return(
        <>
        {friends.map(FUCKNAMESEMANTICBULLSHIT => {
            return(
                <div key={FUCKNAMESEMANTICBULLSHIT.id}>
                    <h2>{FUCKNAMESEMANTICBULLSHIT.name}</h2>
                    <p>{FUCKNAMESEMANTICBULLSHIT.age}</p>
                    <p>{FUCKNAMESEMANTICBULLSHIT.email}</p>
                </div>
            )
            
        })}
        <FriendForm setFriends={setFriends}/>
        </>
    )
}

export default Friends