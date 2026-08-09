import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Auth from "./pages/auth";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserData } from "./redux/userSlice";
import InterviewPage from './pages/InterviewPage'
import InterviewHistory from './pages/InterviewHistory'
//import Interview from "../../Server/models/interview.model";
import InterviewReport from "./pages/InterviewReport";
import Pricing from "./pages/Pricing";


export const ServerUrl = "http://localhost:8000";

function App() {
  console.log("App rendered");
  const dispatch = useDispatch()
  useEffect(() => {
    console.log("useEffect running");
    const getUser = async () => {
      try {
        console.log("Making Api call")
        const result = await axios.get(ServerUrl + "/api/user/current-user", { withCredentials: true })
        console.log("API Response:", result.data);
        dispatch(setUserData(result.data))
      } catch (error) {
        console.log(error)
        dispatch(setUserData(null))

      }
    }
    getUser()
  }, [])
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/interview' element={<InterviewPage />} />
      <Route path='/history' element={<InterviewHistory />} />
      <Route path='/pricing' element={<Pricing />} />
      <Route path='/report/:id' element={<InterviewReport />} />
    </Routes>
  )
}

export default App