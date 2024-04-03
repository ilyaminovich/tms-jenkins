'use strict';
import fetch from 'cross-fetch';

/*Task 1 💻
У нас есть список постов на сервере. И наша задача отрисовать текст этих постов на странице.
Но по каким то необъяснимым причинам, нам требуются посты номер 3, 7, 15, 23. 
Выглядит просто. Но есть нюанс 🐒 
Посты должны загружаться в определенном порядке. Сначала 15, потом 23, потом 7 и только потом 3. 
А если какой-то из постов не загрузиться, нам тогда необходимо  вывести в консоль ошибку.
Наша задача должна иметь универсальное решение. В любой момент может потребоваться загрузить другие посты, 
или больше постов или меньше.

###### Реализуйте задачу двумя способами:
- Promise chaining
- Async / await */

{

  function fetchPost(postId: number): Promise<any> {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch post ${postId}`);
            }
            return response.json();
        })
        .then(json => {
            console.log(json);
        })
        .catch(error => console.error(error));
}

function fetchPostsInOrder(postIds: number[]): void {
    let promiseChain = Promise.resolve();
    postIds.forEach(postId => {
        promiseChain = promiseChain.then(() => fetchPost(postId));
    });
    promiseChain.catch(error => console.error(error));
}

let postIds: number[] = [15, 23, 7, 3];

fetchPostsInOrder(postIds);
}
  


{ 
  async function fetchPost(postId: number): Promise<any> {
      try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
          if (!response.ok) {
              throw new Error(`Failed to fetch post ${postId}`);
          }
          const json = await response.json();
          console.log(json);
          return json;
      } catch (error) {
          return console.error(error);
      }
  }

  async function fetchPostsInOrder(postIds: number[]) {
    for (let i = 0; i < postIds.length; i++) {
        await fetchPost(postIds[i]);
    }
}

let postIds: number[] = [15, 23, 7, 3];

fetchPostsInOrder(postIds);
}



/*Task 2 💻
+ Реализуйте приложение:
    + Перейдите по ссылке `https://jsonplaceholder.typicode.com/`
    + Во вкладке `Resources` лежит ключ `/todos` - Это именно те данные которые нам нужны
    + Далее напишите две функции `getTodos` & `printTodos`
        + Функция `getTodos` делает запрос по указанному адресу и забирает данные. 
        + Функция `printTodos` создает список массив объектов, объект записывает id и title объекта с делом
        + Вывести полученный результат в консоль */


{
  function getTodos(): Promise<any[]> {
    return fetch(`https://jsonplaceholder.typicode.com/todos`)
    .then((response) => {
        if (!response.ok) {
          throw new Error('Error')
        }
        return response.json()
      })
      .catch(error => console.log(error));
}

function printTodos(todos: { id: number, title: string }[]) {
    let todoList = todos.map(todo => {
        return { id: todo.id, title: todo.title };
    });
    console.log(todoList);
}

getTodos()
.then(todos => printTodos(todos));
}