import { getToken } from "../utils/LocalStorage";
import { Remote } from "../utils/Remote";


export const PurchaseMembership = async (membership_type,membership_method,name, email , phonecall ,phonewhatsapp) => {
    try {



        const url = Remote.BASE_URL + "user/purchase_membership"
        const userData = {
            membership_type: membership_type,
            membership_method:membership_method,
            name:name,
            email:email,
            phonecall:phonecall,
            phonewhatsapp:phonewhatsapp

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


export const GetPurchasedPlan = async () => {
    try {



        const url = Remote.BASE_URL + "user/active_plan"
    



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