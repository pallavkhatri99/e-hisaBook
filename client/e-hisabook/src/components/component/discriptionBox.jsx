import React from 'react'
import CustomerDetailPreview from './customerDetailPreview';
import TransationDetailPreview from './transationDetailPreview';
import data from '../../utility/dataCust.json'

const customProps = data.CustomerDetails[0];
function DiscriptionBox({callBy,custTransID}) {
    
  return (
    <div className='discription-box'>
        {callBy==='s' ? 
         <>
            <CustomerDetailPreview details={customProps}/>
         </>
         :
         <>
            <TransationDetailPreview transID={custTransID}/>
         </>
        }      
    </div>
  )
}

export default DiscriptionBox