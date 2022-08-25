import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home";
import Movies from "./pages/movies";
import { Todos } from "./pages/todos";
import Header from "./components/header";
import React, { useState } from 'react';

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);

function App() {
  const [theme, setTheme] = useState("dark");

  return (
      <BrowserRouter>
        <ThemeContext.Provider value={{setTheme, theme}}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="movies" element={<Movies />}>
              {/* <Route path=":movieId" element={<MovieDetails />} />
              <Route path="new" element={<NewTeamForm />} /> */}
            </Route>
            <Route path="todos" element={<Todos />}>
              {/* <Route path=":todoId" element={<TodoDetails />} />
              <Route path="new" element={<NewTodo />} /> */}
            </Route>
          </Routes>
        </ThemeContext.Provider>
      </BrowserRouter>
  );
}

export default App;
