import { Routes, Route } from 'react-router-dom'

import { ProtectedRoute } from './components'
import { Dashboard, Login } from './pages'
import NotFound from './pages/NotFound'
import ReferralDetails from './pages/ReferralDetails'


const App = () => {
  return (
    <Routes>
      <Route path="/login" exact element={<Login />} />
      <Route  element={<ProtectedRoute />} >
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/about" exact element={<div>About</div>} />
        <Route path="/referral/:id" exact element={<ReferralDetails />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App