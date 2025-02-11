import Flex from '@/components/Flex';
import { Checkbox } from 'antd';
import { useEffect, useState } from 'react';

window.addEventListener('beforeunload', () => {
  sessionStorage.removeItem('list');
});

const App = () => {
  const data = [
    { label: 'Option 2', value: 'base_64' },
    { label: 'Option 1', value: 'base' },
    { label: 'Option 3', value: '3' },
  ];

  const data2 = [
    { label: 'Option 2-1', value: '4' },
    { label: 'Option 2-2', value: '5' },
    { label: 'Option 2-3', value: '6' },
  ];

  const data3 = [
    { label: 'Option 3-1', value: '3-4' },
    { label: 'Option 3-2', value: '3-5' },
    { label: 'Option 3-3', value: '3-6' },
  ];
  const data4 = [
    { label: 'Option 4-1', value: '4-4' },
    { label: 'Option 4-2', value: '4-5' },
    { label: 'Option 4-3', value: '4-6' },
  ];

  const obj = {
    data,
    data2,
    data3,
    data4,
  };

  const [checkedList, setCheckedList] = useState(['base_64']);
  let d: any;
  try {
    d = JSON.parse(sessionStorage.getItem('list') || '') || {};
  } catch (error) {
    console.error('Failed to parse session storage item "list"', error);
    // 在这里可以设置一个默认值或进行其他错误处理
  }

  // const shouldDisableItem = (value, dataSource) => {
  //   const relevantChecks = checkedList.filter((v) => dataSource.includes(v));
  //   console.log('relevantChecks', relevantChecks);
  //   return relevantChecks.length > 0 && !relevantChecks.includes(value);
  // };

  useEffect(() => {
    console.log('d开始', d);
    sessionStorage.removeItem('list');
    const _d = JSON.parse(sessionStorage.getItem('list') || '{}');
    console.log('d结束', _d);
  }, []);

  return (
    <>
      <Flex algin-center just>飒飒</Flex>
      <pre>
        <code>{JSON.stringify(d)}</code>
      </pre>
      <Checkbox.Group
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
        value={checkedList}
        onChange={(value) => {
          setCheckedList(value);
        }}
      >
        {Object.entries(obj).map(([key, currentDataSource], index) => {
          return (
            <div key={key}>
              <p>
                基线{index + 1}: {key}
              </p>
              {currentDataSource.map((item) => (
                <Checkbox key={item.value} value={item.value}>
                  {item.label}
                </Checkbox>
              ))}
            </div>
          );
        })}
        {/* {data.map((item) => (
        <Checkbox
          key={item.value}
          value={item.value}
          disabled={shouldDisableItem(
            item.value,
            data.map((d) => d.value),
          )}
        >
          {item.label}
        </Checkbox>
      ))}
      {data2.map((item) => (
        <Checkbox
          key={item.value}
          value={item.value}
          disabled={shouldDisableItem(
            item.value,
            data2.map((d) => d.value),
          )}
        >
          {item.label}
        </Checkbox>
      ))} */}
      </Checkbox.Group>
    </>
  );
};

export default App;
