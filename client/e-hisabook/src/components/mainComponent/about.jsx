import React from 'react'
import Businesman1 from '../../image/client-features/Businesman1.png'
import Businesman2 from '../../image/client-features/Businesman2.png'
import Businesman3 from '../../image/client-features/Businesman3.png'
import Businesman4 from '../../image/client-features/Businesman4.png'
import Businesman5 from '../../image/client-features/Businesman5.png'
import '../../style/about.css'

const appFeatures = [
    {img:Businesman1,heading:'Easy To Use',main:'Manage Debit & Credit Accounts',details:'Keep a proper track of your ledger account book, payments & outstandings. Easily manage the customer’s credit & debit transactions through Marg Khata Bill App.'},
    {img:Businesman2,heading:'Automatic Reminders',main:'Payment Reminders',details:'Send automatic payment reminders to your customers via SMS or WhatsApp which is absolutely free of cost & easily manage your business from your phone.'},
    {img:Businesman3,heading:'Multilingual Support',main:'Available in Multiple Languages',details:'Khata bill supports multiple Languages like English, Hindi, Hinglish & Gujarati and easy to use interface. Choose as per your convenience from multiple languages to communicate with your customers.'},
    {img:Businesman4,heading:'Online Payment',main:'Accept Online Payment from Customers',details:'Accept payment online via multiple modes like Credit Card, Debit Card, Wallets, Net Banking, UPI from your customers. Ensure 100% safe and secure online transactions.'},
    {img:Businesman5,heading:'Reports & Statements',main:'Generate Customer’s Statement Reports',details:'Easily access and generate your customer’s statement reports anytime anywhere from Marg Khata Bill App resulting in saving of time.'},

]
function About() {
  return (
    <div className='about-section'>
        {appFeatures.map((item,index) =>
        <div className={`about-row-${index%2==0?1:0}`} >
            <div className={`col-order-${index%2==0?1:0}`}>
                <img src={item.img} className="business-img topBottom" style={{width:'60%',paddingLeft:index%2==0?'100px':'0px'}}/>
            </div>
            <div className={`col-order-${index%2==0?1:0}`} data-wow-duration="2s" data-wow-delay="0.1s" >
                <div className="feature-title-custom">
                    <h4 className="section-caption">{item.heading}</h4> 
                    <h3>{item.main}</h3> 
                    <h6 className="section-subtitle-sm">{item.details}</h6>
                </div>
            </div>
        </div>)}
    </div>
  )
}

export default About