import { useNavigate } from "react-router-dom"
import Cookies from "js-cookie"
import { removeAuthToken } from "../api/api"


const Navbar = () => {

    const navigate = useNavigate()

    const onLogOut = () => {
        Cookies.remove("jwt_token")
        removeAuthToken()
        navigate("/login")
    }

    return (
        <nav className="bg-white px-4 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-[#6366F1]">Go Business</h1>
            <div className="flex text-lg items-center space-x-4 text-gray-600 font-medium">
                <button className="bg-[#6366f1] px-2 py-1 cursor-pointer rounded-md text-white">Try for free</button>
                <button onClick={onLogOut} className="cursor-pointer border border-red-300 rounded-md px-2 py-1 text-red-600 ">Log out</button>
            </div>
        </nav>
    )
}

export default Navbar