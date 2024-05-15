import superAgent from "superagent";
import {expectedObjForGet, expectedObjForPost, expectedObjForPut, expectedObjForPatch} from "../../constants/variables";
import {getApiResponse, postApiResponse, putApiResponse} from "../../constants/functions";


//код, который нужно выполнить перед каждым тестом
beforeEach(() => {
  }); 
  
describe('api requests https://reqres.in/', () => {
  
  test('GET_SINGLE USER', async () => {
    const response = await getApiResponse("https://reqres.in/api/users/1");
    expect(response).not.toBeNull(); // Проверяем, что ответ не является null
    expect(response.status).toBe(200);
    expect(response.body.data).toEqual(expectedObjForGet);
  });

  test('SINGLE USER NOT FOUND', async () => {
    const response = await getApiResponse("https://reqres.in/api/users/23");
    expect(response.status).toBe(404);
    expect(response.error).toBe('Not Found');
    expect(response.body).toEqual({});
  });

  test('POST_CREATE', async () => {
    const postData = { name: "James", job: "AQA" };
    const response = await postApiResponse("https://reqres.in/api/users", postData);
    expect(response).not.toBeNull();
    expect(response.status).toBe(201);
    expect(response.body.name).toEqual(expectedObjForPost.name);
    expect(response.body.job).toEqual(expectedObjForPost.job);
});

  test('PUT_UPDATE', async () => {
    const postData = { name: "Adam", job: "PM" };
    const response = await putApiResponse("https://reqres.in/api/users/6", postData);
    expect(response).not.toBeNull();
    expect(response.status).toBe(200);
    expect(response.body.name).toEqual(expectedObjForPut.name);
    expect(response.body.job).toEqual(expectedObjForPut.job);
});

test('PATCH_UPDATE', async () => {
  const postData = { name: "Kuba", job: "BA" };
  const response = await putApiResponse("https://reqres.in/api/users/2", postData);
  expect(response).not.toBeNull();
  expect(response.status).toBe(200);
  expect(response.body.name).toEqual(expectedObjForPatch.name);
  expect(response.body.job).toEqual(expectedObjForPatch.job);
});


test('DELETE_DELETE', async () => {
  const response = await superAgent.delete("https://reqres.in/api/users/2");
  expect(response.status).toBe(204);
  expect(response.body).toEqual({});
});

test('POST_REGISTER - SUCCESSFUL', async () => {
  const postData = { email: "eve.holt@reqres.in", password: "pistol" };
  const response = await postApiResponse("https://reqres.in/api/register", postData);
  expect(response).not.toBeNull();
  expect(response.status).toBe(200);
  expect(response.body).toHaveProperty('token');
});

test('POST_LOGIN - SUCCESSFUL', async () => {
  const postData = { email: "eve.holt@reqres.in", password: "cityslicka" };
  const response = await postApiResponse("https://reqres.in/api/login", postData);
  expect(response).not.toBeNull();
  expect(response.status).toBe(200);
  expect(response.body).toHaveProperty('token');
});

test('GET_LIST USERS', async () => {
  const response = await getApiResponse("https://reqres.in/api/users?page=2");
  expect(response).not.toBeNull();
  expect(response.status).toBe(200);
  expect(response.body).toHaveProperty('page', 2);
});

test('GET_LIST <RESOURCE>', async () => {
  const response = await getApiResponse("https://reqres.in/api/unknown");
  expect(response).not.toBeNull();
  expect(response.status).toBe(200);
});

test('GET_SINGLE <RESOURCE>', async () => {
  const response = await getApiResponse("https://reqres.in/api/unknown/2");
  expect(response).not.toBeNull();
  expect(response.status).toBe(200);
  expect(response.body.data).toHaveProperty('id', 2);
});

});


     //код, который нужно выполнить после каждого теста
     afterEach(() => {
    });