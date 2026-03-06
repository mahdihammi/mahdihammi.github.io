const articles = [
  {
    title: 'Building Scalable Data Pipelines with Apache Airflow and dbt',
    platform: 'Medium',
    summary: 'A comprehensive guide to orchestrating modern data pipelines using Airflow with dbt transformations.',
    date: 'February 2025',
    link: '#',
  },
  {
    title: 'Real-Time Data Processing: Kafka vs. Flink vs. Spark Streaming',
    platform: 'Dev.to',
    summary: 'Comparing three popular stream processing frameworks for different use cases and scale requirements.',
    date: 'December 2024',
    link: '#',
  },
  {
    title: 'Data Quality at Scale: Lessons from Production',
    platform: 'Medium',
    summary: 'Practical strategies for implementing data quality checks in large-scale data platforms.',
    date: 'October 2024',
    link: '#',
  },
  {
    title: 'Migrating to a Modern Data Stack: A Step-by-Step Guide',
    platform: 'Dev.to',
    summary: 'How we migrated from a legacy ETL system to a cloud-native modern data stack.',
    date: 'August 2024',
    link: '#',
  },
];

const platformColors: Record<string, string> = {
  'Medium': 'var(--primary)',
  'Dev.to': 'var(--secondary)',
};

const ArticlesSection = () => {
  return (
    <section id="articles" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="section-reveal mb-12 text-center">
          <p className="hero-badge mb-4 mx-auto" style={{ width: 'fit-content' }}>Writing</p>
          <h2 className="section-title">Published Articles</h2>
          <p className="section-subtitle mx-auto">Sharing knowledge about data engineering best practices.</p>
          <div className="section-line mx-auto" />
        </div>

        <div className="space-y-4">
          {articles.map((article) => (
            <div key={article.title} className="article-card section-reveal">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <span
                  className="text-xs font-medium px-2.5 py-1 rounded-full"
                  style={{
                    background: `hsl(${platformColors[article.platform]} / 0.1)`,
                    color: `hsl(${platformColors[article.platform]})`,
                    border: `1px solid hsl(${platformColors[article.platform]} / 0.2)`,
                  }}
                >
                  {article.platform}
                </span>
                <span style={{ color: 'hsl(var(--muted-foreground))', fontSize: '0.8rem' }}>{article.date}</span>
              </div>
              <h3 className="font-display font-semibold mb-2" style={{ color: 'hsl(var(--foreground))' }}>{article.title}</h3>
              <p style={{ color: 'hsl(var(--muted-foreground))', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                {article.summary}
              </p>
              <a
                href={article.link}
                className="inline-flex items-center gap-1.5 text-sm font-medium"
                style={{ color: 'hsl(var(--primary))' }}
              >
                Read Article
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
