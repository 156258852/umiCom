// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' }
}
export const layout = () => {
  return {
    // logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    // logo: false,
    headerRender: () => {
      return <div>我来组成头部</div>
    },
    avatarProps: false,
    // collapsed: false,
    menu: {
      locale: false,
      // menuRender: false,
    },
  }
}
