import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext"


const App = () => {

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App
