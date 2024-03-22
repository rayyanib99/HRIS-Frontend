import httpClient from "../http-common";

const getAll = () => 
{
    return httpClient.get('/payroll');
}

const create = (data) => 
{
    return httpClient.post("/payroll", data);
}

const get = (id) => 
{
    return httpClient.get(`/payroll/${id}`);
}

const update = (data) => 
{
    return httpClient.put('/payroll', data);
}

const remove = (id) => 
{
    return httpClient.delete(`/payroll/${id}`);
}

const exportedObject = { getAll, create, get, update, remove };

export default exportedObject;