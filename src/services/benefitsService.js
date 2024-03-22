import httpClient from "../http-common";

const getAll = () => 
{
    return httpClient.get('/benefits');
}

const create = (data) => 
{
    return httpClient.post("/benefits", data);
}

const get = (id) => 
{
    return httpClient.get(`/benefits/${id}`);
}

const update = (data) => 
{
    return httpClient.put('/benefits', data);
}

const remove = (id) => 
{
    return httpClient.delete(`/benefits/${id}`);
}

const exportedObject = { getAll, create, get, update, remove };

export default exportedObject;