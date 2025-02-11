import { Button, Drawer, DrawerProps } from 'antd';
import React, { useState } from 'react';

interface IProps {
  onClose: () => void;
  open: boolean;
  container: DrawerProps['getContainer'];
}
const App: React.FC<IProps> = ({ onClose, open, container }) => {
  const [count, setCount] = useState(0);
  return (
    <Drawer
      title="Basic Drawer"
      onClose={onClose}
      open={open}
      footer={<Button>飒飒</Button>}
      getContainer={container}
    >
      count: {count}
      <Button onClick={() => setCount(count + 1)}>加一</Button>
    </Drawer>
  );
};

export default App;
