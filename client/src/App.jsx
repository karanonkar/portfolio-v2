import MainLayout from "./layouts/MainLayout";

export default function App() {
  return (
    <MainLayout>
      <h1
        className="flex min-h-screen items-center justify-center font-bold"
        style={{
          fontSize: "var(--fs-display)",
        }}
      >
        Day 2 🚀
      </h1>
    </MainLayout>
  );
}
