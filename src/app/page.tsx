'use client'

import { useState } from 'react'

export default function Page() {
  const [transactions, setTransactions] = useState([])

  return (
    <main className="p-6">
      <div className="mb-6 flex justify-between items-center">
        <div className="text-xl font-semibold">
          Total Balance: <span>₱0.00</span>
        </div>
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Transaction
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 border-b text-left">Date</th>
              <th className="px-6 py-3 border-b text-left">Amount</th>
              <th className="px-6 py-3 border-b text-left">Note</th>
              <th className="px-6 py-3 border-b text-left">Type</th>
              <th className="px-6 py-3 border-b text-left">Location</th>
              <th className="px-6 py-3 border-b text-left">Running Balance</th>
              <th className="px-6 py-3 border-b text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-6 py-4 text-center text-gray-500">
                  No transactions found. Add your first transaction to get started.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </main>
  )
}