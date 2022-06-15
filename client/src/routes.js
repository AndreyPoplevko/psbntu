import AboutPage from "./pages/AboutPage";
import ContactsPage from './pages/ContactsPage';
import GeneralScorePage from './pages/GeneralScorePage';
import MainPage from './pages/MainPage';
import NewsPage from './pages/NewsPage';
import ProfilePage from './pages/ProfilePage';
import SendMessagePage from './pages/SendMessagePage';
import { AboutRoute, ContactsRoute, GeneralScoreRoute, MainRoute, NewsRoute, ProfileRoute, SendMessageRoute } from "./utils/consts";

export const authRoutes = [
    {
        path: AboutRoute,
        Component: <AboutPage/>
    },
    {
        path: GeneralScoreRoute,
        Component: <GeneralScorePage/>
    },
    {
        path: ProfileRoute,
        Component: <ProfilePage/>
    }
];

export const publicRoutes = [
    {
        path: ContactsRoute,
        Component: <ContactsPage/>
    },
    {
        path: MainRoute,
        Component: <MainPage/>
    },
    {
        path: NewsRoute,
        Component: <NewsPage/>
    },
    {
        path: SendMessageRoute,
        Component: <SendMessagePage/>
    }
];