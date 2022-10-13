import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';
import { MsgInput } from './MsgInput/MsgInput';
import { MsgItem } from './MsgItem/MsgItem';

export const App = () => {
  const ref = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<string[]>([]);

  const addMessage = useCallback((msg: string) => {
    setMessages(msgs => {
      return [...msgs, msg];
    });
  }, []);
  useEffect(() => {
    if (ref.current?.style && messages.length !== 0 && 
      ref.current?.clientHeight < (ref.current.parentElement?.clientHeight || 0)) {
      const w = parseInt(ref.current.style.height || '0');
      const msgs = document.getElementsByClassName('MsgItem__Msg');
      ref.current.style.height = `${w + msgs[msgs.length - 1].clientHeight + 5}px`;
    }
    if(ref.current && parseInt(ref.current.style.height) >= (ref.current.parentElement?.clientHeight|| 0) - 20) {
      ref.current.scroll({
        top: ref.current.scrollHeight,
        behavior: 'smooth',
      })
    }
  }, [messages]);
  return (
    <div className="app">
      <div className="msgr">
        <div className="msgr__messages">
          <div ref={ref} className="msgr__poll">
            {messages.map((msg, i) => <MsgItem key={i} isRight>{msg}</MsgItem>)}
          </div>
        </div>
          <MsgInput addMessage={addMessage} />
      </div>
    </div>
  );
}
