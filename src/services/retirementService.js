import httpClient from "../http-common";

const getAll = () => 
{
    return httpClient.get('/retirement');
}

const create = (data) => 
{
    return httpClient.post("/retirement", data);
}

const get = (id) => 
{
    return httpClient.get(`/retirement/${id}`);
}

const update = (data) => 
{
    return httpClient.put('/retirement', data);
}

const remove = (id) => 
{
    return httpClient.delete(`/retirement/${id}`);
}

const exportedObject = { getAll, create, get, update, remove };

export default exportedObject;