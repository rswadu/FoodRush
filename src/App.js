import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import ResCard from "./components/ResCard";
import Body from "./components/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import { Outlet } from "react-router-dom";
import ResMenu from "./components/ResMenu";
import { Profile } from "./components/Profile";
import { Profile2 } from "./components/Profile";
import { ProfileClass } from "./components/ProfileClass";
import Shimmer from "./components/Shimmer";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";
// import InstaMart from "./components/InstaMart";

const InstaMart = lazy(() => import("./components/InstaMart"));

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/FoodRush",
          element: <Body />,
        },
        {
          path: "/About",
          element: <About />,
          children: [
            {
              path: "Profile",
              element: <ProfileClass />,
            },
          ],
        },
        {
          path: "/restaurant/:id",
          element: <ResMenu />,
        },
        {
          path: "/instamart",
          element: (
            <Suspense fallback={<Shimmer />}>
              <InstaMart />
            </Suspense>
          ),
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
