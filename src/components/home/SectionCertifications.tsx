import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import SectionTitle from "@/components/common/SectionTitle";
import certifications from "@/data/certifications";

const SectionCertifications = ({ id }: { id: string }) => {
  // Group by category
  const categories = Array.from(new Set(certifications.map(c => c.category)));

  return (
    <ResponsiveBox
      classNames="bg-[var(--bgColor)] min-h-screen items-center justify-center"
      id={id}
    >
      <ConstrainedBox classNames="p-4 py-16">
        <SectionTitle>Certifications</SectionTitle>
        
        <div className="flex flex-col gap-12 mt-8">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="text-2xl font-bold mb-6 text-[var(--textColor)]">{category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.filter(c => c.category === category).map((cert, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white/70 dark:bg-black/15 border border-black/10 hover:border-blue-400/40 transition-all shadow-sm flex flex-col gap-3">
                    <h4 className="font-semibold text-lg leading-tight">{cert.name}</h4>
                    <p className="text-[var(--textColorLight)] text-sm">{cert.issuer}</p>
                    {cert.issued && (
                      <p className="text-xs font-medium text-gray-500">Issued: {cert.issued}</p>
                    )}
                    {cert.credentialId && (
                      <div className="mt-auto pt-4 flex">
                        <span className="text-xs px-2 py-1 bg-black/5 dark:bg-white/10 rounded-md font-mono line-clamp-1">
                          ID: {cert.credentialId}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default SectionCertifications;
