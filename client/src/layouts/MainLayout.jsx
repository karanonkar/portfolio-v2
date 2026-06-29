export default function MainLayout({ children }) {
  return (
    <main
      style={{
        background: "var(--background)",
        color: "var(--text)",
        fontFamily: "var(--font-body)",
      }}
      className="min-h-screen overflow-x-hidden"
    >
      {children}
    </main>
  );
}
