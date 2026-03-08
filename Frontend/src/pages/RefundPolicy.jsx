import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import LandingNav from '../components/LandingNav.jsx';

export default function RefundPolicy() {
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
                Refund and Cancellation policy
              </h1>
            </div>

            {/* Content */}
            <div className="prose prose-invert max-w-none">
              <div className="rounded-2xl p-8 bg-white/[0.03] border border-white/[0.08] space-y-6">
                
                <p className="text-white/70 leading-relaxed">
                  This refund and cancellation policy outlines how you can cancel or seek a refund for a product / service that you have purchased through the Platform. Under this policy:
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">1. Cancellations</h3>
                    <p className="text-white/70 leading-relaxed">
                      Cancellations will only be considered if the request is made 2 days of placing the order. However, cancellation requests may not be entertained if the orders have been communicated to such sellers / merchant(s) listed on the Platform and they have initiated the process of shipping them, or the product is out for delivery. In such an event, you may choose to reject the product at the doorstep.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">2. Perishable Items</h3>
                    <p className="text-white/70 leading-relaxed">
                      ZYPIT PRIVATE LIMITED does not accept cancellation requests for perishable items like flowers, eatables, etc. However, the refund / replacement can be made if the user establishes that the quality of the product delivered is not good.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">3. Damaged or Defective Items</h3>
                    <p className="text-white/70 leading-relaxed">
                      In case of receipt of damaged or defective items, please report to our customer service team. The request would be entertained once the seller/ merchant listed on the Platform, has checked and determined the same at its own end. This should be reported within 2 days of receipt of products. In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within 2 days of receiving the product. The customer service team after looking into your complaint will take an appropriate decision.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">4. Warranty Issues</h3>
                    <p className="text-white/70 leading-relaxed">
                      In case of complaints regarding the products that come with a warranty from the manufacturers, please refer the issue to them.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">5. Refund Processing</h3>
                    <p className="text-white/70 leading-relaxed">
                      In case of any refunds approved by ZYPIT PRIVATE LIMITED, it will take 2 days for the refund to be processed to you.
                    </p>
                  </div>
                </div>

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
