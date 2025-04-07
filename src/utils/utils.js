import axios from 'axios';

export const handleLogin = async (username, password) => {
    try{
        const response = await axios.post('http://127.0.0.1:8000/api/login/', {
            username,
            password,
         });
        const { access, user } = response.data;
        return { access, user };

    }

    catch (error) {
        console.error('Login error:', error);
        throw new Error('Login failed');
  }

}

export const handleSignup = async (username, email, password) => {
    try{
        const response = await axios.post('http://127.0.0.1:8000/api/register/', {
            username,
            email,
            password,
         });
        return response.data;
    }
    catch (error) {
        console.error('Signup error:', error);
        throw new Error('Signup failed');
    }
}