import { useEffect, useState } from 'react'


import api from "../../api/api"
import { Container, Navbar, Footer } from '../../components'
import OverCard from './OverCard'
import ServiceSummary from './ServiceSummary'
import ReferralShare from './ReferralShare'
import ReferralsTable from '../ReferralsTable'



const DashBoard = () => {


    const [metrics, setMetrics] = useState([])
    const [serviceSummary, setServiceSummary] = useState(null)
    const [referral, setReferral] = useState(null)
    const [referrals, setReferrals] = useState([])

    const fetchData = async () => {
        try {
            const res = await api.get('/api/referrals')
            const payload = res.data || {}
            const dataObj = payload.data || payload

            setMetrics(dataObj.metrics || [])
            setServiceSummary(dataObj.serviceSummary || null)
            setReferral(dataObj.referral || null)
            setReferrals(dataObj.referrals || [])
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])




    return (
        <main className="w-screen min-h-screen bg-[#F4F6FB]">
            <Container>
                <Navbar />

                <div className="p-4">
                    <h1 className="text-3xl font-bold ">Referral Dashboard</h1>
                    <p className="font-light text-lg text-gray-600">Track Your referrals, earnings, and partner activity in one <br /> place</p>
                </div>

                <OverCard metrics={metrics} />
                <ServiceSummary data={serviceSummary} />
                <ReferralShare referral={referral} />
                <ReferralsTable referrals={referrals} />
                <Footer />
            </Container>
        </main>
    )
}

export default DashBoard