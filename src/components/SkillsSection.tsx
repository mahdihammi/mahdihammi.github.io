import { useEffect, useRef } from 'react';

const categories = [
  {
    title: 'Data Engineering',
    icon: '⚙️',
    color: 'var(--primary)',
    skills: [
      { name: 'Apache Spark', level: 90 },
      { name: 'Apache Airflow', level: 85 },
      { name: 'Apache Kafka', level: 80 },
      { name: 'dbt', level: 85 },
      { name: 'ETL/ELT Pipelines', level: 92 },
    ],
  },
  {
    title: 'Cloud Platforms',
    icon: '☁️',
    color: 'var(--accent)',
    skills: [
      { name: 'AWS (S3, Glue, EMR)', level: 88 },
      { name: 'GCP (BigQuery, Dataflow)', level: 82 },
      { name: 'Azure (Data Factory)', level: 70 },
      { name: 'Terraform', level: 75 },
      { name: 'Docker / K8s', level: 80 },
    ],
  },
  {
    title: 'Databases',
    icon: '🗄️',
    color: 'var(--secondary)',
    skills: [
      { name: 'PostgreSQL', level: 92 },
      { name: 'Snowflake', level: 88 },
      { name: 'MongoDB', level: 75 },
      { name: 'Redis', level: 72 },
      { name: 'Elasticsearch', level: 70 },
    ],
  },
  {
    title: 'Data Visualization',
    icon: '📊',
    color: 'var(--primary)',
    skills: [
      { name: 'Tableau', level: 80 },
      { name: 'Power BI', level: 75 },
      { name: 'Metabase', level: 78 },
      { name: 'Grafana', level: 72 },
    ],
  },
  {
    title: 'Programming',
    icon: '💻',
    color: 'var(--accent)',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'SQL', level: 93 },
      { name: 'Scala', level: 65 },
      { name: 'Bash / Shell', level: 78 },
      { name: 'Go', level: 55 },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.skill-bar-fill').forEach(el => {
              el.classList.add('revealed');
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="grid-bg" />
      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <div className="section-reveal mb-12 text-center">
          <p className="hero-badge mb-4 mx-auto" style={{ width: 'fit-content' }}>Tech Stack</p>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle mx-auto">Tools and technologies I use to build data solutions.</p>
          <div className="section-line mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div key={cat.title} className="skill-category section-reveal">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="font-display font-semibold" style={{ color: 'hsl(var(--foreground))' }}>{cat.title}</h3>
              </div>
              <div className="space-y-3">
                {cat.skills.map(skill => (
                  <div key={skill.name} className="skill-item">
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span style={{ fontSize: '0.85rem', color: 'hsl(var(--foreground))' }}>{skill.name}</span>
                        <span style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))' }}>{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div className="skill-bar-fill" style={{ '--fill': `${skill.level}%` } as React.CSSProperties} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
