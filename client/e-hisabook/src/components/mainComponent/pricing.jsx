import React from 'react'
import { Tilt } from 'react-tilt'
import '../../style/pricing.css'

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    10000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}


const pricingData =[
  {head:'Free',price:'0.00',features:[{
    present: true,
    featureDetails: "Limited Subscriber"
  },
  {
    present: true,
    featureDetails: "Income and Expense Tracking"
  },
  {
    present: true,
    featureDetails: "Basic Reporting"
  },
  {
    present: false,
    featureDetails: "Advanced Reporting"
  },
  {
    present: false,
    featureDetails: "Data Export"
  },
  {
    present: false,
    featureDetails: "Priority Email/SMS Support"
  },
  {
    present: false,
    featureDetails: "Multi-User Support"
  },
  {
    present: false,
    featureDetails: "Customization"
  },
  {
    present: true,
    featureDetails: "24/7 Phone Support"
  },
  ]},
  {head:'Basic',price:'199.00',features:[{
          present: true,
          featureDetails: "Limited Subscriber"
        },
        {
          present: true,
          featureDetails: "Income and Expense Tracking"
        },
        {
          present: true,
          featureDetails: "Basic Reporting"
        },
        {
          present: true,
          featureDetails: "Advanced Reporting"
        },
        {
          present: true,
          featureDetails: "Data Export"
        },
        {
          present: false,
          featureDetails: "Priority Email/SMS Support"
        },
        {
          present: false,
          featureDetails: "Multi-User Support"
        },
        {
          present: false,
          featureDetails: "Customization"
        },
        {
          present: true,
          featureDetails: "24/7 Phone Support"
        }
        ]},
  {head:'Standard',price:'599.00',features:[{
          present: true,
          featureDetails: "Unlimited Subscribers",
        },
        {
          present: true,
          featureDetails: "Income and Expense Tracking"
        },
        {
          present: true,
          featureDetails: "Basic Reporting"
        },
        {
          present: true,
          featureDetails: "Advanced Reporting"
        },
        {
          present: true,
          featureDetails: "Data Export"
        },
        {
          present: true,
          featureDetails: "Priority Email/SMS Support"
        },
        {
          present: true,
          featureDetails: "Multi-User Support"
        },
        {
          present: false,
          featureDetails: "Customization"
        },
        {
          present: true,
          featureDetails: "24/7 Phone Support"
        },
      ]},
  {head:'Unlimited',price:'999.00',features:[{
          present: true,
          featureDetails: "Unlimited Subscribers"
        },
        {
          present: true,
          featureDetails: "Income and Expense Tracking"
        },
        {
          present: true,
          featureDetails: "Basic Reporting"
        },
        {
          present: true,
          featureDetails: "Advanced Reporting"
        },
        {
          present: true,
          featureDetails: "Data Export"
        },
        {
          present: true,
          featureDetails: "Priority Email/SMS Support"
        },
        {
          present: true,
          featureDetails: "Multi-User Support"
        },
        {
          present: true,
          featureDetails: "Customization"
        },
        {
          present: true,
          featureDetails: "24/7 Phone Support"
        }
      ]},
]

function Pricing() {
  return (
    <div className='section-price'>
      <div className='head-price'>
        <h1>Pricing</h1>
      </div>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            {pricingData.map(({head,price,features})=>
            <Tilt options={defaultOptions} className="col-sm-4" key={head}>
              <div className="card-price text-center">
                <div className="title">
                  <i className="fa fa-paper-plane" aria-hidden="true"></i>
                  <h2>{head}</h2>
                </div>
                <div className="price">
                  <h4><sup>&#8377;</sup>{price}</h4>
                </div>
                <div className="option">
                  <ul>
                  {features.map((feature,index) =>
                  <li key={index} style={{textDecoration:feature.present?'none':'line-through',color:feature.present?'':'yellow'}}> 
                    {feature.featureDetails}
                  </li>)}                 
                  </ul>
                </div>
                <a href="#">Order Now</a>
              </div>
            </Tilt>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing