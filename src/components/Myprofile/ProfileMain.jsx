import { useContext, useState } from 'react'
import DataContext from '../../context/DataContext'
import Loader from '../Loader'
import Heading from '../textcomponents/Heading'
import MyRequestCard from './MyRequestCard'
import ProfleInfo from './ProfleInfo'

const ProfileMain = () => {

    const { setRequestPopup, selectRequestPopupData } = useContext(DataContext)
    // const [load, setLoad] = useState(false);


    const handleCheckout = () => {
        setRequestPopup(true);
        selectRequestPopupData("Are you sure!");
    }
    return (
        <div className='flex flex-col gap-4'>
            <Heading h3={true} className="text-sm text-secondary">
                {"Profile Info"}
            </Heading>
            <ProfleInfo />
            <Heading h3={true} className="text-sm text-secondary">
                {"My Requested Item"}
            </Heading>
            <MyRequestCard />
            <button
                onClick={handleCheckout}
                className="bg-[#FF432A] font-medium w-full flex justify-center items-center mt-3 text-[0.78rem] text-white py-3 px-4 active:scale-95 tracking-wider rounded-full"
            >
                {/* {load ? <p className="py-1"><Loader /></p> :  */}
                Check Out
                {/* } */}
            </button>
        </div>
    )
}

export default ProfileMain