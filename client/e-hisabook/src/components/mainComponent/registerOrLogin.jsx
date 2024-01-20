import React, { useContext, useState } from 'react'
import { CheckOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Button, ConfigProvider, Form, Input, Result, Steps } from 'antd';
import BasicDetailsComp from '../component/basicDetailsComp';
import ContactDetailsComp from '../component/contactDetailsComp';
import VerificationComp from '../component/verificationComp';

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };


function RegisterOrLogin({operation,setOpen,setOpenLogin}) {
    console.log(operation,setOpen,setOpenLogin)
    //declaretion
    const [steps,setStep] = useState(0);
    const [formBasicValues,setFormBasicValues] = useState({fname:"",lname:"",gender:"",age:"",occupation:""});
    const [formContactValues,setFormContactValues] = useState({email:"",pnumb:"",address:""});
    const [formVerifyValues,setFormVerifyValues] = useState({emailOTP:"",pnumbOTP:""});
    const appConfig = useContext(ConfigProvider.ConfigContext);


    //function
    const validateMessages = () => { console.log('validation') }
    const onFinish = (values) => {
        console.log(values)
        let value = null;
        switch (steps){
            case 0:
                value = values.userbasic
                if(value.fname!="" && value.gender!="" && value.age!="" && value.occupation!=""){
                    setStep(steps+1);
                }
                break;
            case 1:
                value = values.usercontact
                if(value.email!="" && value.pnumb!="" && value.address!=""){
                    setStep(steps+1);
                }
                break;
            default: 
                return;
        
        }
      };
    const onPrevious = () => {
        setStep(steps-1);
    }
    const login = () => {
        setOpen(false);
        setOpenLogin(true);
    }


  return (
    <div style={{display:operation?"block":"none"}}>
        <Steps items={[
                {
                    title: 'Basic Details',
                    status: steps===0? 'process' : 'finish',
                    icon: <UserOutlined />, 
                },
                {
                    title: 'Contacts Detail',
                    status: steps===1? 'process' : steps>0? 'finish' : 'wait',
                    icon: <SolutionOutlined />,
                },
                {
                    title: 'Verification',
                    status: steps===2? 'process' : steps>1? 'finish' : 'wait',
                    icon: <CheckOutlined />,
                },
                {
                    title: 'Done',
                    status: steps===3? 'process' : steps>2?'finish' : 'wait',
                    icon: <SmileOutlined />,
                },
                ]}
        />
        <Form
            {...layout}
            name="nest-messages"
            style={{
                marginTop: '20px',
            }}
            onFinish={onFinish}
            validateMessages={validateMessages}
            initialValues={{    }}
        >
            {steps===0 ?
                <BasicDetailsComp formValues={formBasicValues} setFormValues={setFormBasicValues}/> :
            steps===1 ? 
                <ContactDetailsComp formValues={formContactValues} setFormValues={setFormContactValues}/> :
            steps===2 ?
                <VerificationComp formValues={formVerifyValues} setFormValues={setFormVerifyValues} next={setStep}/> :
            steps===3 ?
                <div>
                    <Result
                        status="success"
                        title="Successfully Create an Account"
                        subTitle="Thanks for creating your account login details will be sent to the Email Address"
                        extra={[
                        <Button type="primary" key="login" onClick={login} >
                            Login
                        </Button>,
                        ]}
                    />
                </div>
            :""
            }

        {steps!=3 ?     
            <Form.Item
            wrapperCol={{
                ...layout.wrapperCol,
                offset: 8,
            }}
            >
            <Button type="primary" htmlType="submit">
                Next
            </Button>
            <Button disabled={steps===0} onClick={onPrevious} type="primary" style={{marginLeft:'10px'}}>
                Previous
            </Button>
            </Form.Item>
        :""}
        </Form>

    </div>
  )
}

export default RegisterOrLogin