import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import { BookStoreThemeProvider } from "./context/themeContext";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from "./components/common/Error";
import Singup from "./pages/Singup";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout><Home /></Layout>,
    errorElement: <Error />
  },
  {
    path: '/books',
    element: (
    <Layout>
      <div>도서 목록</div>
    </Layout>)
  },
  {
    path: 'signup',
    element: (
      <Layout>
        <Singup />
      </Layout>
    )
  }
]);

function App() {
  return (
    //<Layout children={<Home />} /> : Props방법
    // theme 파일에서 만든 light와 dark 중 선택하여 지정 가능 
    <BookStoreThemeProvider>
        <RouterProvider router={router} />
    </BookStoreThemeProvider>
  );
}

export default App;
