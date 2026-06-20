const ServiceSummary = ({ data }) => {
    if (!data) return null

    const { service, yourReferrals, activeReferrals, totalRefEarnings } = data

    return (
        <section className="bg-gray-50 p-6 rounded-lg mt-6">
            <h4 className="text-lg font-semibold mb-4">Service summary</h4>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                    <div className="text-xs text-gray-400 uppercase">Service</div>
                    <div className="text-sm text-indigo-600 font-medium mt-2">{service}</div>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-100">
                    <div className="text-xs text-gray-400 uppercase">Your Referrals</div>
                    <div className="text-sm text-gray-900 font-semibold mt-2">{yourReferrals}</div>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-100">
                    <div className="text-xs text-gray-400 uppercase">Active Referrals</div>
                    <div className="text-sm text-gray-900 font-semibold mt-2">{activeReferrals}</div>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-100">
                    <div className="text-xs text-gray-400 uppercase">Total Ref. Earnings</div>
                    <div className="text-sm text-gray-900 font-semibold mt-2">{totalRefEarnings}</div>
                </div>
            </div>
        </section>
    )
}

export default ServiceSummary
