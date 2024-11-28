import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import { ThemeProvider } from './context/ThemeProvider'

function App() {

  const appRouter = createBrowserRouter([
    {
      path:'/',
      element: <Home/>
    }
  ])


  return (
    <>
      <ThemeProvider>
        <RouterProvider router={appRouter}/>
      </ThemeProvider>   
    </>
  )
}

export default App
