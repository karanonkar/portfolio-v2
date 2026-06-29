export default function Heading({
  children,

  className = "",
}) {
  return (
    <h1
      style={{
        fontSize: "var(--fs-display)",
      }}
      className={`

        font-bold

        leading-none

        ${className}

      `}
    >
      {children}
    </h1>
  );
}

