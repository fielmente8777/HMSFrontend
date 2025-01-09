import React, { useContext } from 'react'
import DataContext from '../../context/DataContext';

const ContactSupportPopup = () => {

  const { setRequestPopup } = useContext(DataContext);
  const handleRaisedRequestPopup = () => {
    setRequestPopup(false)
  }
  return (
    <div className='fixed flex justify-center items-center w-full top-0 left-0 h-full bg-black/50  px-5'>
      <div className='bg-white h-[10rem] border rounded-md overflow-hidden border-red-800  w-full'>
        ContactSupportPopup


        <button onClick={handleRaisedRequestPopup}>
          Okay
        </button>
      </div>
    </div>
  )
}

export default ContactSupportPopup