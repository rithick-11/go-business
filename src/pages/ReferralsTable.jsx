import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const formatDate = (d) => {
  if (!d) return ''
  const dt = new Date(d)
  const yyyy = dt.getFullYear()
  const mm = String(dt.getMonth() + 1).padStart(2, '0')
  const dd = String(dt.getDate()).padStart(2, '0')
  return `${yyyy}/${mm}/${dd}`
}

const formatProfit = (num) => {
  const n = Number(num || 0)
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
}

const ReferralsTable = ({ referrals = [] }) => {
  const navigate = useNavigate()

  const rows = useMemo(() => referrals, [referrals])
  const [page, setPage] = useState(1)
  const pageSize = 10

  if (!Array.isArray(rows) || rows.length === 0) return null

  const total = rows.length
  const totalPages = Math.max(1, Math.ceil(total / pageSize))

  const currentPage = Math.min(Math.max(1, page), totalPages)
  const startIdx = (currentPage - 1) * pageSize
  const endIdx = Math.min(startIdx + pageSize, total)
  const visible = rows.slice(startIdx, endIdx)

  const goTo = (p) => setPage(Math.min(Math.max(1, p), totalPages))

  return (
    <section className="bg-white rounded-lg p-6 mt-6 border border-gray-100">
      <h4 className="text-lg font-semibold mb-4">All referrals</h4>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead>
            <tr className="text-xs text-gray-500">
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Service</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Profit</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((r) => (
              <tr key={r.id} className="cursor-pointer hover:bg-gray-50" onClick={() => navigate(`/referral/${r.id}`)}>
                <td className="py-3 px-4 text-gray-700">{r.name}</td>
                <td className="py-3 px-4 text-gray-700">{r.serviceName}</td>
                <td className="py-3 px-4 text-gray-700">{formatDate(r.date)}</td>
                <td className="py-3 px-4 text-indigo-600 font-medium">{formatProfit(r.profit)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-gray-500">
          Showing {startIdx + 1}–{endIdx} of {total} entries
        </div>

        <div className="flex items-center gap-2">
          <button onClick={() => goTo(currentPage - 1)} disabled={currentPage === 1} className={`px-3 py-1 rounded-md border ${currentPage === 1 ? 'text-gray-300 border-gray-200' : 'text-gray-700 border-gray-200 hover:bg-gray-50'}`}>
            Previous
          </button>

          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }).map((_, i) => {
              const p = i + 1
              const active = p === currentPage
              return (
                <button key={p} onClick={() => goTo(p)} className={`w-8 h-8 rounded-full flex items-center justify-center ${active ? 'bg-indigo-600 text-white' : 'bg-white border border-gray-200 text-gray-700'}`}>
                  {p}
                </button>
              )
            })}
          </div>

          <button onClick={() => goTo(currentPage + 1)} disabled={currentPage === totalPages} className={`px-3 py-1 rounded-md border ${currentPage === totalPages ? 'text-gray-300 border-gray-200' : 'text-gray-700 border-gray-200 hover:bg-gray-50'}`}>
            Next
          </button>
        </div>
      </div>
    </section>
  )
}

export default ReferralsTable
