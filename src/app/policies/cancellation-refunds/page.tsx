import dynamic from "next/dynamic";
import PolicyFooter from "@/components/common/PolicyFooter";

const PageBox = dynamic(() => import("@/components/core/PageBox"));
const ConstrainedBox = dynamic(() => import("@/components/core/constrained-box"));
const ResponsiveBox = dynamic(() => import("@/components/core/ResponsiveBox"));

const CancellationRefunds = () => {
  return (
    <PageBox>
      <ResponsiveBox
        classNames="dark:bg-[var(--bgColor)] bg-[var(--bgColor)] min-h-screen py-16"
        id="cancellation-refunds"
      >
        <ConstrainedBox classNames="px-4 py-8 z-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Cancellations and Refunds Policy</h1>
              <p className="text-gray-600 dark:text-gray-400">Last updated: July 23, 2025</p>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2>Overview</h2>
              <p>
                This policy outlines the terms and conditions for cancellations and refunds for 
                services provided by Saikat Tanti. We strive to maintain fair and transparent 
                practices for both our clients and our business.
              </p>

              <h2>Cancellation Policy</h2>
              <h3>Client-Initiated Cancellations</h3>
              <p>
                Clients may cancel a project at any time by providing written notice. The cancellation 
                will be effective immediately upon receipt of the notice.
              </p>
              
              <h3>Service Provider Cancellations</h3>
              <p>We reserve the right to cancel a project in the following circumstances:</p>
              <ul>
                <li>Non-payment of agreed fees</li>
                <li>Breach of contract terms by the client</li>
                <li>Unreasonable demands or abusive behavior</li>
                <li>Technical impossibility of the requested project</li>
                <li>Legal or ethical concerns</li>
              </ul>

              <h2>Refund Policy</h2>
              <h3>Project Development Services</h3>
              
              <h4>Before Project Commencement</h4>
              <ul>
                <li>100% refund if cancelled before work begins</li>
                <li>Cancellation must be within 48 hours of payment</li>
                <li>Refund processing may take 5-10 business days</li>
              </ul>
              
              <h4>During Project Development</h4>
              <ul>
                <li>Refund calculated based on work completed</li>
                <li>Completed milestones are non-refundable</li>
                <li>Work in progress will be evaluated for partial refund</li>
                <li>All completed work and source code will be delivered</li>
              </ul>
              
              <h4>After Project Completion</h4>
              <ul>
                <li>No refunds after final delivery and client acceptance</li>
                <li>Bug fixes are provided free for 30 days</li>
                <li>Additional changes require separate agreement</li>
              </ul>

              <h2>Consultation Services</h2>
              <ul>
                <li>Consultation fees are non-refundable once the session is completed</li>
                <li>Cancellations made 24+ hours in advance are fully refundable</li>
                <li>Cancellations made less than 24 hours in advance are subject to 50% fee</li>
                <li>No-shows are charged the full consultation fee</li>
              </ul>

              <h2>Refund Process</h2>
              <h3>How to Request a Refund</h3>
              <ol>
                <li>Contact us via email at refunds@saikattanti.xyz</li>
                <li>Provide your project details and reason for refund</li>
                <li>Include original payment confirmation</li>
                <li>Allow up to 5 business days for review</li>
              </ol>
              
              <h3>Processing Time</h3>
              <ul>
                <li>Approved refunds are processed within 5-10 business days</li>
                <li>Refunds are issued to the original payment method</li>
                <li>Bank processing times may vary</li>
              </ul>

              <h2>Non-Refundable Items</h2>
              <ul>
                <li>Completed and delivered work</li>
                <li>Third-party service costs (hosting, domains, licenses)</li>
                <li>Custom graphics and designs already provided</li>
                <li>Consultation sessions already conducted</li>
              </ul>

              <h2>Dispute Resolution</h2>
              <p>
                If you are unsatisfied with our refund decision, you may escalate the matter by:
              </p>
              <ul>
                <li>Requesting a detailed explanation of the decision</li>
                <li>Providing additional documentation to support your claim</li>
                <li>Seeking mediation through appropriate channels</li>
              </ul>

              <h2>Force Majeure</h2>
              <p>
                In cases of events beyond our control (natural disasters, government actions, etc.), 
                refund policies may be adjusted on a case-by-case basis. We will communicate any 
                such situations promptly and work toward fair resolutions.
              </p>

              <h2>Contact Information</h2>
              <p>For refund requests and related inquiries, please contact:</p>
              <p>
                <strong>Email:</strong> refunds@saikattanti.xyz<br />
                <strong>Website:</strong> https://www.saikattanti.xyz/
              </p>

              <h2>Policy Updates</h2>
              <p>
                This policy may be updated periodically. Changes will be posted on this page with 
                an updated &ldquo;Last updated&rdquo; date. Continued engagement with our services constitutes 
                acceptance of any policy modifications.
              </p>
            </div>
            
            <PolicyFooter />
          </div>
        </ConstrainedBox>
      </ResponsiveBox>
    </PageBox>
  );
};

export default CancellationRefunds;
