import timelineData from "./TimelineData";
import TimelineCard from "./components/TimelineCard";

export default function JourneyTimeline() {
  return (
    <div className="mx-auto mt-20 max-w-4xl">
      {timelineData.map((item, index) => (
        <TimelineCard
          key={item.year}
          year={item.year}
          title={item.title}
          description={item.description}
          isLast={index === timelineData.length - 1}
        />
      ))}
    </div>
  );
}
