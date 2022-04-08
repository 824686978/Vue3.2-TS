export const contentTableConfig = {
  // 传入表格信息
  propList: [
    { prop: 'name', label: '菜单名称', minWidth: '90' },
    { prop: 'type', label: '类型', minWidth: '90' },
    { prop: 'url', label: '菜单那url', minWidth: '100' },
    { prop: 'icon', label: '菜单icon', minWidth: '100' },
    { prop: 'permission', label: '按钮权限', minWidth: '100' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '200',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '200',
      slotName: 'updateAt'
    },
    { label: '操作', minWidth: '200', slotName: 'handle' }
  ],

  // table 标题
  title: '菜单列表',

  //  判断是否展示列序号
  showIndexColumn: false,
  showSelectColumn: false,
  // 针对菜单是否需要展开
  childrenProps: {
    rowKey: 'id',
    treeProp: {
      children: 'children'
    }
  },
  // 分页是否展示
  showFooter: false
}
