import React,{useState, useEffect} from 'react';
import { Button, Card, Input, Modal, Form} from 'antd';
import 'antd/dist/antd.min.css';
import { EditOutlined, HeartOutlined, DeleteFilled, HeartFilled,  PhoneFilled, MailOutlined, GlobalOutlined } from '@ant-design/icons';




const Cards = ({name,email,id,username,phone,website,filterUser,updatedUser,updatedUserLike,isLike}) => {
    const { Meta } = Card;
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();

    useEffect(()=>{
      form.setFieldsValue({
        name,
        email,
        phone,
        website
      })
    },[name,
      email,
      phone,
      website,form])

  const showModal = () => {
    setIsModalVisible(true)
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    const {name, email,phone,website} = values
    let params={id,name, email,phone,website}
    //console.log(params)
    updatedUser(params)
    setIsModalVisible(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
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
        style={{height:160,backgroundColor:"#D0D3D4"}}
      />
    }
    actions={[
        <Button  type='link' icon={isLike ? <HeartFilled style={{color:"red"}}/> : <HeartOutlined style={{color:"red"}}/>} onClick={()=>likeState()}></Button>,
         <Button type='link' icon={<EditOutlined key="edit" />} onClick={()=>showModal()}></Button>,
        <Button type='link' icon={<DeleteFilled key="delete" />} onClick={()=>filterUser(id)}></Button>,
    ]}
  >
    <Meta
      title={name}
      description={[<div>
        <p><MailOutlined />  {email}</p>
        <p><PhoneFilled />  {phone}</p>
        <p><GlobalOutlined />  {website}</p>
      </div>]}
    />
  </Card>
  <Modal 
        title="Basic Modal" 
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={false}
         >
    <Form
     name="basic"
     labelCol={{
       span: 8,
     }}
     wrapperCol={{
       span: 16,
     }}
     initialValues={{
       remember: true,
     }}
     onFinish={onFinish}
     onFinishFailed={onFinishFailed}
     autoComplete="off"
     form={form}
    >
      <Form.Item
        label="name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input  />
      </Form.Item>
      <Form.Item
        label="email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="phone"
        name="phone"
        rules={[
          {
            required: true,
            message: 'Please input your phone!',
          },
        ]}
      >
        <Input  />
      </Form.Item>
      <Form.Item
        label="website"
        name="website"
        rules={[
          {
            required: true,
            message: 'Please input your website!',
          },
        ]}
      >
        <Input />
      </Form.Item>
       <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item> 

    </Form>
      
      </Modal>
  </>
    )
}

export default Cards


