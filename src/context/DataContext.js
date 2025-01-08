import { createContext, useState } from 'react';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [reservationId, setReservationId] = useState('');
    const [roomNumber, setRoomNumber] = useState('');
    const [error, setError] = useState('');
    const [bookingData, setBookingData] = useState(null);

    return (
        <DataContext.Provider
            value={{
                reservationId, setReservationId,
                error, setError,
                bookingData, setBookingData,
                roomNumber, setRoomNumber
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;
