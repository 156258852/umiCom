import * as React from 'react'

import 'react-json-view-lite/dist/index.css'

import { Button } from 'antd'
import Home from '../Home'

const json = {
  a: 1,
  b: 'example',
}

const App = () => {
  return (
    <React.Fragment>
      <Button onClick={() => history.go(-1)}>返回</Button>
      {/* <JsonView
        data={json}
        shouldExpandNode={allExpanded}
        style={defaultStyles}
      />
      <JsonView data={json} shouldExpandNode={allExpanded} style={darkStyles} /> */}
      <Home />
    </React.Fragment>
  )
}

export default App
