import { useState } from "react"
import Cookies from "js-cookie"
import { useNavigate, Navigate } from "react-router-dom"

import { Container } from "../../components"
import api from "../../api/api"


const Login = () => {

    const navigate = useNavigate()

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const [errMsg, setErrMsg] = useState('')

    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { email, password } = loginData
        if (email === '' || password === '') {
            setErrMsg('Please fill in all fields')
            return
        }

        try {
            const { data } = await api.post('/api/auth/signin', { email, password })
            const { token } = data.data
            Cookies.set('jwt_token', token, { expires: 1 })
            setErrMsg('')
            navigate('/')
        } catch (err) {
            setErrMsg(err.response.data.message)
        }

        console.log(loginData)

    }

    if (Cookies.get('jwt_token')) {
        return <Navigate to="/" />
    }

    return (
        <main className="w-screen h-screen bg-[#f4f6fb]">
            <Container className="h-full flex items-center justify-center">
                <div className="w-2/5 bg-white min-h-96 rounded-2xl shadow-lg  p-8">
                    <h1 className="text-[#6366f1] text-2xl font-bold">Go Business</h1>
                    <p className="text-gray-600 font-light mt-2">Sign in to open your referral dashboard</p>
                    <form className="mt-8" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                            <input type="email" onChange={handleChange} id="email" name="email" className="w-full px-4 py-2 border border-gray-600  rounded-lg focus:outline-none focus:ring focus:border-blue-300" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
                            <input type="password" onChange={handleChange} id="password" name="password" className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring focus:border-blue-300" />
                        </div>
                        <button type="submit" className="w-full bg-[#6366f1] text-white py-2 px-4 rounded-lg hover:bg-[#4f46e5] focus:outline-none focus:ring focus:border-blue-300">Sign In</button>
                    </form>
                    <p className="text-red-500 mt-2">{errMsg ? errMsg : null}</p>
                </div>
            </Container>
        </main>
    )
}

export default Login