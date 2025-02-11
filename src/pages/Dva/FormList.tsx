import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { useDynamicList } from 'ahooks'
import { Input } from 'antd'
import { isEqual } from 'lodash-es'
import { useEffect, useRef } from 'react'
const DynamicInputs = ({
  value = [],
  onChange,
  paramsScene,
}: {
  value?: object[]
  onChange?: (value: object[]) => void
  paramsScene?: string
}) => {
  const { list, remove, getKey, insert, replace, resetList } =
    useDynamicList(value)
  const onceRef = useRef(true)

  console.log('list', list)

  useEffect(() => {
    // If value change manual, reset list
    if (isEqual(value, list)) return
    resetList(value)
  }, [value])
  useEffect(() => {
    if (onceRef.current) {
      onceRef.current = false
      return
    }
    console.log('不执行————————————————————————————')
    onChange?.(list)
  }, [list])

  const Row = (index: number, item: any) => (
    <div key={getKey(index)} style={{ marginBottom: 16 }}>
      <Input
        style={{ width: 300 }}
        placeholder="Please enter name"
        onChange={(e) => replace(index, { ...item, ipt1: e.target.value })}
        value={item?.ipt1}
      />
      <Input
        style={{ width: 300 }}
        placeholder="Please enter name"
        onChange={(e) => replace(index, { ...item, ipt2: e.target.value })}
        value={item?.ipt2}
      />
      {list.length > 1 && (
        <MinusCircleOutlined
          style={{ marginLeft: 8 }}
          onClick={() => {
            remove(index)
          }}
        />
      )}
      <PlusCircleOutlined
        style={{ marginLeft: 8 }}
        onClick={() => {
          insert(index + 1, {})
        }}
      />
    </div>
  )

  return <>{list.map((ele, index) => Row(index, ele))}</>
}

export default DynamicInputs
