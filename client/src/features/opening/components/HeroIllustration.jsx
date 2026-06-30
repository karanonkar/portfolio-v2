import heroImage from "../../../assets/images/hero.png";

export default function HeroIllustration() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Blue Glow */}
      <div className="absolute h-80 w-80 rounded-full bg-blue-600/20 blur-[120px]" />

      {/* Purple Glow */}
      <div className="absolute right-0 top-20 h-52 w-52 rounded-full bg-violet-500/20 blur-[100px]" />

      {/* Image */}
      <img
        src={heroImage}
        alt="Karan Onkar Workspace"
        className="
          relative
          z-10
          w-full
          max-w-[520px]
          rounded-3xl
          object-contain
          drop-shadow-[0_20px_60px_rgba(59,130,246,0.35)]
          transition-transform
          duration-500
          hover:scale-[1.02]
        "
      />
    </div>
  );
}
