import { Select } from 'antd'
import Step from '../step'
function Index() {
  return (
    <div>
      <Select
        // virtual={false}
        style={{ width: 200 }}
        options={Array(10000)
          .fill('')
          .map((_, i) => {
            return { label: i, value: i }
          })}
      />
      <Step />
    </div>
  )
}

export default Index
