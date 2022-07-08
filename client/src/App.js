import React, { useContext, useEffect, useState } from 'react';
import {observer} from 'mobx-react-lite';
import { BrowserRouter as Router } from 'react-router-dom';
import { Context } from './index.js';
import { updateUser } from './http/userAPI.js';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import Loader from './components/Loader.js';

const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        updateUser().then(data => {
            user.setUser(true)
            user.setIsAuth(true)
        }).finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <Loader/>
    }
    return (
        <Router>
            <NavBar/>
			<AppRouter/>
		</Router>
    );
});

export default App;