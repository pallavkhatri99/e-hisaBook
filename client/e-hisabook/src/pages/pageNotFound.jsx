import React from 'react'
import { ExclamationOutlined  } from '@ant-design/icons';

function PageNotFound() {
  return (
    <div> 
        <div style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
          <div style={{marginTop:"5%"}}>
              <span style={{display:"flex", justifyContent:"center"}} >
                  <ExclamationOutlined style={{ fontSize: '50px', color: '#aa0a0a' }} />
              </span>
              <h1>Page Not Found</h1>
          </div>
        </div>
    </div>
  )
}

export default PageNotFound