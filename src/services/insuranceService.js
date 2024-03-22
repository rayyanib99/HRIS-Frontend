import httpClient from "../http-common";

const getAll = () => 
{
    return httpClient.get('/insurances');
}

const create = (data) => 
{
    return httpClient.post("/insurances", data);
}

const get = (id) => 
{
    return httpClient.get(`/insurances/${id}`);
}

const update = (data) => 
{
    return httpClient.put('/insurances', data);
}

const remove = (id) => 
{
    return httpClient.delete(`/insurances/${id}`);
}

const exportedObject = { getAll, create, get, update, remove };

export default exportedObject;