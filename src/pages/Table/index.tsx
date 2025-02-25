import services from '@/services/demo'
import {
  ActionType,
  FooterToolbar,
  PageContainer,
  ProDescriptionsItemProps,
  ProTable,
} from '@ant-design/pro-components'
import { Button, Divider, Form, Input, message, Select } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import { FormValueType } from './components/UpdateForm'
import './indes.less'

const options = [
  { text: '男', status: 'MALE' },
  { text: '女', status: 'FEMALE' },
]

const { addUser, queryUserList, deleteUser, modifyUser } =
  services.UserController

/**
 * 添加节点
 * @param fields
 */
const handleAdd = async (fields: API.UserInfo) => {
  const hide = message.loading('正在添加')
  try {
    await addUser({ ...fields })
    hide()
    message.success('添加成功')
    return true
  } catch (error) {
    hide()
    message.error('添加失败请重试！')
    return false
  }
}

/**
 * 更新节点
 * @param fields
 */
const handleUpdate = async (fields: FormValueType) => {
  const hide = message.loading('正在配置')
  try {
    await modifyUser(
      {
        userId: fields.id || '',
      },
      {
        name: fields.name || '',
        nickName: fields.nickName || '',
        email: fields.email || '',
      },
    )
    hide()

    message.success('配置成功')
    return true
  } catch (error) {
    hide()
    message.error('配置失败请重试！')
    return false
  }
}

/**
 *  删除节点
 * @param selectedRows
 */
const handleRemove = async (selectedRows: API.UserInfo[]) => {
  const hide = message.loading('正在删除')
  if (!selectedRows) return true
  try {
    await deleteUser({
      userId: selectedRows.find((row) => row.id)?.id || '',
    })
    hide()
    message.success('删除成功，即将刷新')
    return true
  } catch (error) {
    hide()
    message.error('删除失败，请重试')
    return false
  }
}

const TableList: React.FC<unknown> = () => {
  const [createModalVisible, handleModalVisible] = useState<boolean>(false)
  const [updateModalVisible, handleUpdateModalVisible] =
    useState<boolean>(false)
  const [stepFormValues, setStepFormValues] = useState({})
  const actionRef = useRef<ActionType>()
  const [row, setRow] = useState<API.UserInfo>()
  const [selectedRowsState, setSelectedRows] = useState<API.UserInfo[]>([])
  const [formRef] = Form.useForm()
  const [list, setList] = useState<API.UserInfo[]>([])
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const columns: ProDescriptionsItemProps<API.UserInfo>[] = [
    {
      title: '名称',
      dataIndex: 'name',
      render: (val) => {
        console.log(val)
      },
    },
    {
      title: '昵称',
      dataIndex: 'nickName',
      valueType: 'text',
    },
    {
      title: '性别',
      dataIndex: 'gender',
      hideInForm: true,
      type: 'select',
      render(val) {
        return options.find((item) => item.status === val)?.text
      },
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_: any, record: any, index: number) => (
        <>
          <a
            onClick={() => {
              handleUpdateModalVisible(true)
              setStepFormValues(record)
            }}
          >
            配置
          </a>
          <Divider type="vertical" />
          <a href="">订阅警报</a>
        </>
      ),
    },
  ].map((item) => {
    if (item.dataIndex === 'option') return item
    return {
      ...item,
      ...(isEdit && {
        render(text, record, index) {
          return (
            <>
              <Form.Item
                name={['table', index, item.dataIndex]}
                required
                rules={[{ required: true, message: '请输入' }]}
              >
                {item.type === 'select' ? (
                  <Select
                    options={options}
                    fieldNames={{ label: 'text', value: 'status' }}
                  />
                ) : (
                  <Input />
                )}
              </Form.Item>
            </>
          )
        },
      }),
    }
  })

  const request = async (params: any) => {
    const { data, success } = await queryUserList({
      ...params,
    })
    setList(data?.list || [])
    return {
      data: data?.list || [],
      success,
    }
  }

  useEffect(() => {
    request({})
  }, [])

  const onEdit = () => {
    setIsEdit(true)
    formRef.setFieldsValue({
      table: list,
    })
  }

  return (
    <PageContainer
      header={{
        title: 'CRUD 示例',
      }}
    >
      {!isEdit ? (
        <Button type="primary" onClick={onEdit}>
          编辑
        </Button>
      ) : (
        <Button
          type="primary"
          onClick={async () => {
            const values = await formRef.validateFields()
            setList(values.table)
            setIsEdit(false)
          }}
        >
          保存
        </Button>
      )}

      <Form form={formRef}>
        <ProTable<API.UserInfo>
          headerTitle="查询表格"
          actionRef={actionRef}
          rowKey="id"
          data-formItem={false}
          search={{
            labelWidth: 120,
          }}
          dataSource={list}
          toolBarRender={() => [
            <Button
              className="margin-right-8"
              key="1"
              type="primary"
              onClick={() => handleModalVisible(true)}
            >
              新建
            </Button>,
          ]}
          // @ts-ignore
          columns={columns}
          rowSelection={{
            onChange: (_, selectedRows) => setSelectedRows(selectedRows),
          }}
        />
        {selectedRowsState?.length > 0 && (
          <FooterToolbar
            extra={
              <div>
                已选择{' '}
                <a style={{ fontWeight: 600 }}>{selectedRowsState.length}</a>{' '}
                项&nbsp;&nbsp;
              </div>
            }
          >
            <Button
              onClick={async () => {
                await handleRemove(selectedRowsState)
                setSelectedRows([])
                actionRef.current?.reloadAndRest?.()
              }}
            >
              批量删除
            </Button>
            <Button type="primary">批量审批</Button>
          </FooterToolbar>
        )}
      </Form>
    </PageContainer>
  )
}

export default TableList
