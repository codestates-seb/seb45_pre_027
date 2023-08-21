import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Login from './pages/Login';
import LogOut from './pages/LogOut';
import QuestionDescription from './pages/QuestionDescription';
import QuestionList from './pages/QuestionList';
import QuestionRegist from './pages/QuestionRegist';
import SignUp from './pages/SignUp';

function App() {
  return (
    <>
      <Header />
      <SideBar />
      <Routes>
        <Route path="/log-in" element={<Login />} />
        <Route path="/log-out" element={<LogOut />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/questions" element={<QuestionList />} />
        <Route path="/question-description" element={<QuestionDescription />} />
        <Route path="/question-regist" element={<QuestionRegist />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
