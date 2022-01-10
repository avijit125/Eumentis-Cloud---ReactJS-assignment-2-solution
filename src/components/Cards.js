import React,{useState} from 'react';
import { Button, Card, Input, Modal} from 'antd';
import 'antd/dist/antd.min.css';
import { EditOutlined, HeartOutlined, DeleteFilled, HeartFilled, CloudFilled } from '@ant-design/icons';




const Cards = ({name,email,id,username,filterUser,updatedUser}) => {
    const { Meta } = Card;
    const [isLike,setIsLike] = useState(false)
    const [emailData, setEmailData] = useState('')
    const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true)
  };

  const handleOk = () => {
    setIsModalVisible(false);
    let params={id,emailData}
    updatedUser(params)

  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };



    return (
        <>
        <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`}
      />
    }
    actions={[
        <Button type='link' icon={isLike ? <HeartFilled style={{color:"red"}}/> : <HeartOutlined style={{color:"red"}}/>} onClick={()=>setIsLike(!isLike)}></Button>,
         <Button type='link' icon={<EditOutlined key="edit" />} onClick={()=>showModal()}></Button>,
        <Button type='link' icon={<DeleteFilled key="delete" />} onClick={()=>filterUser(id)}></Button>,
    ]}
  >
    <Meta
      title={name}
      description={[<CloudFilled style={{color:"blueviolet"}} />, email]}
    />
  </Card>
  <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Input value={emailData} onChange={(e)=> setEmailData(e.target.value) } placeholder='enter new email'/>
      </Modal>
  </>
    )
}

export default Cards
