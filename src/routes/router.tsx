import {createBrowserRouter} from "react-router-dom"
import HomePage from "./HomePage"
import AboutPage from "./AboutPage"
import {ExperiencePage} from "./ExperiencePage"
import {ContactPage} from "./ContactPage"
import { Root } from "./Root"

const routes =  
[
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/experience",
        element: <ExperiencePage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      }]
    } 
]

const options = {
  basename: process.env.PUBLIC_URL
}

export const router = createBrowserRouter(routes, options)
