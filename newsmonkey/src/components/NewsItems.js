import React   from 'react'

const NewsItems=(props)=> {

    let {title,description,imageUrl,newsUrl}=props;
    return (
      <div>
        <div className="card my-3" style={{border:props.mode==='dark'?'white':'black'}}>
            <img className="card-img-top" src={imageUrl} alt="Card cap"/>
         <div className={`card-body bg-${props.back}`}>
          <h5 className="card-title" style={{color:props.mode==='dark'?'white':'black'}}>{title}...</h5>
            <p className="card-text" style={{color:props.mode==='dark'?'white':'black'}}>{description}...</p>
            <a href={newsUrl} target="_blank"  rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
         </div>
        </div>
      </div>
    )
}

export default NewsItems

