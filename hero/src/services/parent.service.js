import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3001/api/parent",
  
});

const parentService = {
        async registerParent(data) {
    try {
        const response = await api.post('/register', data);
        return response.data;
    } catch (error) {
        throw new Error(
            error.response?.data?.message || 'Error registering student'
        );
    }
 
},
    async loginParent(data){
        try{
            const response = await api.post('/login', data);
            const token = response.data.token
            if(token){
                localStorage.setItem('token', token);
            }
            return response.data;
        }catch(error){
            throw new Error(
            error.response?.data?.message || 'Error login parent'
        );
        }
    },
}

export default parentService;