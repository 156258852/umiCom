import { useRequest } from 'ahooks';
import { Button, Form, Input, InputNumber } from 'antd';
import { forwardRef, useEffect, useImperativeHandle } from 'react';
function StepOne({ info, current, setInfo }, ref) {
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue(info);
  }, [info]);
  useImperativeHandle(ref, () => ({
    form,
  }));

  const StatusEnum = {
    age: {
      show: () => {
        return form.getFieldValue('age') > 18;
      },
      ...(true && {
        disabled: true,
      }),
    },
  };

  const service = async (values) => {
    console.log('values', values);
    return values;
  };

  const { run, runAsync, params } = useRequest(service, {
    // manual: true,
    defaultParams: [
      {
        name33: 'name',
        age22: 18,
      },
    ],
  });

  const submit = async () => {
    const values = await form.validateFields();
    await runAsync({
      ...params[0],
      ...values,
    });
  };

  return (
    <Form form={form} onValuesChange={async (v, all) => {}}>
      <Form.Item
        label="Name"
        name={['name']}
        required
        rules={[{ required: true, message: '请输入姓名' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="age" name={'age'}>
        <InputNumber />
      </Form.Item>
      <Form.Item>
        <Button onClick={submit}>提交</Button>
      </Form.Item>
    </Form>
  );
}

export default forwardRef(StepOne);
