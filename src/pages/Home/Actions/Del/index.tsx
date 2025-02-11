import { RightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React, { useRef, useState } from 'react';
import Drawer from '../../Drawer';
const App: React.FC = ({}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLSpanElement>();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <span>
      <Button type="primary" onClick={showDrawer} icon={<RightOutlined />}>
        close
      </Button>
      {open && <Drawer open={open} onClose={onClose} container={ref.current} />}
    </span>
  );
};

export default App;
