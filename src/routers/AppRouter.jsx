import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { LoginScreen } from "../components/LoginScreen";
import { MainScreen } from "../components/MainScreen";
import { RegisterScreen } from "../components/RegisterScreen";

export const AppRouter = () => {

    
  return (

    <BrowserRouter>
        <Routes>
            <Route path="/login" element={ < LoginScreen /> } />
            <Route path="/register" element={ < RegisterScreen /> } />
            <Route path="/main" element={ < MainScreen /> } />
        </Routes>
    </BrowserRouter>

  )
}
