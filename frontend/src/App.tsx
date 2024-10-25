import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './components/Layout'
import HomePage from './pages/Home'
import ProductDetail from './pages/ProductDetail'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/product" element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
