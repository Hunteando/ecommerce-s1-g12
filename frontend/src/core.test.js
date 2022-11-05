// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';


import app from '../src/app'
import request from 'supertest'

describe('comprobar si existe ruta GET /tasks', () =>{

    test('Debe responder con un código de estado 200', async ()=> {
      const response = await request(app).get('/tasks').send();
      expect(response.statusCode).toBe(200); 
    }); 

    test('Debe responder un arreglo', async ()=> {
      const response = await request(app).get('/tasks').send()
      expect(response.body).toBeInstanceOf(Array)
   })
});

describe('POST /tasks', () => {
   describe("Cuando el titulo y la descripción existen", () => {

    const newTask = {
        title: "Test tasks",
        description: "Test Description"
    }

    test('Debe responder con un código de estado 200', async () => {
        const response = await request(app).post("/tasks").send(newTask);
        expect(response.statusCode).toBe(200);
      });
  
    //   test("Debe contener un archivo tipo Json", async () => {
    //       const response = await request(app).post("/tasks").send(newTask);
    //       expect(response.headers["content-type"]).toEqual(
    //        expect.stringContainig("json")
    //       );
    //   });
  
      test("Debe responder con un ID de tarea", async () => {
          const response = await request(app).post("/tasks").send(newTask);
      expect(response.body.id).toBeDefined();
    });
   })
   
});