import { Button, Form, Input, Select } from 'antd'
import { useState } from 'react'
const { Option } = Select
const PriceInput = (props) => {
  const { id, value = {}, onChange } = props
  const [number, setNumber] = useState(0)
  const [currency, setCurrency] = useState('rmb')
  const triggerChange = (changedValue) => {
    onChange?.({
      number,
      currency,
      ...value,
      ...changedValue,
    })
  }
  const onNumberChange = (e) => {
    const newNumber = parseInt(e.target.value || '0', 10)
    if (Number.isNaN(number)) {
      return
    }
    if (!('number' in value)) {
      setNumber(newNumber)
    }
    triggerChange({
      number: newNumber,
    })
  }
  const onCurrencyChange = (newCurrency) => {
    if (!('currency' in value)) {
      setCurrency(newCurrency)
    }
    triggerChange({
      currency: newCurrency,
    })
  }
  return (
    <span id={id}>
      <Input
        type="text"
        value={value.number || number}
        onChange={onNumberChange}
        style={{
          width: 100,
        }}
      />
      <Select
        value={value.currency || currency}
        style={{
          width: 80,
          margin: '0 8px',
        }}
        onChange={onCurrencyChange}
      >
        <Option value="rmb">RMB</Option>
        <Option value="dollar">Dollar</Option>
      </Select>
    </span>
  )
}
const App = () => {
  const onFinish = (values) => {
    console.log('Received values from form: ', values)
  }
  const checkPrice = (_, value) => {
    if (value.number > 0) {
      return Promise.resolve()
    }
    return Promise.reject(new Error('Price must be greater than zero!'))
  }
  const [form] = Form.useForm()
  return (
    <Form
      name="customized_form_controls"
      layout="inline"
      onFinish={onFinish}
      form={form}
      initialValues={{
        price: {
          // number: 50,
          currency: 'rmb',
        },
      }}
    >
      <Form.Item
        name="price"
        label="Price"
        rules={[
          {
            validator: checkPrice,
          },
        ]}
      >
        <PriceInput />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button
          type="default"
          onClick={() => {
            form.setFieldValue('price', {
              number: 100,
              currency: 'dollar',
            })
          }}
        >
          测试
        </Button>
      </Form.Item>
    </Form>
  )
}
export default App
