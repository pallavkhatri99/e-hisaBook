import React from 'react'
import { InfoCircleOutlined } from '@ant-design/icons';


function InDeelopment() {
  return (
    <div> 
        <div style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
          <div style={{marginTop:"5%"}}>
              <span style={{display:"flex", justifyContent:"center"}} >
                  <InfoCircleOutlined style={{ fontSize: '50px', color: '#08c' }} />
              </span>
              <h1>Work in development</h1>
          </div>
        </div>
    </div>
  )
}

export default InDeelopment