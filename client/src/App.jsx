import MainLayout from "./layouts/MainLayout";

import Button from "./components/ui/Button";

import Badge from "./components/ui/Badge";

import Heading from "./components/ui/Heading";

import Text from "./components/ui/Text";

export default function App() {
  return (
    <MainLayout>
      <div className="flex min-h-screen flex-col items-center justify-center gap-8">
        <Badge>FULL STACK MERN DEVELOPER</Badge>

        <Heading>Building software with purpose.</Heading>

        <Text className="max-w-xl text-center">
          This is our reusable design system.
        </Text>

        <div className="flex gap-4">
          <Button>Primary</Button>

          <Button variant="secondary">Secondary</Button>
        </div>
      </div>
    </MainLayout>
  );
}
