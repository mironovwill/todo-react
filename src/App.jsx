import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Container, Stack } from 'react-bootstrap';
import { Card } from './components/Card/Card.jsx';
import { Form } from './components/Form/Form.jsx';

function App() {
  const [taskList, setTaskList] = useState(() => {
    try {
      const tasks = localStorage.getItem('tasks');
      return JSON.parse(tasks) || [];
    } catch (e) {
      console.log(e);
      return [];
    }
  });

  const [task, setTask] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem('tasks', JSON.stringify(taskList));
    } catch (e) {
      console.log(e);
    }
  }, [taskList]);

  const renderTasks = () =>
    taskList.map((item) => {
      return (
        <Card
          id={item.id}
          text={item.text}
          completed={item.completed}
          key={item.id}
          deleteTask={deleteTask}
          completeTask={completeTask}
        />
      );
    });

  const addTask = (task) => {
    setTaskList((prevTaskList) => [
      ...prevTaskList,
      { id: uuidv4(), text: task, completed: false }
    ]);
    setTask('');
  };

  const deleteTask = (id) => {
    setTaskList((prevTaskList) => prevTaskList.filter((item) => item.id !== id));
  };

  const completeTask = (id) => {
    setTaskList((prevTaskList) => {
      return prevTaskList.map((item) => {
        if (item.id === id) {
          return { ...item, completed: true };
        }
        return item;
      });
    });
  };

  return (
    <Container className="mt-2 mb-5">
      <Stack gap={3} className="col-md-7 mx-auto">
        <h1>Todo App</h1>
        <Form addTask={addTask} setTask={setTask} task={task} />
        <Stack gap={3}>{renderTasks()}</Stack>
      </Stack>
    </Container>
  );
}

export default App;
