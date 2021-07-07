import React, {useState} from 'react';

import {axiosWithAuth} from '../utils/axiosWithAuth'

const Login = (props) => {


    const [ credentials, setCredentials ] = useState({
        username: '',
        password: ''
    })

    console.log(credentials)

    const handleChange = e => {
        console.log('inside handleChange login.js', e.target.value)
        setCredentials({
                ...credentials,
                [e.target.name]: e.target.value
        })
    }

    const login = e => {
        e.preventDefault();
        console.log('inside callback Login.js', credentials)
        axiosWithAuth()
            .post('/login', credentials)
            .then(res => localStorage.setItem('token', res.data.payload))
            .then(() => props.history.push('/friend_list'))
            .catch(err => console.log(err, 'CB err, Login.js'))
            
    }

    return (
        <div>
            <form onSubmit={login}>
                <input
                    type='text'
                    name='username'
                    value={credentials.username}
                    onChange={handleChange}
                />
                <input 
                    type='password'
                    name='password'
                    value={credentials.password}
                    onChange={handleChange}
                />
                <button>Log in</button>
            </form>
        </div>
    )
}

export default Login;