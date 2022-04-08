export const contentTableConfig = {
  // 传入表格信息
  propList: [
    { prop: 'name', label: '商品名称', minWidth: '90' },
    {
      prop: 'oldPrice',
      label: '原价格',
      minWidth: '80',
      slotName: 'oldPrice'
    },
    {
      prop: 'newPrice',
      label: '现价格',
      minWidth: '80',
      slotName: 'newPrice'
    },
    {
      prop: 'imgUrl',
      label: '商品图片',
      minWidth: '100',
      slotName: 'image'
    },
    {
      prop: 'status',
      label: '状态',
      minWidth: '80',
      slotName: 'status'
    },
    { prop: 'address', label: '商品地址', minWidth: '80' },
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
    { label: '操作', minWidth: '150', slotName: 'handle' }
  ],

  // table 标题
  title: '商品列表',

  //  判断是否展示列序号
  showIndexColumn: true,
  showSelectColumn: true
}
