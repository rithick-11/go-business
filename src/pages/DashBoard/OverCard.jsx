import CustomIcon from '../../utils/icons'

const OverCard = ({ metrics }) => {
    if (!Array.isArray(metrics) || metrics.length === 0) return null

    return (
        <section className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Overview</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {metrics.map((m) => (
                    <div key={m.id} className="bg-white border border-gray-100 rounded-lg p-4 flex items-center gap-4 shadow-sm">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white">
                            <CustomIcon type={m.id} className="w-5 h-5" />
                        </div>

                        <div>
                            <div className="text-lg font-bold text-gray-900">{m.value}</div>
                            <div className="text-sm text-gray-500">{m.label}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default OverCard