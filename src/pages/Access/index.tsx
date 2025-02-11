import { useRequest } from '@/lib'
import { Button } from 'antd'
import { useEffect, useRef } from 'react'

// 定义 Service 函数的参数和返回类型
interface ServiceData {
  data: { id: number; name: string }[]
  success: boolean
  currentPage: number
  pageSize: number
}

const data = Array(120)
  .fill('')
  .map((_, index) => ({
    id: index,
    name: `name${index}`,
  }))

const Service = async (params: {
  pageSize: number
  current: number
}): Promise<ServiceData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('params.current', params.current)
      resolve({
        data: data.slice(
          (params.current - 1) * params.pageSize,
          params.current * params.pageSize,
        ),
        currentPage: params.current,
        pageSize: params.pageSize,
        success: true,
      })
    }, 1000)
  })
}

const useGetList = () => {
  const { data, pagination, refresh } = useRequest(Service, {
    defaultParams: {
      pageSize: 10,
      current: 1,
    },
    paginated: true,
  })
  const [list, setList] = useState([])
  useEffect(() => {
    setList(data)
  }, [data])
  const clearList = () => {
    setList([])
  }
  return {
    list,
    pagination,
    refresh,
    clearList,
  }
}

const AccessPage: React.FC = () => {
  const count = useRef(1)

  // 使用泛型指定 Service 函数的返回类型
  const { data, pagination, refresh } = useRequest(Service, {
    defaultParams: {
      pageSize: 10,
      current: 1,
    },
    paginated: true,
  })

  // console.log('pagination', pagination)
  console.log('data', data)

  useEffect(() => {
    const intervalId = setInterval(() => {
      refresh()
    }, 4000)
    return () => clearInterval(intervalId) // 清除定时器以避免内存泄漏
  }, [refresh])

  return (
    <div>
      <Button
        onClick={() => {
          count.current++
          refresh({
            current: count.current,
          })
        }}
      >
        测试
      </Button>
    </div>
  )
}

export default AccessPage
