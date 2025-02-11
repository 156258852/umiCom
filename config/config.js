import { defineConfig } from '@umijs/max'
import routes from './route'
export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  routes,
  title: '测试umiMax',
  layout: {},
  dva: {
    hmr: true,
  },
  devtool: 'eval-source-map',
  npmClient: 'yarn',
})
