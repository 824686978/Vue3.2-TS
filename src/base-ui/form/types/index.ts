type IFormType = 'input' | 'password' | 'select' | 'datepicker'

export interface IFormItem {
  // formData
  field: string
  type: IFormType
  label: string
  rules?: any[]
  placeholder?: any
  options?: any[]
  otherOptions?: any
}

export interface IForm {
  formItems: IFormItem[]
  itemStyle: any
  labelWidth?: string
  colLayout?: any
  itemLayout?: any

}
