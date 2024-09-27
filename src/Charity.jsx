import React from 'react'
import {useState, useEffect} from "react"
import Card from './Card'

const Charity = ({category}) => {

    const [charityData , setCharityData] = useState([])
    const apiKey = import.meta.env.VITE_API_KEY;

  

    async function getData(){
        try{
            const url = `https://partners.every.org/v0.2/browse/${category}?apiKey=${apiKey}&take=20&page=1`
            const response = await fetch(url)
            const data = await response.json()
           setCharityData(data.nonprofits)
           console.log(charityData)
        }
        catch(err){
            alert("Something went wrong")
        }
      
    }


    useEffect(()=>{
        getData()
    },[category])

  return (
    <div>
        <h2 className="category-text">{category.slice(0,1).toUpperCase() + category.slice(1, category.length).toLowerCase()} Charity</h2>
          <div className="card-container">
       
       {charityData ? charityData.map((charity, index) => (
           <Card key={index} logo={charity.logoUrl}  image={charity.coverImageUrl} location={charity.location} donation={charity.websiteUrl} name={charity.name} />
       )) : <></>}
 
   </div>
    </div>
  
  )
}

export default Charity
