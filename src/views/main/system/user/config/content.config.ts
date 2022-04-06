export const contentTableConfig = {
  // 传入表格信息
  propList: [
    { prop: 'name', label: '用户名', minWidth: '90' },
    { prop: 'realname', label: '真实姓名', minWidth: '90' },
    { prop: 'cellphone', label: '手机号码', minWidth: '120' },
    { prop: 'enable', label: '状态', minWidth: '70', slotName: 'status' },
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
