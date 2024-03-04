import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:9990/residents';

export const listResidents = () => axios.get(REST_API_BASE_URL);

export const createResident = (resident) => axios.post(REST_API_BASE_URL, resident);

export const getResident = (residentId) => axios.get(REST_API_BASE_URL + '/' + residentId);

export const updateResident = (residentId, resident) => axios.put