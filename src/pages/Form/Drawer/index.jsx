import { Form, Modal } from 'antd'
import React from 'react'
function Drawer({
  visible,
  onClose,
  onComplete,
  infoContent,
  formRender,
  initFormValues = {},
  ...props
}) {
  const [form] = Form.useForm()
  const [confirmLoading, setConfirmLoading] = React.useState(false)
  const onOK = async () => {
    const values = await form.validateFields()
    onComplete?.({
      values,
      setConfirmLoading,
    })
  }

  React.useEffect(() => {
    if (Object.keys(initFormValues).length) {
      form.setFieldsValue(initFormValues)
    }
  }, [initFormValues])

  return (
    <Modal
      {...props}
      confirmLoading={confirmLoading}
      open={visible}
      onClose={onClose}
      destroyOnClose
      onCancel={onClose}
      onOk={onOK}
    >
      {infoContent}
      <Form form={form}>{formRender?.({ formField: form })}</Form>
    </Modal>
  )
}

export default Drawer
