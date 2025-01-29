import axios from "axios";
export const MyRequestAPI = async (guestPhoneNumber) => {
    try {
        const response = await axios.post(`http://localhost:8000/api/getrequest`, {
            ndid: localStorage.getItem('hotelid'),
            hid: localStorage.getItem('hid'),
            guestPhoneNumber: guestPhoneNumber
            // guestPhoneNumber: "9036369036"
        })

        if (response.data) {
            return response?.data;
        }
    } catch (error) {
        return error.response?.data;
    }
};
// const getAllRequest = async () => {
//     try {
//         const response = await axios.post(`${host}/api/getrequest`, {
//             ndid: localStorage.getItem('ndid'),
//             hid: localStorage.getItem('hid'),
//         })

//         if (response.status === 404) {
//             setLoading(false)
//             return;
//         }

//         if (!response?.data) {
//             console.log("data not found")
//         } else {
//             setTotalRequests(response.data?.data.length);
//             setRequestsData(response.data?.data)
//             howManyPendingRequest(response.data?.data)
//             howManyInProgressRequest(response.data?.data)
//             howManyCompletedRequest(response.data?.data)
//         }
//         setLoading(false)
//     } catch (error) {
//         setLoading(false)
//         return {}
//     }
// }