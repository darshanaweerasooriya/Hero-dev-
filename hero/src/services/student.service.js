import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3001/api/postCollections",
  
})
const studentService = {

    async createPost(formData){
        try {
            //const token = localStorage.getItem('token');
            const response = await api.post('/create', formData,{
                headers:{
                    'Content-Type': 'multipart/form-data',
                    //'Authorization': `Bearer ${token}`
                },
            });
            return response.data;
        } catch (error) {
            throw new Error(
                error.response?.data?.message || 'Error creating parent'
            )
        }
    }
};

export default studentService;