import axios from 'axios';

const server = "http://localhost:3000/api/"

const getDoctors = () => {
    return axios({
        method: 'get',
        url: `${server}doctors`,
    });
};

const getApointment = (id) => {
    return axios({
        method: 'get',
        url: `${server}apointments?id=${id}`,
    });
};

export { getApointment, getDoctors}