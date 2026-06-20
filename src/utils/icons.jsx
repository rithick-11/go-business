import { FaDollarSign } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import { GiSandsOfTime } from "react-icons/gi";
import { LuPercent } from "react-icons/lu";
import { FaSackDollar } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { BiTransfer } from "react-icons/bi";

const CustomIcon = ({ type, className }) => {
    switch (type) {
        case 'balance':
            return <FaDollarSign className={className} />

        case 'discountPct':
            return <FaCreditCard className={className} />

        case 'totalRef':
            return <FiLink className={className} />

        case 'discountAmt':
            return <GiSandsOfTime className={className} />

        case 'commissionAmt':
            return <LuPercent className={className} />

        case 'totalEarn':
            return <FaSackDollar className={className} />

        case 'commissionDisc':
            return <FaUserFriends className={className} />

        case 'bankTransfer':
            return <BiTransfer className={className} />

        default:
            return null
    }
}

export default CustomIcon

