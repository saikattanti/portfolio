import dynamic from "next/dynamic";
import PolicyFooter from "@/components/common/PolicyFooter";

const PageBox = dynamic(() => import("@/components/core/PageBox"));
const ConstrainedBox = dynamic(() => import("@/components/core/constrained-box"));
const ResponsiveBox = dynamic(() => import("@/components/core/ResponsiveBox"));

const PrivacyPolicy = () => {
  return (
    <PageBox>
      <ResponsiveBox
        classNames="dark:bg-[var(--bgColor)] bg-[var(--bgColor)] min-h-screen py-16"
        id="privacy-policy"
      >
        <ConstrainedBox classNames="px-4 py-8 z-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Privacy Policy</h1>
              <p className="text-gray-600 dark:text-gray-400">Last updated: July 23, 2025</p>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2>Introduction</h2>
              <p>
                Welcome to Saikat Tanti&rsquo;s portfolio website. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you visit our website saikattanti.xyz.
              </p>

              <h2>Information We Collect</h2>
              <h3>Personal Data</h3>
              <p>We may collect personal information that you voluntarily provide to us when you:</p>
              <ul>
                <li>Contact us through our contact form</li>
                <li>Subscribe to our newsletter</li>
                <li>Make a payment for our services</li>
                <li>Engage with us on social media</li>
              </ul>
              
              <h3>Usage Data</h3>
              <p>We may automatically collect certain information when you visit our website, including:</p>
              <ul>
                <li>IP address and browser type</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website addresses</li>
                <li>Device information and operating system</li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Process payments and deliver requested services</li>
                <li>Send you updates about our services (with your consent)</li>
                <li>Improve our website and user experience</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2>Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except in the following circumstances:
              </p>
              <ul>
                <li>To trusted service providers who help us operate our website</li>
                <li>When required by law or to protect our rights</li>
                <li>With your explicit consent</li>
              </ul>

              <h2>Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of 
                transmission over the internet is 100% secure.
              </p>

              <h2>Cookies</h2>
              <p>
                Our website may use cookies to enhance your experience. You can choose to disable 
                cookies through your browser settings, though this may affect website functionality.
              </p>

              <h2>Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access and receive a copy of your personal data</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal data</li>
                <li>Withdraw consent for data processing</li>
              </ul>

              <h2>Contact Information</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p>
                <strong>Email:</strong> privacy@saikattanti.xyz<br />
                <strong>Website:</strong> https://www.saikattanti.xyz/
              </p>

              <h2>Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any 
                changes by posting the new Privacy Policy on this page and updating the &ldquo;Last updated&rdquo; date.
              </p>
            </div>
            
            <PolicyFooter />
          </div>
        </ConstrainedBox>
      </ResponsiveBox>
    </PageBox>
  );
};

export default PrivacyPolicy;
