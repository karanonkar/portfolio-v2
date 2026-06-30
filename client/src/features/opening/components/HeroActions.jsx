import Button from "../../../components/ui/Button";

export default function HeroActions() {
  return (
    <div className="mt-10 flex flex-wrap items-center gap-4">
      <Button>View Journey</Button>

      <Button variant="secondary">Explore Projects</Button>
    </div>
  );
}
