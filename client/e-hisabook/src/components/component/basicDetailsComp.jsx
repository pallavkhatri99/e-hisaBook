import React from 'react'
import { Form, Input, InputNumber, Select, message } from 'antd'
const { Option } = Select;

function BasicDetailsComp({formValues,setFormValues}) {
    //function
    const handleChange = (e) => {
        const {value,name} = e.target
        setFormValues({ ...formValues,[name]:value })
    }
    const handleChangeSelect = (e) => {
        setFormValues({ ...formValues,['gender']:e=='m'?'Male':'Female' })
    }
    const handleChangeNumber = (e) => {
        const newNumber = parseInt(e || '0', 10);
        if (Number.isNaN(newNumber)) {
           setFormValues({...formValues,['age']:formValues.age});
           return;
        }
        else{
            setFormValues({ ...formValues,['age']:newNumber })
        }
            
      };
  return (
    <div>
        <Form.Item
            name={['userbasic','fname']}
            label='First Name'
            rules={[{ required: true,  message: 'First Name Required!',}, ]}
        >
            <Input 
                name='fname'
                value={formValues.fname} 
                type="text" style={{width:'70%'}} 
                onChange={handleChange}
            />
        </Form.Item>
        <Form.Item
            name={['userbasic','lname']}
            label='Last Name'
            rules={[{ required: false, }, ]}
        >
            <Input name='lname' value={formValues.lname} type="text" style={{width:'70%'}} onChange={handleChange}/>
        </Form.Item>
        <Form.Item
            name={['userbasic','gender']}
            label='Gender'
            rules={[{ required: true, message: 'Please Select Gender!',}, ]}
        >
            <Select
                value={formValues.gender || 'Male'}
                style={{
                width: 100,
                margin: '0 8px',
                }}
                onChange={handleChangeSelect}
            >
                <Option name='gender' value="m">Male</Option>
                <Option name='gender' value="f">Female</Option>
            </Select>
        </Form.Item>
        <Form.Item
            name={['userbasic','age']}
            label='Age'
            rules={[{ required: true, message: 'Age Required!', }, ]}
        >
            <InputNumber 
                min={18} 
                max={100} 
                value={formValues.age} 
                onChange={handleChangeNumber} 
            />
        </Form.Item>
        <Form.Item
            name={['userbasic','occupation']}
            label='Occupation'
            rules={[{ required: true, message: 'Occupation Required!',}, ]}
        >
            <Input name='occupation' value={formValues.occupation} type="text" style={{width:'70%'}} onChange={handleChange}/>
        </Form.Item>
    </div>
  )
}

export default BasicDetailsComp