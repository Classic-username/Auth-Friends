import React, {useState} from 'react';

// import {axiosWithAuth}

const Login = () => {
    const [ credentials, setCredentials ] = useState({credentials: {
        username: '',
        password: ''
    }})

    handleChange = e => {
        setCredentials({
            credentials: {
                ...credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    login = e => {
        e.preventDefault();

        // axiosWithAuth()
            
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