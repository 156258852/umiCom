import { PageContainer } from '@ant-design/pro-components'
import { Access, history, useAccess } from '@umijs/max'
import { Button } from 'antd'
import { useEffect, useState } from 'react'

const AccessPage: React.FC = () => {
  const access = useAccess()

  const [list, setList] = useState([
    { name: '张三', age: 18 },
    { name: '李四', age: 19 },
    { name: '王五', age: 20 },
  ])

  const replace = (index: number, item: any) => {
    setList((l) => {
      const temp = [...l]
      temp[index] = item
      return temp
    })
  }

  useEffect(() => {
    console.log(list)
  }, [list])

  return (
    <PageContainer
      ghost
      header={{
        title: '权限示例',
      }}
    >
      <Button
        onClick={() => {
          ;[0, 1, 2].forEach((item) => {
            replace(item, {
              child: item + 1,
            })
          })
        }}
      >
        测试
      </Button>

      <Access accessible={access.canSeeAdmin}>
        <Button>只有 Admin 可以看到这个按钮</Button>
      </Access>
      <Button
        onClick={() => {
          sessionStorage.setItem('scene_key', JSON.stringify('common_key'))
          history.push('/dva?form=overview')
        }}
      >
        跳转
      </Button>
    </PageContainer>
  )
}

export default AccessPage
