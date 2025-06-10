import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;


const axiosClient = axios.create({	
	baseURL: apiUrl,
	headers: {
		"Content-Type": "application/json",
	},
});



// axiosClient.interceptors.request.use((config)=>{
//   try{
//       const token = localStorage.getItem('ACCESS_TOKEN');
//         config.headers.Authorization =`Bearer ${token}`;
//         return config;

//   } catch(e){
//     console.log(e);
//   }
// });

// axiosClient.interceptors.response.use((response)=>{
//   return response;
// }, (error)=>{
//   const {response} = error;
//   if(response.status==401){
//     localStorage.removeItem('ACCESS_TOKEN');
//     //window.location.reload();
//   }else if(response.status==404){
//     //show not found
//   }
//   throw error;
// });

export default axiosClient;
