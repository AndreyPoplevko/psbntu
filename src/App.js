import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ContactsPage from './pages/ContactsPage';
import DocumentsPage from './pages/DocumentsPage';
import ForMemberPage from './pages/ForMemberPage';
import GaleryPage from './pages/GaleryPage';
import MainPage from './pages/MainPage';
import NewsPage from './pages/NewsPage';

const App = () => {
    return (
        <Router>
			<Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/news" element={<NewsPage/>}/>
                <Route path="/for_member" element={<ForMemberPage/>}/>
                <Route path="/documents" element={<DocumentsPage/>}/>
                <Route path="/galery" element={<GaleryPage/>}/>
                <Route path="/contacts" element={<ContactsPage/>}/>
            </Routes>
		</Router>
    );
};

export default App;