import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://api.github.com/users/hiteshchoudhary")
            .then((response) => response.json())
            .then(data => {
                console.log(data);
                setData(data)
                    
                })
        }, [])
  return (
    <div className='bg-yellow-500 text-black text-3xl text-center p-4'>Github: {data.followers} </div>
  )
}

export default Github