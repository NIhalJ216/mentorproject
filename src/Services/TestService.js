import { getData, postData, putData, deleteData } from '../Utils/rest-services';

export const getApiData = () => getData('https://jsonplaceholder.typicode.com/posts');
