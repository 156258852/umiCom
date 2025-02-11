# README

#### 意图配置参数新增

| 参数 | 是否必填 | 默认值 |
| :--- | -------- | ------ |
| name |          |        |
|      |          |        |



```js
const queryData = [
  { name: 'name', required: true },
  { name: 'age', required: true },
  { name: 'sex', required: false,},
];

const 

剧本参数：queryData 。 编辑时候的参数  editData
当新增的时候   
意图参数的 name字段为
 => queryData中 required === true 的字段必须选中且不能被修改 ，此时没有默认值 ，不能修改是否必填，不能删除
 => queryData中 required !== true 的字段可以进行 是否必填修改 、 删除和添加默认值 
 
 当编辑的时候
 
 


 
 
 
```

有4个组件，一个是form的ui展示组件，一个是新增的容器组件，一个是编辑的容器组件，一个是查看的容器组件，编辑的时候某些form自动是被禁止的，查看的时候是只读的