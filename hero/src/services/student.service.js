import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3001/api/postCollections",
  
});

const api2 = axios.create({
    baseURL: "http://localhost:3001/api/users",
})
const studentService = {

    async createPost(formData){
        try {
            const token = localStorage.getItem('token');
            const response = await api.post('/create', formData,{
                headers:{
                    'Content-Type': 'multipart/form-data',
                     'Authorization': `Bearer ${token}`
                },
            });
            return response.data;
        } catch (error) {
            throw new Error(
                error.response?.data?.message || 'Error creating parent'
            )
        }
    },

    async registerStudent(data) {
    try {
        const response = await api2.post('/', data);
        return response.data;
    } catch (error) {
        throw new Error(
            error.response?.data?.message || 'Error registering student'
        );
    }
 
},
      async loginStudent(data){
        try{
            const response = await api2.post('/login', data);
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

 async getUserById() {
    try {
        const token = localStorage.getItem('token');
        const response = await api2.get('/', {
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

 async getAllPosts() {
    try {
       
        const response = await api.get('/getPost', {
        });
        return response.data;
    } catch (error) {
        throw new Error(
            error.response?.data?.message || 'Error getting user by id'
        );
    }
}

    


   
};

export default studentService;