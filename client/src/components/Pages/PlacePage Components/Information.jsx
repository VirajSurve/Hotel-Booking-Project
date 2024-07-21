import React, { useContext, useEffect, useState } from 'react';
import Rating from './Rating';
import { UserContext } from "../../../UserContext";
import { differenceInBusinessDays, differenceInCalendarDays, format } from 'date-fns';
import axios from 'axios';
import { Navigate } from 'react-router-dom';


export default function Information({ place }) {
    const { startDate, setStartDate, endDate, setEndDate, guests, setGuests } = useContext(UserContext);
    let numberOfNights=0;
    const [name,setName]=useState('');
    const [mobile,setMobile]=useState('');
    const [redirect,setRedirect]=useState('');
    const {user}=useContext(UserContext);

    useEffect(()=>{
        if(user){
            setName(user.name);
        }
    },[user])

    if(startDate && endDate){
        numberOfNights=differenceInCalendarDays(endDate,startDate);
    }

    const handleStartDateChange = (event) => {
        setStartDate(new Date(event.target.value));
    };

    const handleEndDateChange = (event) => {
        setEndDate(new Date(event.target.value));
    };

    const formatDateToInputValue = (date) => {
        return date ? format(date, 'yyyy-MM-dd') : '';
    };

    async function handleBooking(){
        const response=await axios.post("http://localhost:4000/booking",{
            place:place._id,
            startDate,
            endDate,
            guests,
            name,
            mobile,
            price:numberOfNights*place.price,
        });
        const bookingId=response.data._id;
        setRedirect(`/account/bookings/${bookingId}`);
    }

    if(redirect){
        return <Navigate to={redirect}></Navigate>
    }

    return (
        <div className='center'>
            <div className='information'>
                <div className='info'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-7 top-12 p-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    <p className='type'>{place.address}</p>
                    <p className='space'>Max Guest {place.maxGuests}</p> 
                    <Rating place={place} />
                </div>

                <div className='chart'>
                    <p id='price' className='text-2xl text-center mb-2'>Price: ${place.price} / per night</p>
                    <div className='border rounded-2xl'>
                        <div className='md:flex'>
                            <div className='px-4 py-4'>
                                <label>Check In: </label>
                                <input 
                                    type='date' 
                                    value={formatDateToInputValue(startDate)} 
                                    onChange={handleStartDateChange} 
                                />
                            </div>
                            <div className='px-4 py-4 border-l'>
                                <label>Check Out: </label>
                                <input 
                                    type='date' 
                                    value={formatDateToInputValue(endDate)} 
                                    onChange={handleEndDateChange} 
                                />
                            </div>
                        </div>
                        <div className='px-4 py-4 border-t'>
                            <label>Number of guests: </label>
                            <input 
                                className='bg-gray-200 rounded-full py-1 px-2 w-full border my-1' 
                                type='number' 
                                value={guests} 
                                onChange={e => setGuests(e.target.value)}
                            />
                        </div>
                        {numberOfNights>0 && (
                            <div>
                            <div className='px-4 py-4 border-t'>
                            <label>Name:</label>
                            <input 
                                className='bg-gray-200 rounded-full py-1 px-2 w-full border my-1' 
                                type='text' 
                                value={name} 
                                onChange={e => setName(e.target.value)}
                            />
                            </div>
                            <div className='px-4 py-4 border-t'>
                            <label>Mobile:</label>
                            <input 
                                className='bg-gray-200 rounded-full py-1 px-2 w-full border my-1' 
                                type='tel' 
                                value={mobile} 
                                onChange={e => setMobile(e.target.value)}
                            />
                            </div>
                            </div>
                        )}
                    </div>
                    <button className='bg-primary rounded-2xl w-full mt-5' onClick={handleBooking}>Book now</button>
                    {numberOfNights>0 &&(
                        <span>${numberOfNights*place.price}</span>
                    )}
                </div>
            </div>
        </div>
    );
}
