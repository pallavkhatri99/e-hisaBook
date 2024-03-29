import React, { useState } from 'react'
import customerLogo from '../../image/dashboard/contacts.png'
import TransationLogo from '../../image/dashboard/transaction.png'
import increaseLogo from '../../image/dashboard/increase.png'
import decreaseLogo from '../../image/dashboard/decrease.png'
import CountUp from 'react-countup';
import { ArrowDownOutlined, ArrowUpOutlined, ContactsOutlined,BarsOutlined ,AppstoreOutlined, StockOutlined } from '@ant-design/icons';
import { Button, Card, Col, Empty, Flex, Row, Segmented, Statistic } from 'antd';  
import PieChart from '../component/PieChart'
import ColumnChart from '../component/columnChart'


const options=[
  {
    label: 'Chart',
    value: 'Chart',
    icon: <AppstoreOutlined />,
  },
  {
    label: 'List',
    value: 'List',
    icon: <BarsOutlined />,
  },
]

const formatter = (value) => <CountUp end={value} separator="," />;


function DashboardFeatures() {
  //declare variables
  const [chartShow,setShowChart] = useState(true);
  const [ColumnChartFilter,setColumnChartFilter] = useState('Yearly');


  //function
  const handleMonths = (n) => {
    console.log(n)
  }
  const handleChartList = (chartList) =>{
    if(chartList === 'List')
      setShowChart(false);
    else 
      setShowChart(true);    
  }
  return (
    <div 
      className='DashboardFeatures-box' 
      style={{ padding: '10px',width:'100%',height:'100%'}} //backgroundColor: '#f0f2f5'
    >
      <Row gutter={[16,16]} className='block-i'>
          <Col span={6} >
            <Card bordered={true} hoverable> 
              <Flex vertical={false} justify='space-between' align='flex-start'>
                <img src={customerLogo} alt="Customer" style={{width:80,height:80}}/>
                <Statistic
                  title="Total Number of Customer"
                  value={16893} 
                  formatter={formatter}
                  precision={2}
                  valueStyle={{
                    color: '#3f8600',
                  }}
                  prefix={<ContactsOutlined />}
                  suffix=""
                />
              </Flex>
            </Card>
          </Col>
          <Col span={6}>
            <Card bordered={true} hoverable>
              <Flex vertical={false} justify='space-between' align='flex-start'>
                <img src={TransationLogo} alt="" style={{width:80,height:80}}/>
                <Statistic
                  title="Total Transactions Counts"
                  value={9.3}
                  formatter={formatter}
                  precision={2}
                  valueStyle={{
                    color: '#cf1322',
                  }}
                  prefix={<StockOutlined />}
                  suffix=""
                />
              </Flex>
            </Card>
          </Col>
          <Col span={6} >
            <Card bordered={true} hoverable> 
              <Flex vertical={false} justify='space-between' align='flex-start'>
                <img src={increaseLogo} alt="Customer" style={{width:80,height:80}}/>
                <Statistic
                  title="Total Give"
                  value={16893} 
                  formatter={formatter}
                  precision={2}
                  valueStyle={{
                    color: '#3f8600',
                  }}
                  prefix={<ArrowUpOutlined />}
                  suffix="₹"
                />
              </Flex>
            </Card>
          </Col>
          <Col span={6}>
            <Card bordered={true} hoverable>
              <Flex vertical={false} justify='space-between' align='flex-start'>
                <img src={decreaseLogo} alt="Customer" style={{width:80,height:80}}/>
                <Statistic
                  title="Total Pending"
                  value={9.3}
                  formatter={formatter}
                  precision={2}
                  valueStyle={{
                    color: '#cf1322',
                  }}
                  prefix={<ArrowDownOutlined />}
                  suffix="₹"
                />
              </Flex>
            </Card>
          </Col>
        </Row>
      <Row gutter={16} className='block-i'>
        <Col span={12} className='container'>
          <Segmented options={options} onChange={handleChartList}/> 
           {chartShow ? <PieChart /> :  <Empty />}
        </Col>
        <Col span={12}>
          <Segmented options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly'].reverse()} onChange={handleMonths}/> 
          <ColumnChart ColumnChartFilter={ColumnChartFilter} />
        </Col>
      </Row>
    </div>
  )
}

export default DashboardFeatures