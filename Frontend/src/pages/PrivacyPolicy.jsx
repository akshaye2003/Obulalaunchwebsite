import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import LandingNav from '../components/LandingNav.jsx';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col font-body">
      <LandingNav />
      
      <section className="flex-1 pt-24 sm:pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-display tracking-tight">
                Privacy Policy
              </h1>
            </div>

            {/* Content */}
            <div className="prose prose-invert max-w-none">
              <div className="rounded-2xl p-8 bg-white/[0.03] border border-white/[0.08] space-y-6">
                
                <h2 className="text-xl font-bold text-white">Introduction</h2>
                <p className="text-white/70 leading-relaxed">
                  This Privacy Policy describes how ZYPIT PRIVATE LIMITED and its affiliates (collectively "ZYPIT PRIVATE LIMITED, we, our, us") collect, use, share, protect or otherwise process your information/ personal data through our website obula.io (hereinafter referred to as Platform). Please note that you may be able to browse certain sections of the Platform without registering with us. We do not offer any product/service under this Platform outside India and your personal data will primarily be stored and processed in India. By visiting this Platform, providing your information or availing any product/service offered on the Platform, you expressly agree to be bound by the terms and conditions of this Privacy Policy, the Terms of Use and the applicable service/product terms and conditions, and agree to be governed by the laws of India including but not limited to the laws applicable to data protection and privacy. If you do not agree please do not use or access our Platform.
                </p>

                <h2 className="text-xl font-bold text-white pt-4">Collection</h2>
                <p className="text-white/70 leading-relaxed">
                  We collect your personal data when you use our Platform, services or otherwise interact with us during the course of our relationship. and related information provided from time to time. Some of the information that we may collect includes but is not limited to personal data / information provided to us during sign-up/registering or using our Platform such as name, date of birth, address, telephone/mobile number, email ID and/or any such information shared as proof of identity or address. Some of the sensitive personal data may be collected with your consent, such as your bank account or credit or debit card or other payment instrument information or biometric information such as your facial features or physiological information (in order to enable use of certain features when opted for, available on the Platform) etc all of the above being in accordance with applicable law(s) You always have the option to not provide information, by choosing not to use a particular service or feature on the Platform.
                </p>

                <h2 className="text-xl font-bold text-white pt-4">Use and Disclosure</h2>
                <p className="text-white/70 leading-relaxed">
                  We use your personal data to:
                </p>
                <ul className="list-disc list-inside text-white/70 space-y-2">
                  <li>Provide and improve our services</li>
                  <li>Process your transactions</li>
                  <li>Communicate with you</li>
                  <li>Comply with legal obligations</li>
                </ul>
                <p className="text-white/70 leading-relaxed mt-4">
                  We may disclose personal data to law enforcement offices, third party rights owners, or others in the good faith belief that such disclosure is reasonably necessary to: enforce our Terms of Use or Privacy Policy; respond to claims that an advertisement, posting or other content violates the rights of a third party; or protect the rights, property or personal safety of our users or the general public.
                </p>

                <h2 className="text-xl font-bold text-white pt-4">Security Precautions</h2>
                <p className="text-white/70 leading-relaxed">
                  To protect your personal data from unauthorised access or disclosure, loss or misuse we adopt reasonable security practices and procedures. Once your information is in our possession or whenever you access your account information, we adhere to our security guidelines to protect it against unauthorised access and offer the use of a secure server. However, the transmission of information is not completely secure for reasons beyond our control. By using the Platform, the users accept the security implications of data transmission over the internet and the World Wide Web which cannot always be guaranteed as completely secure, and therefore, there would always remain certain inherent risks regarding use of the Platform. Users are responsible for ensuring the protection of login and password records for their account.
                </p>

                <h2 className="text-xl font-bold text-white pt-4">Data Deletion and Retention</h2>
                <p className="text-white/70 leading-relaxed">
                  You have an option to delete your account by visiting your profile and settings on our Platform, this action would result in you losing all information related to your account. You may also write to us at the contact information provided below to assist you with these requests. We may in event of any pending grievance, claims, pending shipments or any other services we may refuse or delay deletion of the account. Once the account is deleted, you will lose access to the account. We retain your personal data information for a period no longer than is required for the purpose for which it was collected or as required under any applicable law. However, we may retain data related to you if we believe it may be necessary to prevent fraud or future abuse, or if required by law.
                </p>

                <h2 className="text-xl font-bold text-white pt-4">Contact Us</h2>
                <p className="text-white/70 leading-relaxed">
                  All concerns or communications relating to these Terms must be communicated to us using the contact information provided on this website.
                </p>

              </div>
            </div>

            {/* Back to Home */}
            <div className="mt-12 text-center">
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
              </Link>
            </div>
          </m.div>
        </div>
      </section>
    </div>
  );
}
