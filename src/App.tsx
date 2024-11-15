import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import { BookStoreThemeProvider } from "./context/themeContext";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from "./components/common/Error";
import Singup from "./pages/Singup";
import ResetPasswrod from "./pages/ResetPassword";
import Login from "./pages/Login";
import Books from "./pages/Books";
import BookDetail from "./pages/BookDetail";

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
      <Books />
    </Layout>)
  },
  {
    path: '/signup',
    element: (
      <Layout>
        <Singup />
      </Layout>
    )
  },
  {
    path: '/reset',
    element: (
      <Layout>
        <ResetPasswrod />
      </Layout>
    )
  },
  {
    path: '/login',
    element: (
      <Layout>
        <Login />
      </Layout>
    )
  },
  {
    path: '/book/:bookId',
    element: (
      <Layout>
        <BookDetail />
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
