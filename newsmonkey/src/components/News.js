import React, {useEffect, useState } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner'


const News=(props)=> {

const[articles,setarticles]=useState([])
const[loading,setLoading]=useState(true)

  const updateNews=async()=>{
    
  
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.catagory}&apiKey=0088b7c31bff433496bd624960282eac`;
    let data=await fetch(url);
    let parsedData=await data.json()
    setarticles(parsedData.articles)
      setLoading(false)
  }

useEffect(()=>{
  updateNews()
  // eslint-disable-next-line
},[])

    return (
      <>
      <div className='container my-3'>
        <h2 className='text-center mb-4' style={{color:props.mode==='dark'?'white':'black'}}>Top Headlines of {props.catagory}</h2>
          {loading &&  < Spinner/>}
        <div className='row'>
        {articles.map((element)=>{
           return <div className='col-sm-4' key={element.url}>
              <NewsItems title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0,88):""} imageUrl={!element.urlToImage?"https://images.wsj.net/im-913109/social":element.urlToImage} mode={props.mode} back={props.back} newsUrl={element.url}/>
            </div>
          })}
        </div>
      </div>
      </>
    )

 }

export default News





