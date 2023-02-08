import {
  ChakraProvider, theme
} from "@chakra-ui/react"
import { RouterProvider } from "react-router-dom"
import { router } from "./routes/router"


export const App = () => <ChakraProvider theme={theme}>
    <RouterProvider router={router}/>
  </ChakraProvider>

