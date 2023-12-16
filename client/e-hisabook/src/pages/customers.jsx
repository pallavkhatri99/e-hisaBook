import React, { useState } from 'react'
import { Col, Divider, Input, Pagination, Row, Select, Space, Table, Tag } from 'antd'
import { SearchOutlined, CopyOutlined } from '@ant-design/icons';
import custData from '../utility/dataCust.json'
import CustomerPreview from '../components/mainComponent/custPreview';
import '../style/customers.css'

const data = custData.data || []
const details = custData.contacts || []

const options1 = [
  {    value: 'All',    label: 'All',  },
  {    value: 'Get',    label: 'Get',  },
  {    value: 'Give',    label: 'Give', },
]
const options2 = [
  {    value: 'All',    label: 'Old First',  },
  {    value: 'Get',    label: 'New First',  },
  {    value: 'Give',    label: 'Most Recent', },
]


const columns = [
  {
    title: 'S.No.',
    dataIndex: 'key',
    rowScope: 'row',
    width: 70,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text) => <a style={{ cursor: 'pointer' }}>{text}</a>,
  },
  Table.EXPAND_COLUMN,
  {
    title: 'Amount',
    dataIndex: 'amount',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    
  },
];
const handleChange = (e) => { console.log(e); }

function Customers() {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentUser, setCurrentUser] = useState(null);

  const handleNameClick = (e) => { setCurrentUser(e.key); }
  const handlePageChange = (page) => { setCurrentPage(page); };
  const rowClassName = (record,index) => {
    if(currentUser)
      return currentUser === record.key ? 'selected-row' : 'row-pointer';
  };
  return (
    <div className='customer-section'>
      <Row>
        <Col span={12}>
          <div className="filter-Box">
          <Divider>Search & Filter</Divider>
          <Space.Compact size="large">
            <Input style={{width:200}} size="large" addonBefore={<SearchOutlined />} placeholder="Search By Name" />
            <Input style={{width:200}} size="large" placeholder="Search By Number" />
          </Space.Compact>
          <Select
            size="large"
            defaultValue="All"
            style={{
              width: 100,
              margin:5
            }}
            onChange={handleChange}
            options={options1}
          />
          <Select
            size="large"
            defaultValue="Most Resent"
            style={{
              width: 120,
              margin:5
            }}
            onChange={handleChange}
            options={options2}
          />
          </div>
          <div className="customer-Box">
            <Divider>Customers List</Divider>
            <Table 
              columns={columns}
              dataSource={data}
              scroll={{ y: 1000, }}
              loading={false}
              pagination={{
                current: currentPage,
                pageSize: 10,
                total: data.length,
                showSizeChanger: false,
                onChange: handlePageChange,
              }}
              onRow={(record) => ({ 
                onClick: () => handleNameClick(record),
              })}
              rowClassName={rowClassName}
              expandable={{
                expandedRowRender: (record) => (
                  (details.filter(ele=>ele.key === record.key)).map(record => <div style={{paddingLeft:'50px'}}>
                        <table>
                          <tr>
                            <th>Name :</th>
                            <td><Tag>{record.name || '-'}</Tag><CopyOutlined /></td>
                            <th>Number :</th>
                            <td><Tag>{record.mobNo || '-'}</Tag><CopyOutlined /></td>
                            <th>Email :</th>
                            <td><Tag>{record.email || '-'}</Tag><CopyOutlined /></td> 
                          </tr>
                          <tr>
                            <th>Adress :</th>
                            <td><Tag>{record.address || '-'}</Tag><CopyOutlined /></td>
                            <th>City :</th>
                            <td><Tag>{record.city || '-'}</Tag><CopyOutlined /></td>
                            <th>State :</th>
                            <td><Tag>{record.state || '-'}</Tag><CopyOutlined /></td>
                          </tr>
                        </table>   
                  </div>)
                ),
                // rowExpandable: (record) => record.name !== 'Not Expandable',
              }}
            />
          </div>
        </Col>
        <Col span={12}>
              <CustomerPreview userID={currentUser}/>
        </Col>
      </Row>
    </div>
  )
}

export default Customers