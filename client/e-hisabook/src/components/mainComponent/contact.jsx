import React from 'react'
import '../../style/contact.css'

function Contact() {
  return (
    <div className='section-contact'>
        <div class="container-contact">
           <div class="contact-row">
                <div class="col-contact-12">
                   <div class="section-title text-center mb-5">
                    <h3 class="text-white">Connect with us!</h3>
                    <p class="text-white">Got a question? Get in touch and we will reach out to you at the earliest.</p>
                   </div>
                </div>
           </div>
           <div class="contact-row">
                 <div class="col-contact-8 mx-auto">
                   <div class="div-trial-form div-subscribe form_bg">
                    <form action="#" id="contact_page_form" class="contact-page-form style-01" method="post" novalidate="novalidate" required="">
                        <div class="row">
                            <div class="col-md-3">
                                <div class="form-group">
                                    <input type="text" name="Name" placeholder="Name" class="app-input" required="" aria-required="true" />
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <input type="tel" name="phone" placeholder="Mobile No." class="app-input" required="" />
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <input type="number" name="Pincode" placeholder="Pincode" class="app-input" required="" />
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="btn-wrapper">
                                    <input type="submit" value="Submit" class="app-submit btn-sm" />
                                </div>
                            </div>
                        </div>
                    </form>
                   </div>
                 </div>
           </div>
        </div>
    </div>
  )
}

export default Contact