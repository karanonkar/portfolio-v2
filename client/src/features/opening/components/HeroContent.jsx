import Badge from "../../../components/ui/Badge";
import Heading from "../../../components/ui/Heading";
import Text from "../../../components/ui/Text";

export default function HeroContent() {
  return (
    <div className="max-w-2xl">
      <Badge>FULL STACK MERN DEVELOPER</Badge>

      <Heading className="mt-8">
        Building software
        <br />
        with purpose.
      </Heading>

      <Text className="mt-8 max-w-xl">
        From a small-town student in Itarsi to building modern web applications,
        my journey is driven by persistence, curiosity and continuous learning.
        <br />
        <br />I believe software should solve real-world problems while creating
        meaningful impact.
      </Text>
    </div>
  );
}
