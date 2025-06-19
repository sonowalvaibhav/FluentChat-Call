import { Navigate, Route, Routes } from "react-router";
import HomePage from "./Pages/homePage.jsx";
import SignupPage from "./Pages/signupPage.jsx";
import LoginPage from "./Pages/loginPage.jsx";
import NotificationsPage from "./Pages/notificationsPage.jsx";
import CallPage from "./Pages/callPage.jsx";
import ChatPage from "./Pages/chatPage.jsx";
import OnboardingPage from "./Pages/onboardingPage.jsx";
import { Toaster } from "react-hot-toast";
import PageLoader from "./componenets/PageLoader.jsx";
import useAuthUser from "./hook/useAuthUser.js";
import Layout from "./componenets/Layout.jsx";
import { useThemeStore } from "./store/useThemeStore.js";
const App = () => {
  const {isLoading,authUser}= useAuthUser();
  const {theme}= useThemeStore();
  const isAuthenticated= Boolean(authUser);
  const isOnboarded = authUser?.isOnboarded;

  if(isLoading){
    return <PageLoader/>;
  }
  return (
    <div className=" h-screen" data-theme={theme}>
    <Routes>
      <Route path="/" element={isAuthenticated && isOnboarded ? (<Layout  showSidebar={true}><HomePage/></Layout>) : (<Navigate to={!isAuthenticated?"/login":"/onboarding"}/>)}/>
      <Route path="/signup" element={!isAuthenticated ? <SignupPage/> :<Navigate to={ isOnboarded?"/":"/onboarding"}/>}/>
      <Route path="/login" element={!isAuthenticated ?<LoginPage/> : <Navigate to={ isOnboarded?"/":"/onboarding"}/>}/>
      <Route path="/notifications" element={isAuthenticated && isOnboarded ?(<Layout showSidebar={true}> <NotificationsPage/></Layout>) : (<Navigate to={!isAuthenticated?"/login":"/onboarding"}/>)}/>
      <Route path="/call/:id" element={isAuthenticated && isOnboarded ? (<CallPage/>) : (<Navigate to={!isAuthenticated?"/login":"/onboarding"}/>)}/>
      <Route path="/chat/:id" element={isAuthenticated && isOnboarded ?(<Layout showSidebar={false}><ChatPage/></Layout>) : (<Navigate to={!isAuthenticated?"/login":"/onboarding"}/>)}/>
      <Route path="/onboarding" element={isAuthenticated ? (!isOnboarded?(<OnboardingPage/>):(<Navigate to= "/"/>)) : (<Navigate to= "/login"/>)}/>
    </Routes>
    
    <Toaster/>
    </div>
  );
};

export default App;
