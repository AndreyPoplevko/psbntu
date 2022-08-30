import AboutPage from "./pages/AboutPage";
import AuthPage from "./pages/AuthPage";
import ContactsPage from './pages/ContactsPage';
import FAQPage from "./pages/FAQPage";
import GeneralScorePage from './pages/GeneralScorePage';
import MainPage from './pages/MainPage';
import MaterialHelpPage from "./pages/MaterialHelpPage";
import NewsPage from './pages/NewsPage';
import ProfilakPage from "./pages/ProfilakPage";
import ProfilePage from './pages/ProfilePage';
import SendMessagePage from './pages/SendMessagePage';
import SocialProtectionPage from "./pages/SocialProtectionPage";
import WorkInComissionsPage from "./pages/WorkInComissionsPage";
import { AboutRoute, AuthRoute, ContactsRoute, FAQRoute, GeneralScoreRoute, MainRoute, MaterialHelpRoute, NewsRoute, ProfilakRoute, ProfileRoute, RegistrationRoute, SendMessageRoute, SocialProtectionRoute, WorkInComissionsRoute } from "./utils/consts";

export const authRoutes = [
    {
        path: GeneralScoreRoute,
        Component: <GeneralScorePage/>
    },
    {
        path: ProfileRoute,
        Component: <ProfilePage/>
    },
    {
        path: AuthRoute,
        Component: <AuthPage/>
    },
    {
        path: RegistrationRoute,
        Component: <AuthPage/>
    },
    {
        path: AboutRoute,
        Component: <AboutPage/>
    },
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
    },
    {
        path: ProfilakRoute,
        Component: <ProfilakPage/>
    },
    {
        path: SocialProtectionRoute,
        Component: <SocialProtectionPage/>
    },
    {
        path: WorkInComissionsRoute,
        Component: <WorkInComissionsPage/>
    },
    {
        path: MaterialHelpRoute,
        Component: <MaterialHelpPage/>
    },
    {
        path: FAQRoute,
        Component: <FAQPage/>
    }
];

export const publicRoutes = [
    {
        path: AuthRoute,
        Component: <AuthPage/>
    },
    {
        path: RegistrationRoute,
        Component: <AuthPage/>
    },
    {
        path: AboutRoute,
        Component: <AboutPage/>
    },
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
    },
    {
        path: ProfilakRoute,
        Component: <ProfilakPage/>
    },
    {
        path: SocialProtectionRoute,
        Component: <SocialProtectionPage/>
    },
    {
        path: WorkInComissionsRoute,
        Component: <WorkInComissionsPage/>
    },
    {
        path: MaterialHelpRoute,
        Component: <MaterialHelpPage/>
    },
    {
        path: FAQRoute,
        Component: <FAQPage/>
    }
];