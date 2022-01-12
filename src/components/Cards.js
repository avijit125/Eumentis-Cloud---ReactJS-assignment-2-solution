import React,{useState} from 'react';
import { Button, Card, Input, Modal} from 'antd';
import 'antd/dist/antd.min.css';
import { EditOutlined, HeartOutlined, DeleteFilled, HeartFilled, CloudFilled, PhoneFilled, GoogleCircleFilled } from '@ant-design/icons';




const Cards = ({name,email,id,username,phone,website,filterUser,updatedUser,updatedUserLike,isLike,setIsLike}) => {
    const { Meta } = Card;
    const [nameData, setNameData] = useState('')
    const [emailData, setEmailData] = useState('')
    const [phoneData, setPhoneData] = useState('')
    const [websiteData, setWebsiteData] = useState('')
    const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true)
  };

  const handleOk = () => {
    setIsModalVisible(false);
    let params={id,nameData ,emailData, phoneData, websiteData}
    updatedUser(params)

  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const likeState = ()=>{
    const params={id,isLike}
    updatedUserLike(params)
    isLike = true

  }

    if(!isLike){
      isLike= false
    }

    return (
        <>
        <Card
    style={{ width: 280 }}
    cover={
      <img
        alt="example"
        src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`}
      />
    }
    actions={[
        <Button type='link' icon={isLike ? <HeartFilled style={{color:"red"}}/> : <HeartOutlined style={{color:"red"}}/>} onClick={()=>likeState()}></Button>,
         <Button type='link' icon={<EditOutlined key="edit" />} onClick={()=>showModal()}></Button>,
        <Button type='link' icon={<DeleteFilled key="delete" />} onClick={()=>filterUser(id)}></Button>,
    ]}
  >
    <Meta
      title={name}
      description={[<div>
        <p><CloudFilled style={{color:"blueviolet"}} />  {email}</p>
        <p><PhoneFilled style={{color:"blueviolet"}} />  {phone}</p>
        <p><GoogleCircleFilled style={{color:"blueviolet"}} />  {website}</p>
      </div>]}
    />
  </Card>
  <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
       <Input  value={nameData} onChange={(e)=> setNameData(e.target.value) } placeholder='enter new name'/>
        <Input style={{marginTop:"10px"}} value={emailData} onChange={(e)=> setEmailData(e.target.value) } placeholder='enter new email'/>
        <Input style={{marginTop:"10px"}} value={phoneData} onChange={(e)=> setPhoneData(e.target.value) } placeholder='enter new phone'/>
        <Input style={{marginTop:"10px"}} value={websiteData} onChange={(e)=> setWebsiteData(e.target.value) } placeholder='enter new website'/>
      </Modal>
  </>
    )
}

export default Cards
