'use client'

import { useState } from 'react'

export default function RevenueCalculator() {
  const [price, setPrice] = useState(97)
  const [students, setStudents] = useState(50)

  const yourCut = (price * students * 0.85).toFixed(0)
  const fanaticsCut = (price * students * 0.50).toFixed(0)
  const diff = (Number(yourCut) - Number(fanaticsCut)).toFixed(0)

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-8">
      <div className="space-y-6 mb-8">
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium text-zinc-300">Instructional Price</label>
            <span className="text-sm font-bold text-white">${price}</span>
          </div>
          <input
            type="range"
            min={19}
            max={297}
            step={1}
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full accent-red-600"
          />
          <div className="flex justify-between text-xs text-zinc-600 mt-1">
            <span>$19</span><span>$297</span>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium text-zinc-300">Students Who Buy</label>
            <span className="text-sm font-bold text-white">{students}</span>
          </div>
          <input
            type="range"
            min={5}
            max={500}
            step={5}
            value={students}
            onChange={(e) => setStudents(Number(e.target.value))}
            className="w-full accent-red-600"
          />
          <div className="flex justify-between text-xs text-zinc-600 mt-1">
            <span>5 students</span><span>500 students</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-lg bg-green-950/40 border border-green-800/40 p-5 text-center">
          <p className="text-xs text-zinc-500 mb-1">Your earnings on AIBJJ</p>
          <p className="text-3xl font-black text-green-400">${Number(yourCut).toLocaleString()}</p>
          <p className="text-xs text-zinc-500 mt-1">85% payout</p>
        </div>
        <div className="rounded-lg bg-zinc-800/40 border border-zinc-700/40 p-5 text-center">
          <p className="text-xs text-zinc-500 mb-1">On BJJ Fanatics (50%)</p>
          <p className="text-3xl font-black text-zinc-500">${Number(fanaticsCut).toLocaleString()}</p>
          <p className="text-xs text-red-600 mt-1">You leave ${Number(diff).toLocaleString()} on the table</p>
        </div>
      </div>
    </div>
  )
}
