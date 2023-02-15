import { Stack } from '@chakra-ui/react'
import React from 'react'
import './message.css'
const Message = ({ message, user, classs }) => {
    if (user) {
        return <div className={`messagebox ${classs}`}>{`${user}: ${message}`}</div>;
        
    } else {
        return (
          <div className={`messagebox ${classs}`}>{`You: ${message}`}</div>
        );
    }
  
}

export default Message
