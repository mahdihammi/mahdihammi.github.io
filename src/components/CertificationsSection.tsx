const certifications = [
  {
    title: 'AWS Certified Data Analytics – Specialty',
    org: 'Amazon Web Services',
    date: 'March 2024',
    color: 'var(--primary)',
  },
  {
    title: 'Google Professional Data Engineer',
    org: 'Google Cloud',
    date: 'November 2023',
    color: 'var(--accent)',
  },
  {
    title: 'Databricks Certified Data Engineer Associate',
    org: 'Databricks',
    date: 'July 2023',
    color: 'var(--secondary)',
  },
  {
    title: 'Apache Spark Developer Certification',
    org: 'Databricks',
    date: 'January 2023',
    color: 'var(--primary)',
  },
  {
    title: 'Snowflake SnowPro Core',
    org: 'Snowflake',
    date: 'September 2022',
    color: 'var(--accent)',
  },
  {
    title: 'Terraform Associate',
    org: 'HashiCorp',
    date: 'May 2022',
    color: 'var(--secondary)',
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 px-6 relative">
      <div className="grid-bg" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="section-reveal mb-12 text-center">
          <p className="hero-badge mb-4 mx-auto" style={{ width: 'fit-content' }}>Credentials</p>
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle mx-auto">Professional certifications validating expertise.</p>
          <div className="section-line mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div key={cert.title} className="cert-card section-reveal">
              <div className="cert-image-wrapper" style={{ background: `linear-gradient(135deg, hsl(${cert.color} / 0.15), hsl(${cert.color} / 0.05))` }}>
                <div className="flex items-center justify-center h-full">
                  <div className="text-center px-4">
                    <div className="w-16 h-16 rounded-2xl mx-auto mb-3 flex items-center justify-center" style={{ background: `hsl(${cert.color} / 0.15)`, border: `1px solid hsl(${cert.color} / 0.2)` }}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={`hsl(${cert.color})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="6"/>
                        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold text-sm mb-1" style={{ color: 'hsl(var(--foreground))' }}>{cert.title}</h3>
                <p style={{ color: `hsl(${cert.color})`, fontSize: '0.8rem', fontWeight: 500 }}>{cert.org}</p>
                <p style={{ color: 'hsl(var(--muted-foreground))', fontSize: '0.75rem', marginTop: '0.25rem' }}>{cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
