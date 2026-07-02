import Container from "../../layouts/Container";
import JourneyTimeline from "./JourneyTimeline";

export default function Journey() {
  return (
    <section id="journey" className="relative py-32">
      <Container>
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-semibold tracking-[0.25em] text-blue-400">
            MY JOURNEY
          </span>

          <h2 className="mt-8 text-5xl font-black uppercase leading-tight text-white md:text-6xl">
            Every Challenge
            <br />
            Built The Next
            <span className="block text-blue-500">Version Of Me.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            From a small town to becoming a Full Stack MERN Developer, every
            step has shaped my technical skills, resilience and passion for
            building impactful software.
          </p>
        </div>

        {/* Timeline */}

        <JourneyTimeline />
      </Container>
    </section>
  );
}
