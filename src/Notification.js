import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';

const Notification = (props) => {
  const [showAlert, setShowAlert] = useState(!!props.status);

  return (
    <div>
      {showAlert && (
        <Alert
          variant={props.status === 'success' ? 'success' : 'danger'}
          onClose={() => {
            setShowAlert(false);
          }}
          dismissible
        >
          <Alert.Heading>{props.title}</Alert.Heading>
          <p className="m-2">Response: {props.status}.</p>
          <p className="m-2">Message: {props.message}!</p>
        </Alert>
      )}
    </div>
  );
};

export default Notification;
