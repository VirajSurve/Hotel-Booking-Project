import React from 'react';
// import { useGlobal } from '../Provider';
import Rating from './Rating';

export default function Information({place}) {
    // const {side, price , space} = useGlobal();
    
    return (
        <div className='center'>
            <div className='information'>
                <div className='info'>
                    <p className='type'>{place.address}</p>
                    <p className='space'>Max Guest {place.maxGuests}</p> 
                    <Rating place={place}/>
                </div>
                <div className='chart'>
                    <p id='price'>${place.price}</p>
                </div>
            </div>
        </div>
    )
}
