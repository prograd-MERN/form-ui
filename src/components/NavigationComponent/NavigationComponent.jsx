import React from 'react'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import LoginComponent from '../routes/LoginComponent/LoginComponent'
import SignInComponent from '../routes/SignInComponent/SignInComponent'
const NavigationComponent = () => {
  return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                    <li>
                        <Link to='/signIn'>SignIn</Link>
                    </li>
                </ul>
            </div>
            <Routes>
                <Route exact path='/login' element={<LoginComponent/>}></Route>
                <Route exact path='/signIn' element={<SignInComponent/>}></Route>
            </Routes>
        </Router>
    )
}

export default NavigationComponent