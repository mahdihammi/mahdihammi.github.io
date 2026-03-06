import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import project4 from '@/assets/project-4.jpg';
import project5 from '@/assets/project-5.jpg';
import project6 from '@/assets/project-6.jpg';

const projects = [
  {
    title: 'Real-Time Analytics Dashboard',
    description: 'End-to-end streaming pipeline processing 10M+ events/day with real-time dashboards and alerting.',
    tech: ['Kafka', 'Spark Streaming', 'ClickHouse', 'Grafana'],
    image: project1,
    github: 'https://github.com',
  },
  {
    title: 'Cloud ETL Pipeline Framework',
    description: 'Modular ETL framework with automated testing, monitoring, and self-healing capabilities.',
    tech: ['Airflow', 'dbt', 'Snowflake', 'Terraform'],
    image: project2,
    github: 'https://github.com',
  },
  {
    title: 'Stream Processing Engine',
    description: 'Custom stream processing solution for low-latency data transformations and enrichment.',
    tech: ['Kafka', 'Flink', 'Python', 'Docker'],
    image: project3,
    github: 'https://github.com',
  },
  {
    title: 'Data Warehouse Migration',
    description: 'Migrated legacy on-prem DW to cloud-native architecture with zero downtime.',
    tech: ['BigQuery', 'dbt', 'Dataflow', 'GCP'],
    image: project4,
    github: 'https://github.com',
  },
  {
    title: 'ML Feature Store',
    description: 'Centralized feature store serving ML models with versioning and lineage tracking.',
    tech: ['Feast', 'Redis', 'Python', 'Kubernetes'],
    image: project5,
    github: 'https://github.com',
  },
  {
    title: 'Data Quality Framework',
    description: 'Automated data validation and quality monitoring across all data pipelines.',
    tech: ['Great Expectations', 'Python', 'PostgreSQL', 'Slack API'],
    image: project6,
    github: 'https://github.com',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="section-reveal mb-12 text-center">
          <p className="hero-badge mb-4 mx-auto" style={{ width: 'fit-content' }}>Portfolio</p>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle mx-auto">A selection of data engineering projects I've built.</p>
          <div className="section-line mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="project-card section-reveal">
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" loading="lazy" />
                <div className="project-overlay" />
              </div>
              <div className="project-content">
                <h3 className="font-display font-semibold mb-2" style={{ color: 'hsl(var(--foreground))' }}>{project.title}</h3>
                <p style={{ color: 'hsl(var(--muted-foreground))', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tech.map(t => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
                  style={{ color: 'hsl(var(--primary))' }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
