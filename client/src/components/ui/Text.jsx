export default function Text({
  children,

  className = "",
}) {
  return (
    <p
      style={{
        color: "var(--text-muted)",

        lineHeight: "var(--line-height)",
      }}
      className={`

        text-lg

        ${className}

      `}
    >
      {children}
    </p>
  );
}
