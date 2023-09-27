import  axios from 'axios';

export const crea=async (task)=>{
    await axios.post('http://localhost:8000/tarea',task)
}