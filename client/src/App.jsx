import MainLayout from "./layouts/MainLayout";
import Opening from "./features/opening/Opening";
import Journey from "./features/journey";

export default function App() {
  return (
    <MainLayout>
      <>
        <Opening />
        <Journey />
      </> 
    </MainLayout>
  );
}
