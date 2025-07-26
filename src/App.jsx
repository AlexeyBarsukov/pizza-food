import { MainLayout } from './layouts/MainLayout.jsx'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  )
}

export default App
