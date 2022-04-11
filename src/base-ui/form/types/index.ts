type IFormType = 'input' | 'password' | 'select' | 'datepicker'

export interface IFormItem {
  // formData与input双向绑定
  field: string
  // 定义输入框类型
  type: IFormType
  // 输入框名字
  label: string
  // 定义输入框规则
  rules?: any[]
  // 定于输入框提示
  placeholder?: any
  // 定义 select的其他选择
  options?: any[]
  // 定义其他选择
  otherOptions?: any
  isHidden?: boolean
}

export interface IForm {
  // 定义传过来的输入框属性
  formItems: IFormItem[]
  // 定义输入框样试
  itemStyle: any
  // 定义长度
  labelWidth?: string
  colLayout?: any
  itemLayout?: any
}
