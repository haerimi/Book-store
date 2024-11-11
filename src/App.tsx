import { ThemeProvider } from "styled-components";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import { GlobalStyle } from "./style/global";
import { getTheme, light, ThemeName } from "./style/theme";
import ThemeSwicher from "./components/header/ThemeSwicher";
import { useContext, useState } from "react";
import { BookStoreThemeProvider, ThemeContext } from "./context/themeContext";

function App() {
  return (
    //<Layout children={<Home />} /> : Props방법
    // theme 파일에서 만든 light와 dark 중 선택하여 지정 가능 
    <BookStoreThemeProvider>
      <ThemeSwicher />
          <Layout>
            <Home /> 
          </Layout>
    </BookStoreThemeProvider>
  );
}

export default App;
