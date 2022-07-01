import React, { Fragment, useEffect, useState } from "react";

// import EditTodo from "./EditTodo";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);
  const [person, setPerson] = useState([]);

  //delete todo function

//   const deleteTodo = async id => {
//     try {
//       const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
//         method: "DELETE"
//       });

//       setTodos(todos.filter(todo => todo.todo_id !== id));
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

  const getTodos = async () => {
    // try {
    //   const response = await fetch("http://localhost:3001/", {mode: 'no-cors'});
    //   const jsonData = await response.json();

    //   setTodos(jsonData);
    // } catch (err) {
    //   console.error(err.message);
    // }

    fetch('http://localhost:3001/', {mode: 'no-cors'})
      .then(response => {
        return response.text();
      })
      .then(data => {
        setPerson(data);
      });
  };

  useEffect(() => {
    getTodos();
  }, []);

  console.log(person);

  return (
    <Fragment>
      {" "}
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Mobile No.</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {todos.map(todo => (
           // <tr key={todo.todo_id}>
            <tr>
              <td>{todo.name}</td>
              <td>
              {todo.age}
              </td>
              <td>
              {todo.email}
              </td>
              <td>
              {todo.mobile}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodos;