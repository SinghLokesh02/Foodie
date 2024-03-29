import React from 'react'

const ShimmerCard = () => {
  return (
    <div className="food-card w-80 p-5 rounded hover:shadow-2xl animate-pulse mx-8 mt-4">
    <div className="image">
      <div className="w-full h-40 bg-gray-300 rounded"></div>
    </div>
    <div className="w-full h-6 bg-gray-300 rounded mt-2"></div>
    <div className="w-full h-4 bg-gray-300 rounded mt-1"></div>
    <div className="minute-details flex gap-2 mt-1">
      <div className="w-12 h-4 bg-gray-300 rounded"></div>
      <div className="w-20 h-4 bg-gray-300 rounded"></div>
    </div>
    <div className="w-full h-4 bg-gray-300 rounded mt-1"></div>
  </div>

  )
}

export default ShimmerCard
