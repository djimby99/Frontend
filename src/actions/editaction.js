import { useAxios } from "../api";


export const editAction = async ({request}) => {
    const axios = useAxios();
    let formdata = await request.formData();
    try{
        const form = {
            username: formdata.get('username'),
            email: formdata.get('email'),
            first_name: formdata.get('first_name'),
            last_name: formdata.get('last_name')
        }
        const response = await axios.put('/update-profile/', form)

        console.log(form)
    }
    catch(err){
        console.error(err)

    }
}