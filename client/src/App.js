import React, { useContext, useEffect, useState } from 'react';
import {observer} from 'mobx-react-lite';
import { BrowserRouter as Router } from 'react-router-dom';
import { Context } from './index.js';
import { check } from './http/userAPI.js';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';

const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        check().then(data => {
            user.setUser(true)
            user.setIsAuth(true)
        }).finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }
    return (
        <Router>
            <NavBar/>
			<AppRouter/>
		</Router>
    );
});

export default App;