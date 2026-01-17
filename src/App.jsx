
import './App.css'
import Home from './pages/Home'
import { Toaster } from "@/components/ui/sonner";

function App({ children }) {

  return (
    <>
      <Home/>
      {children}
      <Toaster richColors position="top-center" />
    </>
  )
}

export default App
