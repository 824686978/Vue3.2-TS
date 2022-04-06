export const contentTableConfig = {
  // 传入表格信息
  propList: [
    { prop: 'name', label: '角色名', minWidth: '90' },
    { prop: 'intro', label: '权限介绍', minWidth: '90' },
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
  title: '用户列表',

  //  判断是否展示列序号
  showIndexColumn: true,
  showSelectColumn: true
}
