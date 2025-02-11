import { Form, Select } from 'antd';
import { forwardRef, useEffect, useImperativeHandle } from 'react';
function StepTwo({ info, current, setInfo }, ref) {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(info);
  }, [info]);

  useImperativeHandle(ref, () => ({
    form,
  }));
  return (
    <Form form={form}>
      <Form.Item label="年级" name={'grade'}>
        <Select
          options={[
            { value: '1', label: '一年级' },
            { value: '2', label: '二年级' },
            { value: '3', label: '三年级' },
          ]}
        />
      </Form.Item>
    </Form>
  );
}

export default forwardRef(StepTwo);
