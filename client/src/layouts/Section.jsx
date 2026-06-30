export default function Section({ id, className = "", children }) {
  return (
    <section id={id} className={`py-24 ${className}`}>
      {children}
    </section>
  );
}
