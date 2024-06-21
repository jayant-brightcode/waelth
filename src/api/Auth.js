import { getToken } from "../utils/LocalStorage";
import { Remote } from "../utils/Remote";


export const login = async (mobileNumber) => {
    try {
      


       const  userData = {
            phone: mobileNumber
        };
        const url = Remote.BASE_URL+"user/login"
       
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
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


export const VerifyMobileNumber = async (mobileNumber,otp) => {
    try {
      


       const  userData = {
            phone: mobileNumber,
            otp: otp,
        };

        const url = Remote.BASE_URL +"user/verify_otp"
       
       
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
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




export const GetProfiles = async () => {
    try {
      
    

        const token = await getToken()
        const url = Remote.BASE_URL+"user/profile"
       
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: `${token}`,
                'Content-Type': 'application/json', // Adjust content type as needed
            },

        });

          const data = await response.json();
        
        // // Handle the API response here (return, log, etc.)
       return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};


export const UpdateProfiles = async (name, email ) => {
    try {



        const url = Remote.BASE_URL + "user/update_profile"
        const userData = {
           
            name:name,
            email:email,
            

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

export const GetNotification = async () => {
    try {
      
    

        const token = await getToken()
        const url = Remote.BASE_URL+"user/notification"
       
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: `${token}`,
                'Content-Type': 'application/json', // Adjust content type as needed
            },

        });

          const data = await response.json();
        
        // // Handle the API response here (return, log, etc.)
       return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
