import { Modal } from 'antd'
import React, { forwardRef, useImperativeHandle } from 'react'

function BaseModal({ children, ...props }, ref) {
  const [isOpen, setIsOpen] = React.useState(false)
  const onClose = () => setIsOpen(false)

  useImperativeHandle(
    ref,
    () => {
      return {
        close: () => setIsOpen(false),
        open: async () => {
          setIsOpen(true)
        },
      }
    },
    [],
  )

  return (
    <Modal {...props} open={isOpen} onCancel={onClose} onClose={onClose}>
      {children}
    </Modal>
  )
}

export default forwardRef(BaseModal)
