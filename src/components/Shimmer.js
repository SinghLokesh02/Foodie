import React from 'react';
import ShimmerCard from './ShimmerCard';

const Shimmer = () => {
  // Create an array with 20 elements to repeat the ShimmerCard component
  const shimmerCards = Array.from({ length: 20 }, (_, index) => (
    <ShimmerCard key={index} />
  ));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {/* Render the array of ShimmerCard components */}
      {shimmerCards}
    </div>
  );
};

export default Shimmer;
