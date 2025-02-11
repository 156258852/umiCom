import { history } from '@umijs/max'
import { useSessionStorageState } from 'ahooks'
import { Button, Form, Input, Select, Space } from 'antd'
import React, { FC, useEffect } from 'react'
import DynamicInputs from './FormList'

const App: FC = function (props) {
  const [formNode] = Form.useForm()
  console.log('App', '----------------------')

  React.useEffect(() => {
    const wxobj = {}
    window.location.href.replace(
      /([^?&=]+)=([^&]+)/g,
      (_, k, v) => (wxobj[k] = v),
    )
    console.log('wxobj', wxobj)
    formNode.setFieldValue('name', wxobj.phone)
  }, [])

  const [tempScene, setTempScene] = useSessionStorageState('scene_key', {
    deserializer(value) {
      return JSON.parse(value)
    },
  })

  useEffect(() => {
    formNode.setFieldValue('scene', tempScene)
    setTempScene()
  }, [])

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      // 在这里可以执行一些清理工作
      console.log('页面即将刷新或关闭')

      setTempScene(formNode.getFieldValue('scene'))
    }

    window.addEventListener('beforeunload', handleBeforeUnload)

    // 清理事件监听器
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [])

  useEffect(() => {
    console.log('history.location.pathname', history.location.pathname)
  }, [history.location.pathname])

  return (
    <div className="app-container">
      <Form form={formNode}>
        <Form.Item name="name" label="测试">
          <Input placeholder="请输入用户姓名" allowClear />
        </Form.Item>
        <Form.Item name="scene" label="场景">
          <Select
            allowClear
            onChange={(val) => {
              console.log('🚀 ~ val:', val)
              return {}
            }}
            options={[
              {
                label: 'AIGC场景',
                value: 'aigc_key',
              },
              { label: '通用场景', value: 'common_key' },
            ]}
          />
        </Form.Item>
        <Form.Item name="tt" label="tt" initialValue={[{}]}>
          <DynamicInputs
            onChange={(v) => {
              console.log('v', v)
            }}
          />
        </Form.Item>
      </Form>
      <Space>
        <Button
          onClick={() => {
            const data = formNode.getFieldsValue()
            console.log('data', data)
          }}
        >
          确定
        </Button>
        <Button
          onClick={() => {
            // formNode.resetFields()
            formNode.setFieldsValue({
              tt: [{}],
              scene: 'aigc_key',
            })
          }}
        >
          重置
        </Button>
        <Button
          onClick={() => {
            history.push('/Json')
            setTempScene(formNode.getFieldValue('scene'))
          }}
        >
          跳转
        </Button>
      </Space>
    </div>
  )
}

export default App
