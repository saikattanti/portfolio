import dynamic from "next/dynamic";
import PolicyFooter from "@/components/common/PolicyFooter";

const PageBox = dynamic(() => import("@/components/core/PageBox"));
const ConstrainedBox = dynamic(() => import("@/components/core/constrained-box"));
const ResponsiveBox = dynamic(() => import("@/components/core/ResponsiveBox"));

const ShippingPolicy = () => {
  return (
    <PageBox>
      <ResponsiveBox
        classNames="dark:bg-[var(--bgColor)] bg-[var(--bgColor)] min-h-screen py-16"
        id="shipping-policy"
      >
        <ConstrainedBox classNames="px-4 py-8 z-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Shipping Policy</h1>
              <p className="text-gray-600 dark:text-gray-400">Last updated: July 23, 2025</p>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2>Service Delivery Overview</h2>
              <p>
                As a digital service provider, Saikat Tanti primarily delivers services and 
                products electronically. This policy outlines how we deliver our digital products 
                and any physical materials when applicable.
              </p>

              <h2>Digital Service Delivery</h2>
              <h3>Electronic Delivery</h3>
              <p>Most of our services are delivered digitally through secure electronic methods:</p>
              <ul>
                <li>Source code via GitHub repositories or secure file sharing</li>
                <li>Design files through cloud storage platforms</li>
                <li>Documentation via email or project management tools</li>
                <li>Access credentials and hosting details via secure channels</li>
                <li>Training materials through video calls or online platforms</li>
              </ul>

              <h3>Delivery Timeline</h3>
              <ul>
                <li>Initial project setup: Within 24-48 hours of payment</li>
                <li>Regular project updates: As per agreed schedule</li>
                <li>Final deliverables: According to project timeline</li>
                <li>Source code and documentation: Within 24 hours of project completion</li>
              </ul>

              <h2>Physical Materials (When Applicable)</h2>
              <h3>Hardware or Physical Products</h3>
              <p>
                In rare cases where physical materials are involved (USB drives, printed documentation, etc.):
              </p>
              <ul>
                <li>Shipping costs will be quoted separately</li>
                <li>Delivery within India: 3-7 business days</li>
                <li>International delivery: 7-14 business days</li>
                <li>Tracking information will be provided</li>
              </ul>

              <h2>Delivery Confirmation</h2>
              <ul>
                <li>Email confirmation sent for all digital deliveries</li>
                <li>Access instructions provided where applicable</li>
                <li>Client acknowledgment required for project completion</li>
                <li>Post-delivery support as per service agreement</li>
              </ul>

              <h2>Failed Delivery</h2>
              <h3>Digital Delivery Issues</h3>
              <ul>
                <li>Alternative delivery methods will be attempted</li>
                <li>Client notification within 24 hours of delivery issues</li>
                <li>Resolution typically within 48 hours</li>
              </ul>

              <h3>Physical Delivery Issues</h3>
              <ul>
                <li>Tracking provided for all physical shipments</li>
                <li>Re-shipment at no additional cost for our errors</li>
                <li>Client responsible for providing accurate shipping information</li>
              </ul>

              <h2>International Deliveries</h2>
              <ul>
                <li>Digital services available worldwide</li>
                <li>Physical shipping available to most countries</li>
                <li>Customs duties and taxes are client responsibility</li>
                <li>Delivery times may vary based on local customs</li>
              </ul>

              <h2>Contact Information</h2>
              <p>For delivery-related inquiries, please contact:</p>
              <p>
                <strong>Email:</strong> delivery@saikattanti.xyz<br />
                <strong>Website:</strong> https://www.saikattanti.xyz/
              </p>

              <h2>Policy Updates</h2>
              <p>
                This shipping policy may be updated periodically. Changes will be posted on this page 
                with an updated &ldquo;Last updated&rdquo; date.
              </p>
            </div>
            
            <PolicyFooter />
          </div>
        </ConstrainedBox>
      </ResponsiveBox>
    </PageBox>
  );
};

export default ShippingPolicy;
