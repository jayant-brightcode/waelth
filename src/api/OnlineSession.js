import { getToken } from "../utils/LocalStorage";
import { Remote } from "../utils/Remote";


export const BookOnlineSessions = async (name, email , age ,phone , monthly_emi , monthly_saving, cash , goldheld , silver_held, message) => {
    try {



        const url = Remote.BASE_URL + "user/book_online_session"
        const userData = {
          
            name:name,
            email:email,
            phone:phone,
            age:age,
            monthly_emi:monthly_emi,
            monthly_saving:monthly_saving,
            cash:cash,
            gold_held:goldheld,
            silver_held:silver_held,
            message:message

        };



        const token = await getToken();
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                Authorization: `${token}`,
                'Content-Type': 'application/json', // Adjust content type as needed
            },
            body: JSON.stringify(userData),

        });

        const data = await response.json();

        // // Handle the API response here (return, log, etc.)
        return data;
    } catch (error) {
        // console.error(error);
        throw error;
    }
};





export const ContactUs = async (name, email , phone , message) => {
    try {



        const url = Remote.BASE_URL + "user/contact_us"
        const userData = {
          
            name:name,
            email:email,
            phone:phone,
            message:message

        };



        const token = await getToken();
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                Authorization: `${token}`,
                'Content-Type': 'application/json', // Adjust content type as needed
            },
            body: JSON.stringify(userData),

        });

        const data = await response.json();

        // // Handle the API response here (return, log, etc.)
        return data;
    } catch (error) {
        // console.error(error);
        throw error;
    }
};


export const BookedSessions = async () => {
    try {



        const url = Remote.BASE_URL + "user/booked_sessions"
    



        const token = await getToken();
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: `${token}`,
                'Content-Type': 'application/json', // Adjust content type as needed
            }

        });

        const data = await response.json();

        // // Handle the API response here (return, log, etc.)
        return data;
    } catch (error) {
        // console.error(error);
        throw error;
    }
};