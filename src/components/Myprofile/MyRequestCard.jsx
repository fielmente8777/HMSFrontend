import React, { useContext, useEffect, useState } from 'react'
import DataContext from '../../context/DataContext';
import { MyRequestAPI } from '../../api/MyRequest';

const MyRequestCard = () => {

    const {
        myRequestedItem,
        setMyRequestedItem,
    } = useContext(DataContext);

    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const getMyAllRequest = async () => {
            const response = await MyRequestAPI(localStorage.getItem('guestNumber'));
            if (response) {
                setMyRequestedItem(response)
            }
        }
        getMyAllRequest()
    }, [])


    const getRequestedItemName = () => {
        // const itemNameSet = new Set();

        // data.
    }
    const countRequestedItems = (data, itemName) => {
        return data?.reduce((count, request) => {
            if (request.requestedItems) {
                const itemCount = request.requestedItems
                    .filter(item => item.item === itemName)  // Match item name
                    .reduce((sum, item) => sum + item.quantity, 0);  // Sum up the quantities
                return count + itemCount;  // Add to the total count
            }
            return count;
        }, 0);
    }


    const totalCount = countRequestedItems(myRequestedItem?.data, "Toiletries");

    return (
        <div className='min-h-[100px] border rounded-md '>
            {myRequestedItem.data?.length > 0 ?
                "Loading..." :
                <p className='min-h-[100px] text-[0.78rem] px-5 text-center text-secondary flex justify-center items-center'>{myRequestedItem?.message === "Request not found" ? "You have not made any request yet- Please make a request" : "Error fetching data"}</p>
            }
        </div>
    )
}

export default MyRequestCard