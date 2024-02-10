import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch("https://api.github.com/users/Abdulhaseebimran")
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // }, [])
  return (
    <div className=' d-flex justify-content-center
    text-center m-4 bg-gray-600 p-4 text-white text-3xl'>
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="Github Picture" 
      width={300}/>
    </div>
  )
}

export default Github


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Abdulhaseebimran')
    return response.json()
}