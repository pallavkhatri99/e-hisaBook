import React, { useEffect, useState } from 'react'
import { UserSwitchOutlined, SettingOutlined, FileTextOutlined } from '@ant-design/icons';
import { Avatar, Button, Col, DatePicker, Divider, Drawer, Flex, Layout, Popconfirm, Row, Table, Tag, theme } from 'antd'
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import data from '../../utility/dataCust.json'
import DiscriptionBox from '../component/discriptionBox';

dayjs.extend(customParseFormat);
const dateFormat = 'YYYY/MM/DD';
const { Header, Content, Footer } = Layout;
const useDetails = data.contacts;
const trans = data.transactions;
const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
const columns = [
    {
      title: 'TransID',
      dataIndex: 'transID',
      colSpan:0,
      className: 'hidden'
    },
    {
      title: 'Transation Date',
      dataIndex: 'date',
      render: (text) => <span><a style={{ cursor: 'pointer' }}>{text}</a></span>
    },
    {
      title: 'Settled',
      dataIndex: 'get',
    },
    {
      title: 'Pending',
      dataIndex: 'give',
    },
  ];



function CustomerPreview({ userID }) {
  const [custTransID,selectCustID] = useState(null); 
  const [drawerOpen,setDrawer] = useState(false);
  const [drawerConfi,setdrawerConfi] = useState(null);
  const custDetails = useDetails.filter(e=>e.key === userID)[0];
  const { token: { colorBgContainer }, } = theme.useToken();
  //Functions
  const openDrawer = (where,e) => {
    setDrawer(true);
    switch (where) {
      case 's':
        console.log('s');
        setdrawerConfi('s')
        break;
      case 't':
        console.log('t');
        setdrawerConfi('t');
        selectCustID(e.transID)
        break;
      default : setDrawer(true);
    }
  }

return (
    <div className='customerPreview-box' style={{width:'100%',height:'100%'}}>
        {userID?
        <div className="cust-details">
            <Layout 
              style={{
                padding: 0,
                background: colorBgContainer,
                paddingLeft:'20px',
              }}
            >
                <Header 
                    style={{
                        padding: 0,
                        height:'auto',
                        background: colorBgContainer,
                      }}
                >
                    <Divider orientation="left">Custumer Details</Divider>
                    <Row className="detailed-view">
                        <Col span={18} className="view-name" >
                            <Flex justify='flex-start' align='center' gap='small' vertical={false}>
                                <Avatar 
                                  shape="square"
                                  size={64}
                                  style={{
                                      backgroundColor: ColorList[0],
                                      verticalAlign: 'middle',
                                  }}
                                >{custDetails.name[0]}</Avatar>
                                <h1>{custDetails.name}</h1>
                            </Flex>
                        </Col>
                        <Col span={6} className="view-option">
                            <Flex justify='flex-end' align='center' vertical={false}>
                              <Popconfirm 
                                title='Open Report'
                                description='You will be redirected to Reports'
                                onConfirm={console.log('report')}
                                onCancel={console.log('close')}
                                >
                                <Button type="text" size='large' icon={<FileTextOutlined />} >Report</Button>
                              </Popconfirm>
                                <Button onClick={()=>openDrawer('s')} style={{padding:10}} type="text" size='large' icon={<SettingOutlined />} />
                            </Flex>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                        <Flex style={{height:50}} justify='space-between' align='center' vertical={false}>
                            <div className="fin-details">
                                <span><b>Due Date: </b></span> 
                                <span style={{paddingLeft:'10px',fontSize:20}}>
                                    {<DatePicker defaultValue={dayjs('2023/01/01', dateFormat)} format={dateFormat} /> ||'NA' }
                                </span>

                            </div>
                            <div className="net-details">
                                <span><b>Net Balance: </b></span>
                                <span style={{paddingLeft:'10',fontSize:20,paddingLeft:'10px'}}>
                                    <Tag style={{ fontSize: '20px'}}> {custDetails.net ||'NA'} </Tag>
                                </span>
                            </div>
                        </Flex>
                        </Col>
                    </Row>
                </Header>
                <Content
                   style={{
                    padding: 0,
                    background: colorBgContainer,
                  }}
                >
                    <Divider>All Transactions  Details</Divider>
                    <Table 
                      columns={columns}
                      dataSource={trans}
                      scroll={{ }}
                      loading={false}
                      pagination={{position: ['none'],}}
                      onRow={(record) => ({ 
                          onClick: () =>openDrawer('t',record),
                      })}
                    />
                    <Drawer 
                      title="Basic Drawer" 
                      placement="right" 
                      onClose={()=>setDrawer(!drawerOpen)} 
                      open={drawerOpen}>
                        <DiscriptionBox callBy={drawerConfi} custTransID={custTransID}/>
                    </Drawer>
                </Content>
            </Layout>
        </div>
        :
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:"center",height:"100%"}}>
            <div><UserSwitchOutlined style={{ fontSize: '50px'}} /></div>
            <div><h3>Select a Customer</h3></div>
        </div>}
    </div>
  )
}

export default CustomerPreview