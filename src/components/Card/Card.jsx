import PropTypes from 'prop-types';
import { Button, Card as BootstrapCard, CardText, Stack } from 'react-bootstrap';

export const Card = ({ id, text, completed, deleteTask, completeTask }) => {
  return (
    <BootstrapCard>
      <Stack>
        <BootstrapCard.Body className="d-flex align-items-center justify-content-between">
          <CardText className={completed && 'text-decoration-line-through'}>{text}</CardText>
          <Stack className="gap-3" direction="horizontal">
            <Button variant="danger" onClick={() => deleteTask(id)}>
              Delete
            </Button>
            {!completed && (
              <Button variant="primary" onClick={() => completeTask(id)}>
                Complete
              </Button>
            )}
          </Stack>
        </BootstrapCard.Body>
      </Stack>
    </BootstrapCard>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  deleteTask: PropTypes.func.isRequired,
  completeTask: PropTypes.func.isRequired
};
