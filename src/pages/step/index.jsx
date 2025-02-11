import { Button, Steps } from 'antd';
import { useRef, useState } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import './index.less';

const App = () => {
  const [current, setCurrent] = useState(0);
  const [formData, setFormData] = useState({});
  const oneRef = useRef(null);
  const twoRef = useRef(null);

  const steps = [
    {
      title: 'First',
      content: (
        <StepOne
          currentStep={'First'}
          info={formData[current]}
          setInfo={setFormData}
          current={current}
          ref={oneRef}
        />
      ),
    },
    {
      title: 'Second',
      content: (
        <StepTwo
          currentStep={'Second'}
          info={formData[current]}
          current={current}
          setInfo={setFormData}
          ref={twoRef}
        />
      ),
    },
  ];

  const refMap = {
    0: oneRef,
    1: twoRef,
  };

  const next = async () => {
    const { validateFields } = refMap[current]?.current?.form;
    const values = await validateFields();
    // console.log('values', values);
    setFormData({
      ...formData,
      [current]: values,
    });

    setCurrent(current + 1);
  };
  const prev = () => {
    const { getFieldsValue } = refMap[current]?.current?.form;
    const v = getFieldsValue();
    setFormData({
      ...formData,
      [current]: v,
    });
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const submit = () => {
    const { getFieldsValue } = refMap[current]?.current?.form;
    const params = { ...formData[0], ...formData[1], ...getFieldsValue() };
    console.log('params', params);
  };

  return (
    <>
      <Steps current={current} items={items} />
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button onClick={() => next()} type="primary">
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => submit()}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: '0 8px',
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
    </>
  );
};
export default App;
