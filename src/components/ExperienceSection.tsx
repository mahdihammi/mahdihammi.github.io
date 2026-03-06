import { useEffect, useRef } from 'react';

const experiences = [
  {
    company: 'TechCorp Global',
    role: 'Senior Data Engineer',
    date: 'Jan 2023 – Present',
    description: 'Leading the design and implementation of enterprise-scale data pipelines processing 50M+ events daily. Architecting real-time streaming solutions and optimizing data warehouse performance.',
    tech: ['Apache Spark', 'Airflow', 'Snowflake', 'Python', 'Kafka', 'AWS'],
  },
  {
    company: 'DataFlow Inc.',
    role: 'Data Engineer',
    date: 'Mar 2021 – Dec 2022',
    description: 'Built and maintained ETL pipelines for multi-cloud environments. Reduced data processing time by 40% through pipeline optimization and parallel processing strategies.',
    tech: ['Python', 'dbt', 'BigQuery', 'GCP', 'Terraform', 'Docker'],
  },
  {
    company: 'Analytics Hub',
    role: 'Junior Data Engineer',
    date: 'Jun 2019 – Feb 2021',
    description: 'Developed automated data quality frameworks and monitoring dashboards. Collaborated with data science teams to build feature engineering pipelines.',
    tech: ['SQL', 'Python', 'PostgreSQL', 'Redshift', 'Jenkins', 'Git'],
  },
  {
    company: 'StartupXYZ',
    role: 'Data Analyst / Engineer Intern',
    date: 'Jan 2019 – May 2019',
    description: 'Created reporting dashboards and automated data collection pipelines. First exposure to cloud data engineering practices.',
    tech: ['Python', 'SQL', 'Tableau', 'AWS S3', 'Lambda'],
  },
];

const ExperienceSection = () => {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.2 }
    );

    itemsRef.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="section-reveal mb-12">
          <p className="hero-badge mb-4">Career Path</p>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">A timeline of my professional journey in data engineering.</p>
          <div className="section-line" />
        </div>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <div
              key={i}
              ref={el => { itemsRef.current[i] = el; }}
              className="timeline-item"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-display font-semibold text-lg" style={{ color: 'hsl(var(--foreground))' }}>{exp.role}</h3>
                    <p style={{ color: 'hsl(var(--primary))', fontSize: '0.9rem', fontWeight: 500 }}>{exp.company}</p>
                  </div>
                  <span style={{ color: 'hsl(var(--muted-foreground))', fontSize: '0.8rem', whiteSpace: 'nowrap' }}>{exp.date}</span>
                </div>
                <p style={{ color: 'hsl(var(--muted-foreground))', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map(t => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
