import Link from "next/link";
import Strings from "@/constants/strings";

const SpectrumFooter = () => {
  return (
    <footer className="w-full bg-black/5 border-t border-black/5 py-4">
      <div className="max-w-4xl mx-auto px-4 text-center flex flex-col items-center gap-3">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm">
          <Link
            href="/saikat-tanti"
            className="text-gray-500 hover:text-[var(--primaryColor)] transition-colors"
          >
            About Saikat
          </Link>
          <Link
            href="/payment"
            className="text-gray-500 hover:text-[var(--primaryColor)] transition-colors"
          >
            Payment
          </Link>
          <Link
            href="/policies/privacy-policy"
            className="text-gray-500 hover:text-[var(--primaryColor)] transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/policies/terms-conditions"
            className="text-gray-500 hover:text-[var(--primaryColor)] transition-colors"
          >
            Terms & Conditions
          </Link>
          <Link
            href="/policies/cancellation-refunds"
            className="text-gray-500 hover:text-[var(--primaryColor)] transition-colors"
          >
            Cancellation & Refunds
          </Link>
          <Link
            href="/policies/shipping-policy"
            className="text-gray-500 hover:text-[var(--primaryColor)] transition-colors"
          >
            Shipping Policy
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm">
          <Link
            href={Strings.githubLink}
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 hover:text-[var(--primaryColor)] transition-colors"
          >
            GitHub
          </Link>
          <Link
            href={Strings.linkedInLink}
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 hover:text-[var(--primaryColor)] transition-colors"
          >
            LinkedIn
          </Link>
          <Link
            href={Strings.twitterLink}
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 hover:text-[var(--primaryColor)] transition-colors"
          >
            X
          </Link>
          <Link
            href={Strings.instagramLink}
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 hover:text-[var(--primaryColor)] transition-colors"
          >
            Instagram
          </Link>
          <Link
            href={Strings.facebookLink}
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 hover:text-[var(--primaryColor)] transition-colors"
          >
            Facebook
          </Link>
        </div>

        <div className="flex flex-col items-center gap-1 text-sm">
          <h3 className="font-medium text-[var(--primaryColor)]">Saikat Tanti</h3>
          <p className="text-gray-500 text-xs">© 2026 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default SpectrumFooter;
