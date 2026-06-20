import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import api from '../api/api'

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

const ReferralDetails = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const [row, setRow] = useState(null)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    const fetch = async () => {
      setLoading(true)
      try {
        const res = await api.get('/api/referrals', { params: { id } })
        const payload = res.data || {}
        const dataObj = payload.data || payload

        // dataObj may be a single row object or an object containing referrals array
        if (!dataObj) {
          setNotFound(true)
          setRow(null)
          return
        }

        // if dataObj has id and matches, accept
        if (dataObj.id && String(dataObj.id) === String(id)) {
          setRow(dataObj)
          setNotFound(false)
          return
        }

        // if dataObj.referrals is an array, find match
        const list = Array.isArray(dataObj.referrals) ? dataObj.referrals : dataObj.referrals || dataObj.referrals === undefined ? dataObj.referrals : null

        if (Array.isArray(list)) {
          const found = list.find((r) => String(r.id) === String(id))
          if (found) {
            setRow(found)
            setNotFound(false)
            return
          }
        }

        // Some API variants might return the row directly under dataObj (not dataObj.id) — check nested
        if (dataObj.data && typeof dataObj.data === 'object') {
          const maybe = dataObj.data
          if (maybe.id && String(maybe.id) === String(id)) {
            setRow(maybe)
            setNotFound(false)
            return
          }
        }

        setNotFound(true)
        setRow(null)
      } catch (err) {
        setNotFound(true)
        setRow(null)
      } finally {
        setLoading(false)
      }
    }

    fetch()
  }, [id])

  if (loading) return <div className="p-6">Loading...</div>

  if (notFound) return (
    <main className="w-full p-6">
      <h1 className="text-2xl font-semibold mb-2">Referral not found</h1>
      <Link to="/" className="text-indigo-600">← Back to dashboard</Link>
    </main>
  )

  if (!row) return null

  return (
    <main className="w-full p-6 bg-[#F4F6FB] min-h-screen">
      <h1 className="text-2xl font-semibold mb-2">Referral Details</h1>
      <h2 className="text-xl font-bold mb-4">{row.name}</h2>

      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md">
        <div>
          <dt className="text-sm text-gray-500">Referral ID</dt>
          <dd className="text-base text-gray-900">{row.id}</dd>
        </div>

        <div>
          <dt className="text-sm text-gray-500">Service Name</dt>
          <dd className="text-base text-gray-900">{row.serviceName}</dd>
        </div>

        <div>
          <dt className="text-sm text-gray-500">Date</dt>
          <dd className="text-base text-gray-900">{formatDate(row.date)}</dd>
        </div>

        <div>
          <dt className="text-sm text-gray-500">Profit</dt>
          <dd className="text-base text-indigo-600 font-medium">{formatProfit(row.profit)}</dd>
        </div>
      </dl>

      <div className="mt-6">
        <Link to="/" className="text-indigo-600">← Back to dashboard</Link>
      </div>
    </main>
  )
}

export default ReferralDetails
