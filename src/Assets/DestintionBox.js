import React from 'react'

export default function DestintionBox({images}) {
  return (
    <div  className="Destination--section--cont">
      { images.map((image,index)=>(
        <div className="cont " key={index}>
        <img className='cont--image' src={image.image} alt="" />
        <h3 className="cont--heading">{image.name}</h3>
    </div>
       ))
      }
    </div>
  )
}
