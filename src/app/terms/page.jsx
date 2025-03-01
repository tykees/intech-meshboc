import React from 'react'

function Page() {
  return (
    <div>
         <div className='w-[300px] md:w-[900px] mx-auto pt-40'>
        <div>
        <h1 className='text-[30px] md:text-[50px] text-center font-bold'>Terms Of Service</h1>
        <p className='text-center text-[16px] mb-20'>Last updated:25-01-2025 </p>

        <p className='font-bold mb-5'>Welcome to Intech Meshboc! These Terms of Service govern your use of our website, courses, and services. By accessing or using our platform, you agree to comply with these terms. If you do not agree, please do not use our services.</p>

        <p className='font-bold mb-2'>Eligibility</p>
        <p>To use our services, you must be at least 18 years old or have parental/guardian consent. By registering, you confirm that you meet these requirements.</p>
        
        <p className='font-bold mb-2'>User Accounts</p>
        <ul  className='mb-5 text-slate-800'>
            <li> You must provide accurate and complete information when creating an account.</li>
            <li>You are responsible for maintaining the security of your account.</li>
            <li>We reserve the right to suspend or terminate accounts that violate these terms.</li>
        </ul>
        <p className='font-bold mb-2'>Course Enrollment & Payments</p>
        <ul  className='mb-5 text-slate-800'>
            <li>Some courses require payment. All fees are non-refundable unless stated otherwise.</li>
            <li>Unauthorized distribution of course materials is strictly prohibited.</li>
            <li>We reserve the right to change course content, pricing, or availability at any time.</li>
        </ul>
        <p className='font-bold mb-2'>Intellectual Property</p>
        <ul  className='mb-5 text-slate-800'>
            <li>All content, including text, videos, and materials, is owned by Intech Meshboc or its licensors.</li>
            <li>You may not copy, distribute, or modify any content without prior permission.</li>
        </ul>
        <p className='font-bold mb-2'> Acceptable Use</p>
        <p>You agree not to:</p>
        <ul className='mb-5 text-slate-800'>
            <li>Engage in unlawful or fraudulent activities.</li>
            <li>Disrupt or harm the platform&apos;s functionality.</li>
            <li>Use our services for unauthorized commercial purposes.</li>
        </ul>

        <p className='font-bold mb-2'>Limitation of Liability</p>
        <ul  className='mb-5 text-slate-800'>
            <li>We provide our services &quot;as is&quot; and make no guarantees regarding their availability or accuracy.</li>
            <li>We are not liable for any damages resulting from your use of our services.</li>
        </ul>
        <p className='font-bold mb-2'>Termination</p>
            <p>We may suspend or terminate your access to our services if you violate these terms. You may also discontinue using our services at any time.</p>
        <p className='font-bold mb-2'>Changes to These Terms</p>
        <p>We may update these Terms of Service from time to time. Any changes will be posted on this page with the updated effective date.</p>
        
        <p className='font-bold mb-2'>Contact Us</p>
       <p>If you have any questions about these Terms of Service, please contact us at: contact@intechmeshboc.com</p>
       <p>By using our website and services, you agree to these Terms of Service.</p>
        </div>
    </div>
    </div>
  )
}

export default Page