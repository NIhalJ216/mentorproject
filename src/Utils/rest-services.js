import axios from 'axios';
import { API_RESPONSE_CODES } from './Constants';

// const handleSuccessResponse = (res) => {
//   const { SUCCESS } = API_RESPONSE_CODES;
//   if (res.status === SUCCESS) {
//     return res.data;
//   }
//   return res;
// };

const handleSuccessResponse = (res) => res;

const handleErrorResponse = (err) => {
  const { UNAUTHORISED, FORBIDDEN, NOT_FOUND, BAD_REQUEST, INTERNAL_SERVER_ERROR, PAYLOAD_ERROR } = API_RESPONSE_CODES;
  if (
    [UNAUTHORISED, FORBIDDEN, NOT_FOUND, BAD_REQUEST, INTERNAL_SERVER_ERROR, PAYLOAD_ERROR].includes(
      err?.response?.status
    )
  ) {
    console.log('ERROR', err);
    return err;
  }
};

export const getData = (url) => {
  const headerObj = '';
  return axios
    .get(url)
    .then((res) => handleSuccessResponse(res))
    .catch((err) => handleErrorResponse(err));
};
