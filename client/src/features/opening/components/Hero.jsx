import Container from "../../../layouts/Container";

import HeroContent from "./HeroContent";
import HeroActions from "./HeroActions";
import HeroIllustration from "./HeroIllustration";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}

          <div>
            <HeroContent />

            <HeroActions />
          </div>

          {/* Right */}

          <HeroIllustration />
        </div>
      </Container>
    </section>
  );
}
