import httpClient from "../http-common";

const getAll = () => 
{
    return httpClient.get('/ats');
}

const create = (data) => 
{
    return httpClient.post("/ats", data);
}

const get = (id) => 
{
    return httpClient.get(`/ats/${id}`);
}

const update = (data) => 
{
    return httpClient.put('/ats', data);
}

const updateStatus = (id, data) =>
{
    return httpClient.put(`/ats/${id}`, data);
}

const remove = (id) => 
{
    return httpClient.delete(`/ats/${id}`);
}

const exportedObject = { getAll, create, get, update, updateStatus, remove };

export default exportedObject;