import type { ReactNode } from "react";

export default function SectionHeading({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <div>
      <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {children && (
        <p className="mt-3 max-w-md text-base text-muted">{children}</p>
      )}
    </div>
  );
}
