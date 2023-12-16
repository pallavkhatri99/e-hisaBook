import { Form, Input } from 'antd'
import React from 'react'

function ContactDetailsComp({formValues,setFormValues}) {
  //function
  const handleChange = (e) => {
    const {value,name} = e.target
    setFormValues({ ...formValues,[name]:value })
  }
  console.log(formValues)
  return (
    <div>
      <Form.Item
            name={['usercontact','email']}
            label='Email Address'
            rules={[{ required: true,  message: 'Please Enter Full Email Address!',}, ]}
        >
            <Input 
                name='email'
                value={formValues.email} 
                type="text" style={{width:'70%'}} 
                onChange={handleChange}
            />
        </Form.Item>
        <Form.Item
            name={['usercontact','pnumb']}
            label='Phone Number'
            rules={[{ required: true,  message: 'Please Enter Phone Number!',}, ]}
        >
            <Input name='pnumb' value={formValues.pnumb} type="text" style={{width:'70%'}} onChange={handleChange}/>
        </Form.Item>
        <Form.Item
            name={['usercontact','address']}
            label='Address'
            rules={[{ required: true, message: 'Occupation Required!',}, ]}
        >
            <Input value={formValues.address} type="text" style={{width:'70%'}} onChange={handleChange}/>
        </Form.Item>
    </div>
  )
}

export default ContactDetailsComp