import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main/Main";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Statictis from "./components/Statictis/Statictis";
import Blog from "./components/Blog/Blog";
import QuizDetails from "./QuizDetails/QuizDetails";
import NotFound from "./components/NotFound/NotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: async () =>
            fetch(`https://openapi.programming-hero.com/api/quiz`),
          element: <Home></Home>,
        },
        {
          path: "quiz/:quizId",
          loader:async({params})=>{
            return fetch (`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element: <QuizDetails></QuizDetails>,
        },
        { path: "about", element: <About></About> },
        { path: "statictis", element: <Statictis></Statictis> },
        { path: "blog", element: <Blog></Blog> },
      ],
    },
    { path: "*", element: <NotFound></NotFound> },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
