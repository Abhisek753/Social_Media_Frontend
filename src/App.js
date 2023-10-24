import { BrowserRouter,Navigate,Routes,Route } from "react-router-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";
import { useMemo } from "react";
import { UseSelector, useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "theme";

function App() {
   const mode=useSelector((state)=>state.mode);
   const theme =useMemo(()=>createTheme(themeSettings(mode)),[mode]);

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
        <CssBaseline/>
          <Routes>
            <Route path="/" elemet={<LoginPage />} />
            <Route path="/home" elemet={<HomePage />} />
            <Route path="/profile/:userId" elemet={<ProfilePage />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
