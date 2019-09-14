import API from '../_config/api';

const userService = {
    searchUsers: async (query, pageNumber, pageSize) => {
        try {
            const response = await API.get(`search/users?page=${pageNumber}&query=${query}&per_page=${pageSize}`,);
            if (response) {
                return response;
            }
        } catch (error) {
            throw error;
        }
    },
    getUserCollection: async (username) => {
        try {
            const response = await API.get(`users/${username}/photos`,);
            if (response) {
                return response;
            }
        } catch (error) {
            throw error;
        }
    },
    getUserProfie: async (username) => {
        try {
            const response = await API.get(`users/${username}`,);
            if (response) {
                return response;
            }
        } catch (error) {
            throw error;
        }
    },
};

export default userService;
