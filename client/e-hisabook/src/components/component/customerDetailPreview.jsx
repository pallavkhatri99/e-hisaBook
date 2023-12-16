import React from 'react'
import { MailOutlined, HomeOutlined, MobileOutlined, GlobalOutlined, SendOutlined, DeleteOutlined,EditOutlined } from '@ant-design/icons';
import { Avatar, Button, Divider, Flex, Popconfirm } from 'antd';

const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
function CustomerDetailPreview({details}) {
  return (
    <div className='CustomerDetailPreview-box' style={{height:'100%'}}>
        <div className="head-box">
            <Flex justify='flex-start' align='center' gap='small'>
                <Avatar 
                shape="square"
                size={64}
                style={{
                    backgroundColor: ColorList[0],
                    verticalAlign: 'middle',
                }}
                >
                    {details.custName[0]}
                </Avatar>
                <div>
                    <h1 >{details.custName} <EditOutlined style={{cursor:'pointer', fontSize: '16px', color: '#08c' }}/></h1>
                    <p>Join Date: <b>20-Nov-23</b></p>
                </div>
            </Flex>
        </div>
        <div className="details-box">
            <Divider>Phone Number</Divider>
            <div className="item-box">
                <div className="item">
                    <div className="details"><h3> <MobileOutlined />   {details.phoneNo || '-'}</h3></div>
                </div>
                <Divider>Email</Divider>
                <div className="item">
                    <div className="details">
                        <h3><MailOutlined />   {details.email || '-'}</h3>
                    </div>
                </div>
                <Divider>Address</Divider>
                <div className="item">
                    <div className="details">
                        <h3><HomeOutlined />  {details.address || '-'}</h3>
                    </div>
                </div>
                <Divider>State</Divider>
                <div className="item">
                    <div className="icon"></div>
                    <div className="details">
                        <h3><GlobalOutlined />  {details.state || '-'}</h3>
                    </div>
                </div>
                <Divider>City</Divider>
                <div className="item">
                    <div className="icon"></div>
                    <div className="details">
                      <h3><GlobalOutlined /> {details.city || '-'}</h3>
                    </div>
                </div>
            </div>
        </div>
        <div className="btn-section">
                <div className="btn-box">
                    <div className="btn-btn">
                        <Popconfirm
                        title="Send Email"
                        description="Are you sure you want to send Email"
                        onConfirm={() => console.log('first message sent')}
                        onOpenChange={() => console.log('open change')}
                        >
                            <Button type='primary' icon={<SendOutlined />} style={{width:'100%'}}>Sent Email</Button>
                        </Popconfirm>
                    </div>
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

export default CustomerDetailPreview