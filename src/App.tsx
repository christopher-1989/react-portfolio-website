import {
  ChakraProvider, theme
} from "@chakra-ui/react"
import { RouterProvider } from "react-router-dom"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { router } from "./routes/router"


export const App = () => <ChakraProvider theme={theme}>
    <ColorModeSwitcher justifySelf="flex-end" color={"teal"}/>
    <RouterProvider router={router}/>
  </ChakraProvider>

