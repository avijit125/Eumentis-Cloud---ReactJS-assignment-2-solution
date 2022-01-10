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

    const updatedUser = ({id,emailData})=>{
        const objIndex = users.findIndex(obj => obj.id === id);
        const updatedObj = { ...users[objIndex], email: emailData};
        const updatedUser = [
            ...users.slice(0, objIndex),
  updatedObj,
  ...users.slice(objIndex + 1)
        ]
        //console.log(updatedUser)
        dispatch(updateUser(updatedUser))
    }


    return (
        <>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          
            {users && users.map((item , index)=>(
                <Col style={{marginTop:"1.6rem"}} span={6} offset={2}>
                    <Cards key={item.id} name={item.name} email={item.email} id={item.id} username={item.username} filterUser={filterUser} updatedUser={updatedUser} />  
                </Col>
            ))}
      </Row>
        </>
     
    )
}

export default Home
