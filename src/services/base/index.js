import { axiosInstance } from "../axiosInstance"



export const baseNetwork = {

    getAll: async (url) => {

        let responseData = [];
        await axiosInstance.get(url)
            .then(res => {
                if (res.status === 200) {
                    responseData = res.data;
                }
                else {
                    throw "custom error"
                }
            })
            .catch(err => {
                throw err
            })

        return responseData;

    },
    getById: () => {

    },
    add: () => {

    },
    update: () => {

    }

}