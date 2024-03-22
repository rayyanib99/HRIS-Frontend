import httpClient from "../http-common";

const upload = (data) => 
{
    return httpClient.post("/upload", data);
}

const exportedObject = { upload };

export default exportedObject;