import httpClient from "../http-common";

const getAll = () => 
{
    return httpClient.get('/employees');
}

const create = (data) => 
{
    return httpClient.post('/employee', data);
}

const get = (id) => 
{
    return httpClient.get(`/employee/${id}`);
}

const update = (data) => 
{
    return httpClient.put(`/employee`, data);
}

const updateAccess = (id, data) =>
{
    return httpClient.put(`/employee/access/${id}`, data);
}

const remove = (id) => 
{
    return httpClient.delete(`/employee/${id}`);
}

const exportedObject = { getAll, create, get, update, updateAccess, remove };

export default exportedObject;