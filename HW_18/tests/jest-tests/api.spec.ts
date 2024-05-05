import superAgent from "superagent";

//переменные
const expectedObjForGet : {id: number, email: string, first_name: string, last_name: string, avatar: string} = {
    "id": 1,
    "email": "george.bluth@reqres.in",
    "first_name": "George",
    "last_name": "Bluth",
    "avatar": "https://reqres.in/img/faces/1-image.jpg"
};

const expectedObjForPost : {name: string, job: string} = {
    "name": "James",
    "job": "AQA"
};

const expectedObjForPut : {name: string, job: string} = {
  "name": "Adam",
  "job": "PM"
};

const expectedObjForPatch : {name: string, job: string} = {
  "name": "Kuba",
  "job": "BA"
};


//функции
async function getApiResponse(url: string): Promise<any> {
  try {
    const response = await superAgent.get(url);
    return response;
  } catch (err: any) {
    console.log(err.message);
    return null;
  }
}


async function postApiResponse(url: string, data: any): Promise<any> {
  try {
    const response = await superAgent
      .post(url)
      .set("Content-Type", "application/json")
      .send(data);
    return response;
  } catch (err: any) {
    console.log(err.message);
    return null;
  }
}

async function putApiResponse(url: string, data: any): Promise<any> {
  try {
    const response = await superAgent
      .put(url)
      .set("Content-Type", "application/json")
      .send(data);
    return response;
  } catch (err: any) {
    console.log(err.message);
    return null;
  }
}



//код, который нужно выполнить перед каждым тестом
beforeEach(() => {
  }); 
  

//тесты
describe('api requests https://reqres.in/', () => {
  
  test('GET_SINGLE USER', async () => {
    const response = await getApiResponse("https://reqres.in/api/users/1");
    expect(response).not.toBeNull(); // Проверяем, что ответ не является null
    expect(response.status).toBe(200);
    expect(response.body.data).toEqual(expectedObjForGet);
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