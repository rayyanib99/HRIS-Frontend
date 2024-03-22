import httpClient from "../http-common";

const getAll = () => 
{
    return httpClient.get('/training');
}

const create = (data) => 
{
    return httpClient.post("/training", data);
}

const get = (id) => 
{
    return httpClient.get(`/training/${id}`);
}

const update = (data) => 
{
    return httpClient.put('/training', data);
}

const remove = (id) => 
{
    return httpClient.delete(`/training/${id}`);
}

const exportedObject = { getAll, create, get, update, remove };

export default exportedObject;