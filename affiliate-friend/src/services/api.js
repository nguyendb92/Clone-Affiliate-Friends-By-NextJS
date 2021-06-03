import axios from "axios";

class ApiWorker {


    static async get(url) {
        console.log("FETCH ....")
        const response = await axios.get(url).catch((err) => {
            throw err;
        });
        console.log("Response", response)
        return response;
    }

    static async post(url, payload) {
        const response = await axios.post(url, payload).catch(err => {
            throw err;
        })
        return response;
    };
}


export default ApiWorker;