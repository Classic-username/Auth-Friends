import React, {useState, useEffect} from 'react';
import Loader from 'react-loader-spinner';

import { axiosWithAuth } from '../utils/axiosWithAuth';
import { getSnapshotData } from 'jest-snapshot/build/utils';

const Friends = () => {
    const [friends, setFriends] = useState({friendArr: []})

    const getData = () => {
        axiosWithAuth()
            .get('/data')
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getData()
    }, [])

    return(
        <div></div>
    )
}

export default Friends