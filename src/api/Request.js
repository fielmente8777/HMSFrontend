import axios from "axios";

export const RequestAPI = async (requestBody) => {
    try {
        const response = await axios.post("https://hmsbackend-ifj7.onrender.com/api/request",
            // const response = await axios.post("http://localhost:8000/api/request",
            requestBody,
        );

        if (response.status === 201) {
            return response.data;
        } else {
            console.error("Unexpected response status:", response.status);
            return false;
        }
    } catch (error) {
        console.error("Error occurred in RequestAPI:", error.message);
        throw new Error(error.response?.data?.message || "An error occurred while processing the request");
    }
};