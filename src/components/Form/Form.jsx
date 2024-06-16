import PropTypes from 'prop-types';
import { Button, Form as BootstrapForm } from 'react-bootstrap';

export const Form = ({ addTask, setTask, task }) => {
  return (
    <BootstrapForm>
      <BootstrapForm.Group className="mb-3">
        <BootstrapForm.Label>Add task:</BootstrapForm.Label>
        <BootstrapForm.Control
          placeholder="Enter task name"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </BootstrapForm.Group>
      <Button onClick={() => addTask(task)}>Submit</Button>
    </BootstrapForm>
  );
};

Form.propTypes = {
  task: PropTypes.string.isRequired,
  addTask: PropTypes.func.isRequired,
  setTask: PropTypes.func.isRequired
};
