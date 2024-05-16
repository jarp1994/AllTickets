import React from 'react'

const Fraccion = ({prices}) => {
  let sortedPrices = prices
  .map(price => Number(price.replace(/[$,]/g, ''))) // Remove '$' and ',' and convert to number
  .sort((a, b) => a - b) // Sort numbers in ascending order
  .map(price => {
    // Convert number back to string with '$' and commas
    return '$' + price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  });

  return (
    <div>
      {sortedPrices[0]}-{sortedPrices[sortedPrices.length - 1]} 
    </div>
  )
}

export default Fraccion
