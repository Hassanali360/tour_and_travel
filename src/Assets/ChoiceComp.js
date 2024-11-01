import React from 'react'
import Icon from './Icons/dollar.png'
import Icon1 from './Icons/add-friend.png'
import Icon2 from './Icons/shield.png'

export default function ChoiceComp() {
    const Data = [
        {
            icon: Icon,
            heading: 'COMPETITIVE PRICE',
            description: 'We provide a wide range of flight options, including domestic and international destinations, to cater to your travel needs. Whether you’re planning a business trip or a family vacation, we offer a diverse selection of flights to choose from.'
        },
        {
            icon: Icon1,
            heading: 'USER FRIENDLY',
            description: 'With a few simple steps, you can easily search for flights, compare prices, and make your reservation. Our commitment to your convenience is evident in every step of your journey. Our user-friendly approach extends to personalized recommendations.'
        },
        {
            icon: Icon2, 
            heading: 'TRUSTED SERVICE',
            description: 'Our goal is to provide a seamless travel experience from the moment you book your flight until you reach your destination. From a simple and intuitive booking process to responsive customer support, we prioritize your needs.'
        },
    ];
  return (<>
        <h1 className="top--section--heading">
        WHY CHOSE SIMPLE TOUR AND TRAVELS?
      </h1>
    <div className='choice--section--cont'>
        {Data.map((data)=>{
            return (
                <div className="choice--cont" key={data.heading} >
                    <span><img src={data.icon} alt="" className="choice--img" /></span>
                    <h3 className="cont--heading">{data.heading}</h3>
                    <p className='detailed--description'>{data.description}</p>
                </div>
            );
        })}
    </div>
                    </>
  )
}
