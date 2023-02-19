import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { Header } from "./components/Header"
import { Router } from "./Router"
import { GlobalStyle } from "./styles/global"
import dark from "./styles/theme/dark"


function App() {

  return (
    <ThemeProvider theme={dark}>
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
