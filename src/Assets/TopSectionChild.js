import React from 'react'

export default function TopSection({images}) {
  return (
    <div className="top--section--cont">
        <div className="cont Text--cont" >
        <h3 className="cont--heading">Best travel Agency in Kashmir</h3>
     <p className='detailed--description'>Get the best deals in International and Domestic Travel Packages along with
     hotel booking & flight bookings accross the world at Simple Tour & Travels-Best Travel company in Kashmir. We are
     known for providing best user experience for Holidays, Honeymoon packages, family tours and many more.</p>
     </div>
       { images.map((image,index)=>(
        <div className="cont" key={index}>
        <img className='cont--image' src={image.image} alt="" />
        <h3 className="cont--heading">{image.name}</h3>
    </div>
       ))
      }
        </div>
  )
}
