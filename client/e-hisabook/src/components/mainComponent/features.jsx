import React, { useState, useEffect } from 'react';
import FeatureCard from '../component/featureCard';
import invoice from '../../image/features/invoice.png';
import report from '../../image/features/report.png';
import management from '../../image/features/management.png'
import cloud from '../../image/features/cloud-data.png'
import mobile from '../../image/features/mobile.png'
import secure from '../../image/features/secure.png'
import '../../style/features.css'

let features = [
    { img:invoice,head:"Easy to create Invoicing",desc:"Create and send professional invoices to clients with ease, including itemized details and payment options.",more:"This feature allows you to create professional invoices with details such as itemized products or services, quantities, prices, and tax information. It simplifies the process of billing clients and helps ensure you get paid promptly."},
    { img:report,head:"Financial Reports" ,desc:"Generate comprehensive reports to track income, expenses, and profit and get into PDF format.",more:"The app generates comprehensive financial reports that provide insights into your business's performance. These reports include income statements, balance sheets, and profit and loss statements."},
    { img:management,head:"Client Management" ,desc:"Keep client information organized for efficient communication and billing.",more:"This feature helps you organize client information, including contact details, billing history, and communication logs. It streamlines client interactions and ensures you have all necessary data at your fingertips."},
    { img:secure,head:"Secure Data" ,desc:"Protect sensitive financial data with robust security measures.",more:"Protecting sensitive financial information is paramount. The app should offer robust security measures, such as data encryption and user authentication, to keep your financial data safe from unauthorized access."},
    { img:mobile,head:"Mobile Accessibility" ,desc:"Access your finances on the go through mobile apps.",more:"Access your financial data and perform essential tasks on the go through mobile apps. This ensures you can manage your business even when you're not at your desk."},
    { img:cloud,head:"Cloud Storage" ,desc:"Store data in the cloud for easy accessibility and backup.",more:"Storing data in the cloud provides several advantages, including easy access from anywhere, automatic backups, and the ability to collaborate with others in real time. It's a convenient and secure way to manage your financial data."},
]

function Features() {
  return (
    <div className='features'>
        <div className="head-fea">
            <h1>Our Features</h1>
        </div>
        <div className="feature-box">
            <div className="f-box-left">
                {features.map((feature,index) => index%2==0? <div key={'f-'+index}><FeatureCard {...feature} index={index}  /></div>:"")}
            </div>
            <div className="f-box-right">
                {features.map((feature,index) => index%2!=0?  <div key={'f-'+index}><FeatureCard {...feature} index={index} /></div>:"")}   
            </div>
                
        </div>
        
    </div>
  )
}

export default Features