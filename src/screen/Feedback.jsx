import { useContext, useState } from 'react';
import { IoMdClose } from "react-icons/io";
import {
    MdOutlineSentimentDissatisfied,
    MdOutlineSentimentNeutral,
    MdOutlineSentimentSatisfied,
    MdOutlineSentimentVeryDissatisfied,
    MdOutlineSentimentVerySatisfied
} from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import DataContext from '../context/DataContext';

const tooltipArray = [
    "Terrible",
    "Terrible+",
    "Bad",
    "Bad+",
    "Average",
    "Average+",
    "Great",
    "Great+",
    "Awesome",
    "Awesome+"
];
// const fillColorArray = [
//     "#f17a45",
//     "#f17a45",
//     "#f19745",
//     "#f19745",
//     "#f1a545",
//     "#f1a545",
//     "#f1b345",
//     "#f1b345",
//     "#f1d045",
//     "#f1d045"
// ];


const Feedback = () => {

    const navigate = useNavigate()
    const { hotelDetails } = useContext(DataContext)

    const [roomNumber, setRoomNumber] = useState(
        JSON.parse(localStorage.getItem('roomsData')).roomId
    )
    const [guestName, setGuestName] = useState(localStorage.getItem('guestName'))
    const [guestNumber, setGuestNumber] = useState(localStorage.getItem('guestNumber'))
    const [feedback, setFeedback] = useState('')
    const [suggestion, setSuggestions] = useState('')
    const [selectedRating, setSelectedRating] = useState(0);
    const [load, setLoad] = useState(false)

    // Catch Rating value
    const handleRatingClick = (rate) => {
        setSelectedRating(rate)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            roomNumber,
            guestName,
            guestNumber,
            feedback,
            selectedRating: selectedRating === 1 ? "one" : selectedRating === 2 ? "two" : selectedRating === 3 ? "three" : selectedRating === 4 ? "four" : "five",
            suggestion,
        }
        localStorage.removeItem('guestName')
        localStorage.removeItem('guestNumber')
        localStorage.removeItem('lastClearTime')
        localStorage.removeItem('roomsData')
        localStorage.removeItem('hid')
        localStorage.removeItem('hotelid')
        localStorage.setItem('hasDoneFeedback', "true");
        navigate('/thanks')
    }

    // when user closes the window or refreshes the page, remove only feedback-related localStorage items

   
    const handleCloseFeedback = () => {
        localStorage.removeItem('roomsData')
        localStorage.setItem('hasDoneFeedback', "true");
        navigate('/thanks')
    }
    return (
        <div className="">
            {hotelDetails?.HotelName &&
                <div className="flex w-full  flex-col gap-8 p-6 rounded-tr-3xl rounded-tl-3xl relative bg-white z-10 ">

                    <div className="flex flex-col gap-2">
                        <div className='flex justify-end hover:text-[#FF432A] text-[#5F5F5F]'>
                            <IoMdClose size={28} onClick={handleCloseFeedback} />
                        </div>
                        <h1 className="text-2xl capitalize font-semibold text-[#121212]">
                            Thanks for stay with us
                        </h1>
                        <p className="text-base text-[#5F5F5F]">
                            We are glad to see you here, please provide your feedback
                        </p>
                    </div>
                    <form className="flex flex-col w-full h-full " onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-4 w-full h-full mb-8">

                            <div className="flex flex-col gap-1">
                                <label htmlFor="feedback" className="text-black text-base">
                                    Your feedback for {hotelDetails?.HotelName.split(' ')[0]}
                                </label>
                                <textarea
                                    type="text"
                                    placeholder="Any feedback"
                                    id="feedback"
                                    rows={4}
                                    value={feedback}
                                    onChange={(e) => setFeedback(e.target.value)}
                                    className="border-b resize-none focus:outline-none outline-none border-[#FF432A] py-2"
                                />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="rating" className="text-black text-base">
                                    Please rate to mobile app
                                </label>
                                <div className="border py-10 rounded-md text-gray-300 flex justify-center">
                                    <MdOutlineSentimentVeryDissatisfied
                                        className={`cursor-pointer ${selectedRating >= 1 ? "text-red-500" : "hover:text-red-500"
                                            }`}
                                        size={30}
                                        onClick={() => handleRatingClick(1)}
                                    />
                                    <MdOutlineSentimentDissatisfied
                                        className={`cursor-pointer ${selectedRating >= 2 ? "text-orange-500" : "hover:text-orange-500"
                                            }`}
                                        size={30}
                                        onClick={() => handleRatingClick(2)}
                                    />
                                    <MdOutlineSentimentNeutral
                                        className={`cursor-pointer ${selectedRating >= 3 ? "text-yellow-500" : "hover:text-yellow-500"
                                            }`}
                                        size={30}
                                        onClick={() => handleRatingClick(3)}
                                    />
                                    <MdOutlineSentimentSatisfied
                                        className={`cursor-pointer ${selectedRating >= 4 ? "text-green-500" : "hover:text-green-500"
                                            }`}
                                        size={30}
                                        onClick={() => handleRatingClick(4)}
                                    />
                                    <MdOutlineSentimentVerySatisfied
                                        className={`cursor-pointer ${selectedRating >= 5 ? "text-blue-500" : "hover:text-blue-500"
                                            }`}
                                        size={30}
                                        onClick={() => handleRatingClick(5)}
                                    />
                                </div>

                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="suggestion" className="text-black text-base">
                                    Help us to improve our application
                                </label>
                                <textarea
                                    type="text"
                                    placeholder="Any suggestion"
                                    id="suggestion"
                                    rows={4}
                                    value={suggestion}
                                    onChange={(e) => setSuggestions(e.target.value)}
                                    className="border-b resize-none focus:outline-none outline-none border-[#FF432A] py-2"
                                />
                            </div>

                        </div>
                        <button
                            type="submit"
                            className="bg-[#FF432A] text-[1rem] flex justify-center items-center text-white py-2 px-4 uppercase active:scale-95 tracking-wider rounded-full"
                        >
                            {load ? <p className="py-1"><Loader /></p> : "Submit"}
                        </button>
                    </form>
                </div>
            }

        </div>
    )
}

export default Feedback