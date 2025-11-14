import axios from "axios";

const api = axios.create({
    baseURL: "http://34.47.237.4:3001/api/gamification",
  
});

const gamificationService = {

    async getGamification() {
        try {
        const token = localStorage.getItem('token');
        const response = await api.get('/', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        throw new Error(
            error.response?.data?.message || 'Error getting user by id'
        );
    }
    },

    async getGamificationForChild() {
        try {
        const token = localStorage.getItem('token');
        const response = await api.get('/child/gamification', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        throw new Error(
            error.response?.data?.message || 'Error getting user by id'
        );
    } // test
    }
}

export default gamificationService;