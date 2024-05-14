import superAgent from "superagent";


  export async function getApiResponse(url: string): Promise<any> {
    try {
      const response = await superAgent.get(url);
      return response;
    } catch (err: any) {
      return {
        status: err.response.status, 
        error: err.message,
        body: err.response.body
      };
    }
  }
  
  export async function postApiResponse(url: string, data: any): Promise<any> {
    try {
      const response = await superAgent
        .post(url)
        .set("Content-Type", "application/json")
        .send(data);
      return response;
    } catch (err: any) {
      return {
        status: err.response.status, 
        error: err.message,
        body: err.response.body
      };
    }
  }
  
  export async function putApiResponse(url: string, data: any): Promise<any> {
    try {
      const response = await superAgent
        .put(url)
        .set("Content-Type", "application/json")
        .send(data);
      return response;
    } catch (err: any) {
      return {
        status: err.response.status, 
        error: err.message,
        body: err.response.body
      };
    }
  }