export default async function handler(req, res) {
    console.log("START FETCH DATA")
    try {
        const data = await fetch('http://localhost:8003/api/items/',{
            method: 'get',
            headers: {
                "Accept": "application/json",
                "content-type": "application/json"
            }
        }
            );
        // console.log("Requests", res)
        // let data = await res.json();
        // console.log("DATA", data)
        // return data
        res.status(200).json(data)
    } catch (error) {
        console.error(error)
        return res.status(error.status || 500).end(error.message)
    }
}