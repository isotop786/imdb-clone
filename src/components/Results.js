import React from 'react'

function Results({results}) {
    console.log("results is: "+results)
  return (
    <div>
        {results && results.map((result)=> (
            <div key={result.id}>{result.original_title}</div>
        ))}
    </div>
  )
}

export default Results