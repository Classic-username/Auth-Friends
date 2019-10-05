import React, {useState} from 'react';

import {axiosWithAuth} from '../utils/axiosWithAuth'

const Login = () => {
    const [ credentials, setCredentials ] = useState({credentials: {
        username: '',
        password: ''
    }})

    const handleChange = e => {
        setCredentials({
            credentials: {
                ...credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    const login = e => {
        e.preventDefault();

        axiosWithAuth()
            .post('/login', credentials)
            .then(res => console.log(res))
            .catch(err => console.log(err))
            
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