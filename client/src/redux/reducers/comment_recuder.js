import {SAVE_COMMENT_LIST} from '../action_types'

//初始化title数据
let initState = []

export default function test(preState=initState,action) {
  const {type,data} = action
  let newState
  switch (type) {
    case SAVE_COMMENT_LIST: 
      newState = [...data]
      return newState
    default:
      return preState
  }
}