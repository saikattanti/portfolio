import Link from "next/link";

const SpectrumFooter = () => {
  return (
    <footer className="w-full bg-black/5 dark:bg-black/20 border-t border-white/10 py-4">
      <div className="max-w-4xl mx-auto px-4 text-center flex flex-col items-center gap-3">
        
        {/* Policy Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm">
          <Link href="/policies/privacy-policy" className="text-gray-500 dark:text-gray-400 hover:text-[var(--primaryColor)] transition-colors">
            Privacy Policy
          </Link>
          <Link href="/policies/terms-conditions" className="text-gray-500 dark:text-gray-400 hover:text-[var(--primaryColor)] transition-colors">
            Terms & Conditions
          </Link>
          <Link href="/policies/cancellation-refunds" className="text-gray-500 dark:text-gray-400 hover:text-[var(--primaryColor)] transition-colors">
            Cancellation & Refunds
          </Link>
          <Link href="/policies/shipping-policy" className="text-gray-500 dark:text-gray-400 hover:text-[var(--primaryColor)] transition-colors">
            Shipping Policy
          </Link>
        </div>

        {/* Branding & Copyright */}
        <div className="flex flex-col items-center gap-1 text-sm">
          <h3 className="font-medium bg-gradient-to-r from-[var(--primaryColor)] to-[var(--secondaryColor)] bg-clip-text text-transparent">
            Saikat Tanti
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-xs">© 2025 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default SpectrumFooter;
