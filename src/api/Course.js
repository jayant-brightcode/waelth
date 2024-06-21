import { getToken } from "../utils/LocalStorage";
import { Remote } from "../utils/Remote";


export const GetCourse = async () => {
    try {
      
    

        const token = await getToken()
        const url = Remote.BASE_URL+"user/course"
       
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


export const SearchCourse = async (query) => {
    try {
      
    

        const token = await getToken()
        const queryParams = {
            search_query: query,

        };

        let apiUrl = Remote.BASE_URL + "user/course"


        // Construct the URL with query parameters
        const urlWithParams = `${apiUrl}?${new URLSearchParams(queryParams)}`;

       
        const response = await fetch(urlWithParams, {
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




export const PurchaseCourse = async (course_id) => {
    try {



        const url = Remote.BASE_URL + "user/purchase_course"
        const userData = {
          
            course_id:course_id

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



export const GetPurchasedCourse = async () => {
    try {
      
    

        const token = await getToken()
        const url = Remote.BASE_URL+"user/get_purchased_course"
       
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