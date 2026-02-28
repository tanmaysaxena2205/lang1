'use client'
import Link from 'next/link';
import { Shield, Lock, Eye, Globe, ArrowRight, FileText } from 'lucide-react';

export default function PrivacyPolicy() {
  const lastUpdated = "February 23, 2026";

  return (
    <main className="bg-[#050505] text-white min-h-screen">
      {/* --- HEADER --- */}
      <section className="px-6 pt-32 pb-12 lg:px-20 border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-orange-500/5 blur-[120px] rounded-full"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <Link href="/" prefetch={false} className="inline-flex items-center gap-2 text-white/20 hover:text-white transition-colors font-black uppercase tracking-widest text-xs mb-8">
            <ArrowRight className="rotate-180" size={16} /> Back to Home
          </Link>
          
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-4">
            PRIVACY <br /> 
            <span className="text-white/20">PROTOCOL.</span>
          </h1>
          <p className="text-gray-500 font-bold uppercase text-xs tracking-[0.3em]">
            Last Updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* --- CONTENT --- */}
      <section className="px-6 py-20 lg:px-20 max-w-4xl mx-auto">
        <div className="space-y-16">
          
          {/* 1. DATA COLLECTION */}
          <PolicySection 
            icon={<Eye size={24} className="text-orange-500" />}
            title="01. Information We Collect"
            content="To provide the Langster experience, we collect minimal but necessary data. This includes your name and email address provided via Clerk (Google/Apple) and transaction identifiers from our payment processors."
          />

          {/* 2. PAYMENT DATA */}
          <PolicySection 
            icon={<Lock size={24} className="text-orange-500" />}
            title="02. Payment Processing"
            content="We do not store your credit card or UPI details on our servers. All payments are processed securely through PayPal or Razorpay. These third-party providers share only the status of your transaction and a unique reference ID with us to activate your lifetime access."
          />

          {/* 3. THIRD PARTY SERVICES */}
          <PolicySection 
            icon={<Globe size={24} className="text-orange-500" />}
            title="03. Third-Party Integration"
            content="Langster utilizes Clerk for authentication and Vercel for hosting. These services may collect technical data such as IP addresses and browser types to ensure platform stability and security. We encourage you to review their respective privacy policies."
          />

          {/* 4. DATA RIGHTS */}
          <PolicySection 
            icon={<Shield size={24} className="text-orange-500" />}
            title="04. Your Rights"
            content="You have the right to access, correct, or delete your personal data at any time. Since Langster operates on a lifetime access model, deleting your account will terminate your access to our learning curriculum without a refund, as per our Terms of Service."
          />

          {/* CONTACT INFO */}
          <div className="bg-[#0a0a0a] border border-white/10 p-8 md:p-12 rounded-[2.5rem] mt-20">
            <h3 className="text-2xl font-black uppercase tracking-tight mb-4 flex items-center gap-3">
              <FileText className="text-orange-500" />
              Contact for Inquiry
            </h3>
            <p className="text-gray-400 font-medium leading-relaxed mb-6">
              If you have any questions regarding this Privacy Policy or the protection of your data, please contact our legal team.
            </p>
            <a 
              href="mailto:support@langster.com" 
              className="text-white font-black uppercase tracking-widest text-sm underline decoration-orange-500 underline-offset-8 hover:text-orange-500 transition-colors"
            >
              support@langster.com
            </a>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 border-t border-white/5 text-center">
        <p className="text-[10px] text-white/10 font-black uppercase tracking-[0.5em]">
          Langster • Integrity in Education
        </p>
      </footer>
    </main>
  );
}

function PolicySection({ icon, title, content }) {
  return (
    <div className="group">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-white/5 rounded-xl group-hover:bg-orange-500/10 transition-colors">
          {icon}
        </div>
        <h2 className="text-2xl font-black uppercase tracking-tight">{title}</h2>
      </div>
      <p className="text-gray-400 text-lg font-medium leading-relaxed pl-1">
        {content}
      </p>
    </div>
  );
}