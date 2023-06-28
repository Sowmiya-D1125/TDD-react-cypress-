import axios from 'axios';
import { configAxios } from '../utils/AxiosConfig';

const UppercaseProxy = (clientMessage) => {

    // requesting data from server
    let axiosPromise = configAxios.post('CustomerDetails/login', { data: clientMessage });

    // converting server response to upper case
    axiosPromise = axiosPromise.then(serverData => serverData.data);

    // returning promise so that client code can attach `then` and `catch` handler
    return(axiosPromise);
};

export default UppercaseProxy;