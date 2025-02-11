// //@ts-nocheck

// import { getCache } from '@/utils/cacheData'
// import { Button, Table } from 'antd'
// import React from 'react'
// import { getColumns } from './getColumns'
// import './index.less'
// import Opt from './Opt'
// const App: React.FC = ({ className, btnProps, btnAfter, btnBefore }) => {
//   const [value, setValue] = React.useState('')

//   return (
//     <>
//       <Button
//         onClick={() => {
//           const open = getCache('drawer')
//           open?.(true)
//         }}
//       >
//         打开
//       </Button>
//       <Opt />
//       <Table columns={getColumns()} />
//     </>
//   )
// }

// export default App

import { PlusOutlined } from '@ant-design/icons'
import { Modal, Upload } from 'antd'
import { useState } from 'react'
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
const App = () => {
  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [previewTitle, setPreviewTitle] = useState('')
  const [fileList, setFileList] = useState([])
  console.log('fileList', fileList)
  const handleCancel = () => setPreviewOpen(false)
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj)
    }
    setPreviewImage(file.url || file.preview)
    setPreviewOpen(true)
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
    )
  }
  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList)
  }
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  )
  return (
    <>
      <Upload
        // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img
          alt="example"
          style={{
            width: '100%',
          }}
          src={previewImage}
        />
      </Modal>
    </>
  )
}
export default App
