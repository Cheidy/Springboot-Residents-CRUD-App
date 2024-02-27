import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:9990/residents';

export const listResidents = () => axios.get(REST_API_BASE_URL);

