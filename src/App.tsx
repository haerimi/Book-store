import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import { BookStoreThemeProvider } from "./context/themeContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/common/Error";
import Singup from "./pages/Singup";
import ResetPasswrod from "./pages/ResetPassword";
import Login from "./pages/Login";
import Books from "./pages/Books";
import BookDetail from "./pages/BookDetail";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import OrderList from "./pages/OrderList";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./api/queryClient";
import ToastContainer from "./components/common/toast/ToastContainer";

const routeList = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/books",
    element: <Books />,
  },
  {
    path: "/signup",
    element: <Singup />,
  },
  {
    path: "/reset",
    element: <ResetPasswrod />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/book/:bookId",
    element: <BookDetail />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/order",
    element: <Order />,
  },
  {
    path: "/orderList",
    element: <OrderList />,
  },
];

const router = createBrowserRouter(routeList.map((item) => {
  return {
    ...item,
    element: <Layout>{item.element}</Layout>,
    errorElement: <Error />,
  };
}));

function App() {
  return (
    //<Layout children={<Home />} /> : Props방법
    // theme 파일에서 만든 light와 dark 중 선택하여 지정 가능
    <QueryClientProvider client={queryClient}>
      <BookStoreThemeProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </BookStoreThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
