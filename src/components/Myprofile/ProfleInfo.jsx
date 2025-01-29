import React from 'react'
import Profile from "../../images/profilejpg.jpg"

const ProfleInfo = () => {




    return (
        <div className='text-[13px] border py-3 rounded-md flex gap-10 items-center justify-between px-10'>

            <div className=' flex flex-col gap-2'>
                <p className='capitalize'>{localStorage.getItem('guestName')}</p>
                <p>{localStorage.getItem('guestNumber')}</p>
            </div>
            <div className='h-14 w-14 bg-[#F4F0F0] rounded-full overflow-hidden'>
                <img src={Profile} alt="profile" className=' scale-110 mt-1  object-cover border' />
            </div>
        </div>
    )
}

export default ProfleInfo