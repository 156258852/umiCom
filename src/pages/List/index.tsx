import { CloseOutlined } from '@ant-design/icons';
import { Button, Card, Form, Input, Select, Space } from 'antd';

const App = () => {
  const [form] = Form.useForm();

  const selectOptions = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ];

  function hasDuplicates(array: any) {
    const set = new Set();
    for (const item of array) {
      const key = JSON.stringify(item);
      if (set.has(key)) {
        return true;
      }
      set.add(key);
    }
    return false;
  }

  return (
    <Form
      disabled
      labelCol={{
        span: 6,
      }}
      wrapperCol={{
        span: 18,
      }}
      form={form}
      name="dynamic_form_complex"
      style={{
        maxWidth: 600,
      }}
      autoComplete="off"
      initialValues={{
        items: [
          { list: [{ first: '2', second: 'aaaaa', id: '2' }], name: '狗团' },
          {},
        ],
      }}
    >
      <Form.List name="items">
        {(fields, { add, remove }) => (
          <div
            style={{
              display: 'flex',
              rowGap: 16,
              flexDirection: 'column',
            }}
          >
            {fields.map((field) => (
              <Card
                size="small"
                title={`意图 ${field.name + 1}`}
                key={field.key}
                extra={
                  <CloseOutlined
                    onClick={() => {
                      remove(field.name);
                    }}
                  />
                }
              >
                <Form.Item label="Name" name={'name'}>
                  <Input />
                </Form.Item>
                {(() => {
                  const is = true; // 假设 someCondition() 返回一个布尔值
                  if (is) {
                    return <div>22</div>;
                  }
                  return null;
                })()}

                {/* Nest Form.List */}
                <Form.Item label="List">
                  <Form.List
                    // initialValue={[{ first: '22', second: '狗团' }]}
                    name={[field.name, 'list']}
                    // initialValue={[{ first: '22', second: '狗团' }]}
                  >
                    {(subFields, subOpt) => (
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          rowGap: 16,
                        }}
                      >
                        {subFields.map((subField) => (
                          <Space key={subField.key}>
                            <Form.Item
                              noStyle
                              name={[subField.name, 'first']}
                              rules={[
                                {
                                  validator() {
                                    const currentValue = form.getFieldValue([
                                      'items',
                                      field.name,
                                      'list',
                                      // subField.name,
                                    ]);
                                    const isSame = hasDuplicates(currentValue);
                                    if (isSame) {
                                      // message.error(
                                      //   '已经选择了相同的值，请重新选择',
                                      // );
                                      form.setFieldValue(
                                        [
                                          'items',
                                          field.name,
                                          'list',
                                          subField.name,
                                          'first',
                                        ],
                                        '',
                                      );

                                      return Promise.reject(
                                        '已经选择了相同的值，请重新选择',
                                      );
                                    }
                                    return Promise.resolve();
                                  },
                                },
                              ]}
                            >
                              <Select
                                placeholder="first"
                                style={{ width: 120 }}
                                options={selectOptions}
                                // onChange={async (v) => {
                                //   const currentValue = form.getFieldValue([
                                //     'items',
                                //     field.name,
                                //     'list',
                                //     // subField.name,
                                //   ]);
                                //   const isSame = hasDuplicates(currentValue);
                                //   if (isSame) {
                                //     message.error(
                                //       '已经选择了相同的值，请重新选择',
                                //     );
                                //     form.setFieldValue(
                                //       [
                                //         'items',
                                //         field.name,
                                //         'list',
                                //         subField.name,
                                //         'first',
                                //       ],
                                //       '',
                                //     );
                                //   }
                                // }}
                              />
                            </Form.Item>
                            <Form.Item noStyle name={[subField.name, 'second']}>
                              <Input placeholder="second" />
                            </Form.Item>
                            <CloseOutlined
                              onClick={() => {
                                subOpt.remove(subField.name);
                              }}
                            />
                          </Space>
                        ))}
                        <Button
                          type="dashed"
                          onClick={() => subOpt.add()}
                          block
                        >
                          新增参数
                        </Button>
                      </div>
                    )}
                  </Form.List>
                </Form.Item>
              </Card>
            ))}

            <Button type="dashed" onClick={() => add()} block>
              新增意图
            </Button>
          </div>
        )}
      </Form.List>

      {/* <Form.Item noStyle shouldUpdate>
        {() => (
          <Typography>
            <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>
          </Typography>
        )}
      </Form.Item> */}
      <Form.Item noStyle>
        <Button
          onClick={() => {
            const v = form.getFieldValue('items');

            console.log('v', v);
          }}
        >
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};
export default App;
