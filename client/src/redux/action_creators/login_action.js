import {SAVE_USER_INFO,DELETE_USER_INFO} from '../action_types'

//创建保存用户信息的action
export const createSaveUserInfoAction = (value)=> {
  //向localStorage中保存用户信息
  console.log(JSON.stringify(value.user.username),"value");
  localStorage.setItem('user',JSON.stringify(value.user.username))
  console.log(value)
  //向localStorage中保存token
  localStorage.setItem('token',value.token)
  return {type:SAVE_USER_INFO,data:value}
}
//创建删除用户信息的action
export const createDeleteUserInfoAction = ()=> {
  //从localStorage中删除用户信息
  localStorage.removeItem('user')
   //从localStorage中删除token
  localStorage.removeItem('token')
  return {type:DELETE_USER_INFO}
}
