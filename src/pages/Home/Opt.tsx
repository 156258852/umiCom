//@ts-nocheck
import { removeCache, setCache } from '@/utils/cacheData'
import { RightOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import classNames from 'classnames'
import React, { useEffect, useRef, useState } from 'react'
import Drawer from './Drawer'
import './index.less'
const App: React.FC = ({ className, btnProps, btnAfter, btnBefore }) => {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLSpanElement>()

  const showDrawer = () => {
    setOpen(true)
  }

  useEffect(() => {
    setCache('drawer', (val) => {
      setOpen(val)
    })
    return () => {
      removeCache('drawer')
    }
  }, [])

  const onClose = () => {
    setOpen(false)
  }

  return (
    <span ref={ref} className={classNames('flex-container', className)}>
      {btnBefore}
      <Button type="primary" onClick={showDrawer} icon={<RightOutlined />}>
        {btnProps?.text || 'Open'}
      </Button>
      {btnAfter}
      {open && <Drawer open={open} onClose={onClose} container={ref.current} />}
    </span>
  )
}

export default App
