import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import LandingNav from '../components/LandingNav.jsx';
import ObulaLogo from '../components/ObulaLogo.jsx';

export default function About() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col font-body">
      <LandingNav />
      
      <section className="flex-1 pt-24 sm:pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Header */}
            <div className="text-center mb-16">
              <p className="text-primary text-sm font-semibold uppercase tracking-[0.18em] mb-2">About Us</p>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-display tracking-tight">
                Making video editing accessible
              </h1>
              <p className="text-white/60 text-lg max-w-xl mx-auto">
                We're a team of creators and engineers building tools that help content creators save time and grow their audience.
              </p>
            </div>

            {/* Company Info */}
            <div className="space-y-12">
              {/* Mission */}
              <div className="rounded-2xl p-8 bg-white/[0.03] border border-white/[0.08]">
                <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  Obula was founded with a simple belief: every creator deserves access to professional-grade video editing, 
                  regardless of their technical skills or budget. We built an AI-powered platform that transforms long videos 
                  into viral-ready clips in minutes, not hours.
                </p>
                <p className="text-white/70 leading-relaxed">
                  Today, over 2,000 creators trust Obula to power their content creation workflow, 
                  from podcasters and YouTubers to marketing teams and social media managers.
                </p>
              </div>

              {/* What We Do */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="rounded-2xl p-6 bg-white/[0.03] border border-white/[0.08]">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-2xl mb-4">
                    🤖
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">AI-Powered Editing</h3>
                  <p className="text-white/60 text-sm">
                    Our AI automatically detects viral moments, generates captions, and inserts B-roll 
                    to create engaging clips.
                  </p>
                </div>
                <div className="rounded-2xl p-6 bg-white/[0.03] border border-white/[0.08]">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-2xl mb-4">
                    ⚡
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Lightning Fast</h3>
                  <p className="text-white/60 text-sm">
                    Turn hours of footage into shareable clips in under 10 minutes. 
                    No editing skills required.
                  </p>
                </div>
                <div className="rounded-2xl p-6 bg-white/[0.03] border border-white/[0.08]">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-2xl mb-4">
                    💰
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Pay Per Clip</h3>
                  <p className="text-white/60 text-sm">
                    No subscriptions. No hidden fees. Just buy credits and use them whenever you want. 
                    Credits never expire.
                  </p>
                </div>
                <div className="rounded-2xl p-6 bg-white/[0.03] border border-white/[0.08]">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-2xl mb-4">
                    🇮🇳
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Made for India</h3>
                  <p className="text-white/60 text-sm">
                    Built with Indian creators in mind. Local pricing, regional language support, 
                    and familiar payment options.
                  </p>
                </div>
              </div>

              {/* Company Details */}
              <div className="rounded-2xl p-8 bg-white/[0.03] border border-white/[0.08]">
                <h2 className="text-2xl font-bold text-white mb-6">Company Information</h2>
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                    <span className="text-white/50 text-sm">Business Name</span>
                    <span className="text-white font-medium">ZYPIT PRIVATE LIMITED</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                    <span className="text-white/50 text-sm">Brand Name</span>
                    <span className="text-white font-medium">Obula</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                    <span className="text-white/50 text-sm">Business Type</span>
                    <span className="text-white font-medium">Private Limited</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                    <span className="text-white/50 text-sm">Registered Address</span>
                    <span className="text-white font-medium text-right max-w-xs">
                      Bangalore, India
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                    <span className="text-white/50 text-sm">Business Email</span>
                    <a href="mailto:obula.zypit@gmail.com" className="text-primary hover:underline">
                      obula.zypit@gmail.com
                    </a>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                    <span className="text-white/50 text-sm">Founded</span>
                    <span className="text-white font-medium">2025</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                    <span className="text-white/50 text-sm">GST Registration</span>
                    <span className="text-white font-medium">Applied for</span>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="rounded-2xl p-8 bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                <h2 className="text-xl font-bold text-white mb-6 text-center">Why Creators Trust Us</h2>
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">2,000+</div>
                    <div className="text-white/50 text-sm">Active Creators</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">50,000+</div>
                    <div className="text-white/50 text-sm">Clips Generated</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">4.9/5</div>
                    <div className="text-white/50 text-sm">User Rating</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="rounded-2xl p-8 bg-white/[0.03] border border-white/[0.08] text-center">
                <h2 className="text-xl font-bold text-white mb-4">Follow Us</h2>
                <p className="text-white/60 mb-6">Stay updated with our latest features and creator stories</p>
                <a 
                  href="https://instagram.com/obula.io" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  @obula.io
                </a>
              </div>

              {/* Contact CTA */}
              <div className="text-center">
                <p className="text-white/60 mb-4">Have questions? We'd love to hear from you.</p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-[#0A0A0C] font-semibold rounded-xl hover:bg-primary-dark transition-colors"
                >
                  Contact Us
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </m.div>
        </div>
      </section>
    </div>
  );
}
