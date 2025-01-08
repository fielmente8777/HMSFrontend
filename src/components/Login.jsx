import React, { useContext, useState } from 'react'
import { LoginAPI } from '../api/Login';
import { useNavigate } from 'react-router-dom';
import DataContext from '../context/DataContext';


const Login = () => {

    const {
        reservationId, setReservationId,
        error, setError,
        bookingData, setBookingData,
        roomNumber, setRoomNumber
    } = useContext(DataContext)

    const navigate = useNavigate();

    const id = "B2024022400002"
    const roomId = "d-101"

    const handleSubmit = async (e) => {
        e.preventDefault();
        localStorage.setItem('roomId', reservationId);
        navigate(`/home/?id=${reservationId}`);
        // setError('');

        // try {
        //     const response = await LoginAPI(reservationId);
        //     if (response) {
        //         console.log('Login successful:', response);
        //         setReservationId(response.data.bookingId)
        //         // setBookingData(response.data)
        //         localStorage.setItem('bookingData', JSON.stringify(response.data));

        //         navigate(`/home/?id=${response.data.bookingId}`);
        //     } else {
        //         setError('Invalid reservation ID');
        //     }
        // } catch (err) {
        //     setError(err.message || 'Something went wrong!');
        // }
    };

    return (
        <div className='p-4'>
            <div className='text-5xl font-semibold mt-20'>
                Enter your Reservation Id
            </div>

            <form onSubmit={handleSubmit} className='mt-10 flex flex-col gap-10'>
                <input type='text' placeholder='Room Number or Reservation Id'
                    value={reservationId}
                    className='text-base border border-gray-500 py-2 px-2'
                    onChange={(e) => setReservationId(e.target.value)}
                />
                {/* <p>or</p>
                <input type='text' placeholder='Enter Room Number'
                    value={roomNumber}
                    className='text-base border border-gray-500 py-2 px-2'
                    onChange={(e) => setRoomNumber(e.target.value)}
                /> */}
                <div className='flex justify-center items-center'>
                    <button type='submit' className='border text-white p-2 px-10 bg-gray-600'>{"-->"} Next</button>

                </div>
            </form>
            {error && <p className="error-message">{error}</p>}


        </div>
    )
}

export default Login