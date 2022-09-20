import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoginPage from './pages/login/LoginPage';
import NewUser from './pages/student/NewUser'; 
import Student from './pages/usersPage/Student'; 
import Assistant from './pages/usersPage/Assistant';
import Lecturer from './pages/usersPage/Lecturer';
import ListUsers from './pages/student/ListUsers';
import AddExam from './pages/exam/AddExam';
import ListLectures from './pages/lecture/ListLectures';
import ListExams from './pages/exam/ListExams';
import ListHomework from './pages/homework/ListHomework';
import NewLecture from './pages/lecture/NewLecture';
import Context from './context/Context';
import Results from './pages/Results';
import AddHomework from './pages/homework/AddHomework';
import ListLecturers from './pages/lecturer/ListLecturers';
import LecturerPage from './pages/lecturer/LecturerPage';
import AddLecturer from './pages/lecturer/AddLecturer';
import HomeworkPage from './pages/homework/HomeworkPage'
import LecturePage from './pages/lecture/LecturePage';
import AssistantPage from './pages/assistant/AssistantPage';
import ListAssistant from './pages/assistant/ListAssistant';
import ListAllUsers from './pages/ListAllUsers';
import { AddAssistant } from './pages/assistant/AddAssistant';
import ExamPage from './pages/exam/ExamPage';
import Admin from './pages/usersPage/Admin';
import HomeworkPageForStudents from './pages/homework/HomeworkPageForStudents';
import RegisterLecture from './pages/lecturer/RegisterLecture';
import Mainview from './pages/Mainview';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import UserView from './pages/student/UserView';

function App() {
  const[name,setName] = useState('');
  const[password,setPassword] = useState('');
  const contextData ={
  name,
  setName,
  password,
  setPassword
}
  return (
    
    <Context.Provider value={contextData}>
    <div className="App">
    <ToastContainer />
    <BrowserRouter>
      <Routes>
        <Route element={<LoginPage/>} path={"/"} />


        <Route element={<Student/>} path={"/Student"} />
        <Route element={<NewUser />} path="/NewUser"/>
        <Route element={<ListUsers />} path="/ListUsers" />
        <Route element={<UserView />} path="/UserView" />

        <Route element={<Assistant/>} path={"/Assistant"} />
        <Route element={<AddAssistant/>} path={"/ListAssistant"} />
        <Route element={<ListAssistant/>} path={"/AddAssistant"} />
        <Route element={<AssistantPage/>} path={"/AssistantPage"} />

        <Route element={<Admin/>} path={"/Admin"} />

        <Route element={<LecturerPage />} path="/LecturerPage" />
        <Route element={<Lecturer/>} path={"/Lecturer"} />
        <Route element={<AddLecturer />} path="/AddLecturer" />
        <Route element={<ListLecturers />} path="/ListLecturers" />
        <Route element={<RegisterLecture />} path="/RegisterLecture" />

        <Route element={<AddExam />} path="/AddExam" />
        <Route element={<ListExams />} path="/ListExams" />
        <Route element={<ExamPage />} path="/ExamPage" />

        <Route element={<AddHomework />} path="/AddHomework" />
        <Route element={<ListHomework />} path="/ListHomework" />
        <Route element={<HomeworkPage />} path="/HomeworkPage" />
        <Route element={<HomeworkPageForStudents />} path="/HomeworkPageForStudents" />

        <Route element={<NewLecture />} path="/NewLecture" />
        <Route element={<LecturePage />} path="/LecturePage" />
        <Route element={<ListLectures />} path="/ListLectures" />

       <Route element={<ListAllUsers />} path="/ListAllUsers" />
        <Route element={<Results />} path="/Results" />
        <Route element={<Mainview />} path="/MainView" />
      </Routes>
    </BrowserRouter>
    </div>
    </Context.Provider>
  );
}

export default App;
