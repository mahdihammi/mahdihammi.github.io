const Footer = () => (
  <footer className="py-8 px-6 text-center" style={{ borderTop: '1px solid hsl(var(--border))' }}>
    <p style={{ color: 'hsl(var(--muted-foreground))', fontSize: '0.85rem' }}>
      © {new Date().getFullYear()} John Doe. Built with passion for data.
    </p>
  </footer>
);

export default Footer;
