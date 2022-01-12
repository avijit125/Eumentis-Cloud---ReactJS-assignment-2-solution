import React, {useEffect} from 'react'
import 'antd/dist/antd.min.css';
import Cards from '../components/Cards'
import {useDispatch , useSelector} from "react-redux"
import { deleteUser, fetchUsers, updateUser, userInfo } from '../features/users/usersSlice'

import { Row, Col} from 'antd';
import { SyncOutlined } from '@ant-design/icons';


const Home = () => {
    const dispatch = useDispatch()
    let users = useSelector(userInfo)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    if(users === null){
        return(<SyncOutlined/>)
    }

    const filterUser = (id)=>{
       const filteredUsers = users.filter((item)=>item.id !== id)

       dispatch(deleteUser(filteredUsers))
    }

    const updatedUser = ({id,name, email,phone,website})=>{
        const objIndex = users.findIndex(obj => obj.id === id);
        const updatedObj = { ...users[objIndex],id,name, email,phone,website};
        const updatedUser = [
            ...users.slice(0, objIndex),
  updatedObj,
  ...users.slice(objIndex + 1)
        ]
        //console.log(updatedUser)
        dispatch(updateUser(updatedUser))
    }

    const updatedUserLike = ({id,isLike})=>{
        const objIndex = users.findIndex(obj => obj.id === id);
        if(isLike === false){
            isLike = true
        }else{
            isLike = false
        }
        const updatedObj = { ...users[objIndex], islike:isLike};
        console.log(updatedObj)
        const updatedUser = [
            ...users.slice(0, objIndex),
  updatedObj,
  ...users.slice(objIndex + 1)
        ]
        //console.log(updatedUser) style={{marginTop:"1.6rem"}} span={6}
        dispatch(updateUser(updatedUser))
    }


    return (
        <>
        <Row >
            {users && users.map((item , index)=>(
                <Col xs={24} sm={12} md={12} lg={8} xl={6} style={{marginTop:"1.6rem",padding:"2.8rem"}} >
                    <Cards key={item.id} name={item.name} email={item.email} id={item.id} username={item.username} phone={item.phone} website={item.website} filterUser={filterUser} updatedUser={updatedUser} updatedUserLike={updatedUserLike} isLike={item?.islike}  />  
                </Col>
            ))}
      </Row>
        </>
     
    )
}

export default Home
