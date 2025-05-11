import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3001",
  
})
const teacherService = {

    async createEvent(formData){
        try {
           
            const response = await api.post('/api/events', formData,{
                headers:{
                    'Content-Type': 'multipart/form-data',
                  
                },
            });
            return response.data;
        } catch (error) {
            throw new Error(
                error.response?.data?.message || 'Error creating parent'
            )
        }
    },

    async createClubs(formData){
       try {
         const response = await api.post('/api/clubs',formData,{
            headers:{
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
       } catch (error) {
             throw new Error(
                error.response?.data?.message || 'Error creating parent'
            )
       }
    },

    async getAllEvents() {
        try {
       
            const response = await api.get('/api/events/', {
        });
        return response.data;
        } catch (error) {
            throw new Error(
                error.response?.data?.message || 'Error getting user by id'
            );
        }
    },

    async getInvitedClubs(userId){
        try {
            const response = await api.get(`/api/clubs/invited/${userId}`,{
            
            });
            return response.data;
        } catch (error) {
            throw new Error(
                error.response?.data?.message || 'Error getting user by id'
            );
        }
    }


};

export default teacherService;