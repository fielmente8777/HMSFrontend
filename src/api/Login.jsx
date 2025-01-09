import axios from "axios";

export const LoginAPI = async (reservationId) => {
    if (!reservationId) {
        throw new Error("Reservation Id or Room Number is required");
    }
    try {
        const response = await axios.post("https://hmsbackend-ifj7.onrender.com/api/reservationid", {
            // const response = await axios.post("http://localhost:8000/api/reservationid", {
            reservationId: reservationId,
        });

        if (response.status === 200) {
            return response.data;
        } else {
            console.error("Unexpected response status:", response.status);
            return false;
        }
    } catch (error) {
        console.error("Error occurred in LoginAPI:", error.message);
        throw new Error(error.response?.data?.message || "An error occurred while processing the request");
    }
};
