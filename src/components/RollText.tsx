// Text that rolls up and is replaced by a copy of itself. The parent link
// needs the `group` class.
export default function RollText({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  const roll =
    "block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full group-focus-visible:-translate-y-full";

  return (
    <span
      className={`relative inline-flex overflow-hidden pb-[0.12em] align-bottom ${className}`}
    >
      <span className={roll}>{children}</span>
      <span aria-hidden className={`absolute inset-x-0 top-full ${roll}`}>
        {children}
      </span>
    </span>
  );
}
