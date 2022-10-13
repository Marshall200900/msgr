import React from 'react';
import { Badge } from 'react-bootstrap';

import './MsgItem.css';

export const MsgItem: React.FC<{children: React.ReactNode, isRight?: boolean}> = React.memo(({ children, isRight }) => {
    return (
        <div className={`MsgItem ${isRight ? 'MsgItem__right' : ''}`}>
            <Badge className="MsgItem__Msg" pill bg="primary">{children}</Badge>
        </div>
    )
});