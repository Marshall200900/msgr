import React, { useCallback, useEffect, useRef } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';

export const MsgInput: React.FC<{ addMessage: (msg: string) => void }> = React.memo(({ addMessage }) => {
    const ref = useRef<HTMLInputElement>(null);

    const sendMessage = useCallback(() => {
        if (ref.current && ref.current.value !== '') {
            addMessage(ref.current.value);
            ref.current.value = '';
        }
    }, []);

    const handleEnter = (evt: React.KeyboardEvent) => {
        if (evt.key === 'Enter') {
            sendMessage();
        }
    }

    return (
        <InputGroup className="mb-3 msgr__input">
          <Form.Control
            ref={ref}
            onKeyDown={handleEnter}
            placeholder="Type message here"
          />
          <Button onClick={sendMessage} variant="primary">
            Send
          </Button>
        </InputGroup>
    )
});