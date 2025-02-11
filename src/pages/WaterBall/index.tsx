// import useDynamicList from '@/utils/useList'
// import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons'
// import { Button, Form, Input } from 'antd'
// import { useEffect, useState } from 'react'
// const DynamicInputs = ({
//   value = [],
//   onChange,
// }: {
//   value?: string[]
//   onChange?: (value: string[]) => void
// }) => {
//   // console.log('value', value)
//   const { list, remove, getKey, insert, replace, resetList } =
//     useDynamicList(value)

//   useEffect(() => {
//     // If value change manual, reset list
//     if (value !== list) {
//       resetList(value)
//     }
//   }, [value])

//   useEffect(() => {
//     onChange?.(list)

//   }, [list])

//   const renderList = ()=>{
//     let current = {}

//   }

//   const Row = (index: number, item: any) => (
//     <div key={getKey(index)} style={{ marginBottom: 16 }}>
//       <Input
//         style={{ width: 300 }}
//         placeholder="Please enter name"
//         onChange={(e) => replace(index, e.target.value)}
//         value={item}
//       />

//       {list.length > 1 && (
//         <MinusCircleOutlined
//           style={{ marginLeft: 8 }}
//           onClick={() => {
//             remove(index)
//           }}
//         />
//       )}
//       <PlusCircleOutlined
//         style={{ marginLeft: 8 }}
//         onClick={() => {
//           insert(index + 1, '')
//         }}
//       />
//     </div>
//   )

//   return <>{list.map((ele, index) => Row(index, ele))}</>
// }

// export default () => {
//   const [form] = Form.useForm()

//   const [result, setResult] = useState('')
//   useEffect(() => {
//     form.setFieldsValue({
//       names: ['a', 'b'],
//     })
//   }, [])
//   return (
//     <>
//       <Form form={form}>
//         <Form.Item name="names" initialValue={['a']}>
//           <DynamicInputs />
//         </Form.Item>
//       </Form>
//       <Button
//         type="primary"
//         onClick={() =>
//           form
//             .validateFields()
//             .then((val) => {
//               setResult(JSON.stringify(val.names))
//             })
//             .catch(() => {})
//         }
//       >
//         Submit
//       </Button>
//       <Button
//         style={{ marginLeft: 16 }}
//         onClick={() => {
//           form.resetFields()
//         }}
//       >
//         Reset
//       </Button>

//       <p>{result}</p>
//     </>
//   )
// }
import { Button, Form, Input, Select } from 'antd'
import { useEffect } from 'react'
const { Option } = Select
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
}
const App = () => {
  const [form] = Form.useForm()
  const type = Form.useWatch('type', form)

  useEffect(() => {
    if (type === 'lin') {
      // 手动触发校验，并设置错误信息
      form.validateFields(['t']).catch((err) => {
        if (err && err.errorFields[0] && err.errorFields[0].errors) {
          form.setFields([
            {
              name: 't',
              errors: ['用户名必须包含数字和字母'],
            },
          ])
        }
      })
    } else {
      form.setFields([
        {
          name: 't',
          errors: undefined,
        },
      ])
    }
  }, [type, form])

  return (
    <Form
      form={form}
      {...formItemLayout}
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item label="Fail" name="type">
        <Input placeholder="unavailable choice" id="error" />
      </Form.Item>

      <Form.Item label="Fail" name="t">
        <Input.TextArea allowClear showCount />
      </Form.Item>
      <Button
        onClick={() => {
          form
            .validateFields()
            .then((res) => {
              console.log('res', res)
            })
            .catch((err) => {
              console.log('err', err)
            })
        }}
      >
        提交
      </Button>
    </Form>
  )
}

export default App
