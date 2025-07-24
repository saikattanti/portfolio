import dynamic from "next/dynamic";
import PolicyFooter from "@/components/common/PolicyFooter";

const PageBox = dynamic(() => import("@/components/core/PageBox"));
const ConstrainedBox = dynamic(() => import("@/components/core/constrained-box"));
const ResponsiveBox = dynamic(() => import("@/components/core/ResponsiveBox"));

const TermsAndConditions = () => {
  return (
    <PageBox>
      <ResponsiveBox
        classNames="dark:bg-[var(--bgColor)] bg-[var(--bgColor)] min-h-screen py-16"
        id="terms-conditions"
      >
        <ConstrainedBox classNames="px-4 py-8 z-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Terms and Conditions</h1>
              <p className="text-gray-600 dark:text-gray-400">Last updated: July 23, 2025</p>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2>Agreement to Terms</h2>
              <p>
                By accessing and using this website (saikattanti.xyz), you accept and agree to be bound 
                by the terms and provision of this agreement. If you do not agree to abide by the above, 
                please do not use this service.
              </p>

              <h2>Services Offered</h2>
              <p>Saikat Tanti provides the following professional services:</p>
              <ul>
                <li>Full Stack Web Development</li>
                <li>Mobile Application Development</li>
                <li>UI/UX Design</li>
                <li>Cybersecurity Consulting</li>
                <li>SEO Services</li>
                <li>Graphics Design</li>
              </ul>

              <h2>Payment Terms</h2>
              <h3>Project-Based Services</h3>
              <ul>
                <li>Payment terms will be specified in individual project contracts</li>
                <li>Advance payment may be required before project commencement</li>
                <li>Final payment is due upon project completion and delivery</li>
                <li>All payments are processed securely through Razorpay</li>
              </ul>
              
              <h3>Accepted Payment Methods</h3>
              <ul>
                <li>Credit/Debit Cards</li>
                <li>Net Banking</li>
                <li>UPI</li>
                <li>Digital Wallets</li>
              </ul>

              <h2>Project Delivery</h2>
              <ul>
                <li>Project timelines will be agreed upon before commencement</li>
                <li>Delivery dates are estimates and may vary based on project complexity</li>
                <li>Client cooperation and timely feedback are essential for meeting deadlines</li>
                <li>Source code and project files will be delivered upon full payment</li>
              </ul>

              <h2>Intellectual Property</h2>
              <h3>Client Ownership</h3>
              <p>
                Upon full payment, clients will own all custom code, designs, and content created 
                specifically for their project.
              </p>
              
              <h3>Third-Party Components</h3>
              <p>
                Third-party libraries, frameworks, and tools used in projects retain their 
                original licenses and ownership.
              </p>
              
              <h3>Portfolio Rights</h3>
              <p>
                We reserve the right to showcase completed projects in our portfolio unless 
                otherwise specified in the contract.
              </p>

              <h2>Limitation of Liability</h2>
              <ul>
                <li>Our liability is limited to the amount paid for the specific service</li>
                <li>We are not responsible for any indirect, incidental, or consequential damages</li>
                <li>Clients are responsible for backing up their own data and content</li>
                <li>We provide services &ldquo;as is&rdquo; without warranties beyond those explicitly stated</li>
              </ul>

              <h2>Warranties and Support</h2>
              <h3>Bug Fixes</h3>
              <p>
                We provide 30 days of free bug fixes for delivered projects, covering issues that 
                prevent the project from functioning as originally specified.
              </p>
              
              <h3>Maintenance</h3>
              <p>
                Ongoing maintenance and updates are available as separate services and will be 
                quoted separately.
              </p>

              <h2>Termination</h2>
              <p>Either party may terminate a project with written notice. In such cases:</p>
              <ul>
                <li>Completed work will be delivered to the client</li>
                <li>Payment for completed work is due</li>
                <li>Any advance payments for uncompleted work may be refunded</li>
              </ul>

              <h2>Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of India. 
                Any disputes arising from these terms will be subject to the jurisdiction of 
                Indian courts.
              </p>

              <h2>Contact Information</h2>
              <p>For questions about these Terms and Conditions, please contact us at:</p>
              <p>
                <strong>Email:</strong> terms@saikattanti.xyz<br />
                <strong>Website:</strong> https://www.saikattanti.xyz/
              </p>

              <h2>Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Updated terms will be 
                posted on this page with a new &ldquo;Last updated&rdquo; date. Continued use of our services 
                constitutes acceptance of the modified terms.
              </p>
            </div>
            
            <PolicyFooter />
          </div>
        </ConstrainedBox>
      </ResponsiveBox>
    </PageBox>
  );
};

export default TermsAndConditions;
