import Link from "next/link";

const PolicyFooter = () => {
  return (
    <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
      <div className="text-center">
        <div className="mb-6">
          <Link 
            href="/" 
            className="inline-flex items-center px-6 py-3 bg-[var(--primaryColor)] text-white rounded-lg hover:bg-[var(--primaryColor)]/90 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
        
        <div className="space-y-2">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2025 <span className="text-[var(--primaryColor)] font-semibold">Saikat Tanti</span>. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Professional Web Development & Software Engineering Services
          </p>
        </div>
      </div>
    </div>
  );
};

export default PolicyFooter;
