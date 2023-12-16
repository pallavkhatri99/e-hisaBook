import React from 'react'
import data from '../../utility/dataCust.json'
import { EditOutlined, UnorderedListOutlined ,ArrowUpOutlined, ArrowDownOutlined, DeleteOutlined } from '@ant-design/icons';
import { Avatar, Button, Divider, Flex, Popconfirm } from 'antd'
const TransData = data.transactions

function TransationDetailPreview({transID}) {
  console.log(transID)
  const details = data.contacts.filter(e=> e.key === transID)
  const transDetails = TransData.filter(trans=>trans.transID === transID)
  console.log(details)
  console.log(transDetails)
  return (
    <div className='TransationDetailPreview-box'>
      <Flex justify='flex-start' align='center' gap='small'>
        <Avatar 
          shape="square"
          size={64}
          style={{
            backgroundColor: '#8ee993',
            verticalAlign: 'middle',
          }}
        >
          {details[0].name[0]}
          </Avatar>
          <div>
            <h1 >{details[0].name}</h1>
            <p>Create Date: <b>{transDetails.date}</b></p>
          </div>
      </Flex>
      <div className='block'>
        <Button 
          style={{width: '100%'}}
          icon={<EditOutlined style={{cursor:'pointer', fontSize: '16px', color: '#08c' }}/>}
        >Edit</Button>
      </div>
      <Divider></Divider>
      <Flex vertical={false} gap='large' align='flex-start'>
        <ArrowUpOutlined  style={{fontSize: '30px', color: '#08c',transform: 'rotate(35deg)' }}/>
        <Flex vertical={true} gap='small'>
          <h3 className="head">You Get/Give</h3>
          {details.amount|| 20} 
        </Flex>
      </Flex>
      <Divider></Divider>
      <Flex vertical={false} gap='large' align='flex-start'>
        <UnorderedListOutlined  style={{fontSize: '30px', color: '#08c' }}/>
        <Flex vertical={true} gap='small'>
          <h3 className="head">Discription</h3>
          {details.amount|| 20} 
        </Flex>
      </Flex>
      <div className="btn-section">
      <div className="btn-box">
        <div className="btn-btn">
          <Popconfirm
            title="Delete"
            description="Are you sure you want to Delete User"
            onConfirm={() => console.log('first message sent')}
            onOpenChange={() => console.log('open change')}
          >
            <Button type='primary' danger icon={<DeleteOutlined />} style={{width:'100%'}}>Delete</Button>
          </Popconfirm>
        </div>
      </div>
      </div>
    </div>
  )
}

export default TransationDetailPreview