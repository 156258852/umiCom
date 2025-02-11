import { Button, Input } from 'antd';
import { useEffect, useRef, useState } from 'react';

function App() {
  const inputRef = useRef(null);
  const [position, setPosition] = useState(-1);
  const [tags, setTags] = useState([]);
  const [value, setValue] = useState('');
  const updateCursorPosition = () => {
    if (inputRef.current && inputRef.current.input) {
      setPosition(inputRef.current.input.selectionStart);
    }
  };

  useEffect(() => {
    if (!inputRef.current) return;
    const handleKeyUp = () => {
      updateCursorPosition();
    };

    const handleClick = () => {
      updateCursorPosition();
    };

    inputRef.current?.input.addEventListener('keyup', handleKeyUp);
    inputRef.current?.input.addEventListener('click', handleClick);
    return () => {
      inputRef.current?.input.removeEventListener('keyup', handleKeyUp);
      inputRef.current?.input.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    const currentTags = tags?.find((item) => {
      return item.startPoint <= position && item.endPoint >= position;
    });
    console.log('currentTags', currentTags);
  }, [position]);

  return (
    <div>
      <Input
        ref={inputRef}
        value={value}
        onChange={(e) => {
          console.log('onChange', e.target.value);
          setValue(e.target.value);
          const hashtags = e.target.value.match(/#[\s\S]*?(?=#|$)/g) || [];
          let v = hashtags?.map((item) => {
            return {
              value: item.replace(/#/g, ''),
              startPoint: e.target.value.indexOf(item) + 1, //字符串的下标为0的时候，光标在输入框的开始位置+1
              endPoint: e.target.value.indexOf(item) + 1 + item.length,
            };
          });
          setTags(v);
        }}
      />
      <Button
        onClick={() => {
          setValue('-----------');
        }}
      >
        click
      </Button>
    </div>
  );
}

export default App;
