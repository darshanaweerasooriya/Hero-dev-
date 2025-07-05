import axios from "axios";

const api = axios.create({
    baseURL: "http://34.47.237.4:3001/api/teacher",
  
})

const adminService = {
    async registerTeacher(data){
         try {
        const response = await api.post('/', data);
        return response.data;
    } catch (error) {
        throw new Error(
            error.response?.data?.message || 'Error registering student'
        );
    }
    },

     async getAllTeachers() {
        try {
       
            const response = await api.get('/getteachers', {
        });
        return response.data;
        } catch (error) {
            throw new Error(
                error.response?.data?.message || 'Error getting user by id'
            );
        }
    },

       async loginTeacher(data){
        try{
            const response = await api.post('/login', data);
            const token = response.data.token
            if(token){
                localStorage.setItem('token', token);
            }
            return response.data;
        }catch(error){
            throw new Error(
            error.response?.data?.message || 'Error login student'
        );
        }
    },
}

export default adminService;