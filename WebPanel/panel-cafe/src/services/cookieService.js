import Cookies from 'js-cookie';
import { json } from 'react-router-dom';

function getDataCookie(){
    let data = Cookies.get('auth_token').toString();
    let parsedData = JSON.parse(data);
    console.log(parsedData);
    return parsedData;
}

export default getDataCookie;