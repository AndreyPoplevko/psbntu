import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ContactsPage from './pages/ContactsPage';
import GeneralScorePage from './pages/GeneralScorePage';
import MainPage from './pages/MainPage';
import NewsPage from './pages/NewsPage';
import ProfilePage from './pages/ProfilePage';
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
                <Route path="/profile" element={<ProfilePage/>}/>
                <Route path="/general_score" element={<GeneralScorePage/>}/>
            </Routes>
		</Router>
    );
};

export default App;