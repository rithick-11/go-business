import { useState } from 'react'

const ReferralShare = ({ referral }) => {
    if (!referral) return null

    const [linkCopied, setLinkCopied] = useState(false)
    const [codeCopied, setCodeCopied] = useState(false)

    const handleCopy = async (text, type) => {
        try {
            await navigator.clipboard.writeText(text)
            if (type === 'link') {
                setLinkCopied(true)
                setTimeout(() => setLinkCopied(false), 2000)
            } else {
                setCodeCopied(true)
                setTimeout(() => setCodeCopied(false), 2000)
            }
        } catch (err) {
            console.error('copy failed', err)
        }
    }

    return (
        <section className="bg-gray-50 p-6 rounded-lg mt-6">
            <h4 className="text-lg font-semibold mb-4">Refer friends and earn more</h4>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
                <div className="bg-white rounded-lg p-4 border border-gray-100 flex items-center gap-3">
                    <div className="flex-1">
                        <div className="text-xs text-gray-400 uppercase">Your referral link</div>
                        <input readOnly value={referral.link} className="w-full mt-2 text-sm bg-gray-50 border border-transparent rounded-md p-2" />
                    </div>
                    <button onClick={() => handleCopy(referral.link, 'link')} className="px-4 py-2 bg-indigo-600 text-white rounded-md">
                        {linkCopied ? 'Copied' : 'Copy'}
                    </button>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-100 flex items-center gap-3">
                    <div className="flex-1">
                        <div className="text-xs text-gray-400 uppercase">Your referral code</div>
                        <input readOnly value={referral.code} className="w-full mt-2 text-sm bg-gray-50 border border-transparent rounded-md p-2" />
                    </div>
                    <button onClick={() => handleCopy(referral.code, 'code')} className="px-4 py-2 bg-indigo-600 text-white rounded-md">
                        {codeCopied ? 'Copied' : 'Copy'}
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ReferralShare
