import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "../../apis/dummyApi"

export const fetchUsers = createAsyncThunk("Users/fetchUsers",
async()=>{
       const data = await userApi.get('/users')

       return data.data
}
)



const initialState = {
    userData: null
  };


  const usersSlice = createSlice({
      name:'Users',
      initialState,
      reducers:{
          deleteUser:(state, {payload})=>{
            state.userData = payload
          },
          updateUser:(state, {payload})=>{
            state.userData = payload
          }
      },
      extraReducers:{
          [fetchUsers.fulfilled]:(state,{payload})=>{
              return{
                  ...state,
                  userData: payload
              }
          },
      }
  })

  export const {deleteUser,updateUser} = usersSlice.actions
  export const userInfo = (state)=> state.users.userData
  export default usersSlice.reducer