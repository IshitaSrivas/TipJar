import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const mintContent = async (uri) => {
    return await axios.post(`${API_URL}/api/content/mint`, { uri });
};

export const sendTip = async (creatorAddress, amount, message) => {
    return await axios.post(`${API_URL}/api/tips/tip`, {
        creatorAddress,
        amount,
        message,
    });
};

export const viewContent = async (contentId) => {
    return await axios.get(`${API_URL}/api/content/${contentId}`);
};
