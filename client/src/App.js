import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ContactsPage from './pages/ContactsPage';
import MainPage from './pages/MainPage';
import NewsPage from './pages/NewsPage';
import SendMessagePage from './pages/SendMessagePage';

const App = () => {
    return (
        <Router>
			<Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/news" element={<NewsPage/>}/>
                <Route path="/contacts" element={<ContactsPage/>}/>
                <Route path="/vacancies/send_message" element={<SendMessagePage/>}/>
            </Routes>
		</Router>
    );
};

export default App;