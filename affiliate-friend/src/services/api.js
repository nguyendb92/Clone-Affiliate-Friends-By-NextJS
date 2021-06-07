import axios from "axios";

class ApiWorker {


    static async get(url, params) {
        console.log("FETCH ....")
        try {
            params = (params !== undefined) ? params : {};
            let response = await axios.get(url, params)
            console.log("Response", response)
            return response;
        } catch (e) {
            console.log(`😱 Axios request failed: ${e}`);
        }
    }

    static async post(url, params) {
        // Example
        // const params = new URLSearchParams();
        // params.append('param1', 'value1');
        // params.append('param2', 'value2');
        // axios.post('/foo', params);
        try {
            let response = await axios.post(url, params)
            return response;
        } catch (e) {
            console.log(`😱 Axios request failed: ${e}`);
        }
    };

    static async put(url, params) {
        try {
            let response = await axios.put(url, params)
            return response;
        } catch (e) {
            console.log(`😱 Axios request failed: ${e}`);
        }
    };

    static async delete(url) {
        try {
            let response = await axios.delete(url);
            return response
        } catch (e) {
            console.log(`😱 Axios request failed: ${e}`);
        }

    }
}


export default ApiWorker;