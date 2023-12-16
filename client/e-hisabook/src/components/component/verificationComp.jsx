import React, { useEffect, useRef, useState } from 'react';
import { Button, Form, Input } from 'antd';

const VerificationComp = ({ formValues, setFormValues, next }) => {
  // Declare
  const emailInputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const phoneNumberInputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [eOTP,setEmailOTP] = useState('')
  const [pOTP,setPhoneOTP] = useState('')
  const [verifyingEmail,setVerifyingEmail] = useState(false);
  const [verifyingPhone,setVerifyingPhone] = useState(false);
  const [verifiedEmail,setVerifiedEmail] = useState(false);
  const [verifiedPhone,setVerifiedPhone] = useState(false);
  const verifyEmailBtn = useRef(null);
  const verifyPhoneBtn = useRef(null);

  useEffect( () => { checkForNext() },[verifiedPhone,verifiedEmail]);
  //Function
  const handleChange = (e, nextInputRefArray,prevInputRefArray,mode) => {
    const { name, value } = e.target;
    let otp = ''
    if ((e.nativeEvent.inputType === 'deleteContentBackward' || e.nativeEvent.inputType === 'deleteContentForward') && value === '') {
        if (mode === 'e' && eOTP.length > 0) {
          setEmailOTP(eOTP.slice(0, -1)); // Remove the last character
        } else if (mode === 'p' && pOTP.length > 0) {
          setPhoneOTP(pOTP.slice(0, -1)); // Remove the last character
        }
        if (prevInputRefArray) prevInputRefArray.current.focus();
        
        return;
    }
    if (/^\d$/.test(value)) {
      const nextInputRef = nextInputRefArray.find((ref) => ref.current);
      if (nextInputRef) {
        nextInputRef.current.focus();
      }
    }
    if(mode === 'e') {
      otp = emailInputRefs.reduce((prev, next) => prev + next.current.input.value,'')
      setEmailOTP(otp);
      otp = '';
    }
    else if(mode === 'p') {
      otp = phoneNumberInputRefs.reduce((prev, next) => prev + next.current.input.value,'')
      setPhoneOTP(otp);
      otp = '';
    }
  };
  const verifyEmailOTP = (e) => {
    setVerifyingEmail(true);
    emailInputRefs.forEach(ele => {
       ele.current.input.disabled = true;     
    });
    setTimeout( () => { 
      verifyEmailBtn.current.disabled = true;
      setVerifyingEmail(false);
      setVerifiedEmail(true); 
      checkForNext();     
    }, 3000 )
  };
  const verifyPhoneOTP = (e) => {
    setVerifyingPhone(true);
    phoneNumberInputRefs.forEach(ele => {
      ele.current.input.disabled = true;
   });
    setTimeout( () => { 
      verifyPhoneBtn.current.disabled = true;
      setVerifyingPhone(false);
      setVerifiedPhone(true);
      checkForNext();     
    }, 3000 )
  };

  const checkForNext = () => {
    if(verifiedPhone && verifiedEmail)
      next(e => e + 1);
  };


  return (
    <div>
      <Form.Item
        name={['userVerify', 'emailOTP']}
        label='Verify Email'
        rules={[{ required: true, message: 'Please Enter OTP !' }]}
      >
        {emailInputRefs.map((inputRef, index) => (
          <Input
            key={index}
            name={`email${index + 1}`}
            value={formValues[`email${index + 1}`]}
            type="text"
            maxLength='1'
            placeholder='*'
            style={{ width: '5%', marginLeft: '5px' }}
            onChange={(e) => handleChange(e, emailInputRefs.slice(index + 1), emailInputRefs[index-1], 'e')}
            ref={inputRef}
          />
        ))}

        <Button ref={verifyEmailBtn} onClick={verifyEmailOTP} type="primary" loading={verifyingEmail} disabled={eOTP.length!=4} style={{marginLeft:20}}>
          {verifiedEmail ? 'Verified' : 'Verify' }
        </Button> 
        {verifiedEmail ? <span style={{color: '#3cc92e', marginLeft:'5px'}} role="img" aria-label="check-circle" class="anticon anticon-check-circle"><svg viewBox="64 64 896 896" focusable="false" data-icon="check-circle" width="2em" height="2em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg></span>:""}
      </Form.Item>
      <Form.Item
        name={['userVerify', 'pnumbOTP']}
        label='Verify Phone Number'
        rules={[{ required: true, message: 'Please Enter OTP !' }]}
      >
        {phoneNumberInputRefs.map((inputRef, index) => (
          <Input
            key={index}
            name={`phone${index + 1}`}
            value={formValues[`phone${index + 1}`]}
            type="text"
            maxLength='1'
            placeholder='*'
            style={{ width: '5%', marginLeft: '5px' }}
            onChange={(e) => handleChange(e, phoneNumberInputRefs.slice(index + 1), phoneNumberInputRefs[index-1], 'p')}
            ref={inputRef}
          />
        ))}
      
        <Button ref={verifyPhoneBtn} onClick={verifyPhoneOTP} type="primary" loading={verifyingPhone} disabled={pOTP.length!=4} style={{marginLeft:20}} >
          {verifiedPhone ? 'Verified' : 'Verify'}
        </Button> 
        {verifiedPhone ? <span style={{color: '#3cc92e', marginLeft:'5px'}} role="img" aria-label="check-circle" class="anticon anticon-check-circle"><svg viewBox="64 64 896 896" focusable="false" data-icon="check-circle" width="2em" height="2em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg></span>:""}
      </Form.Item>
    </div>
  );
};

export default VerificationComp;
