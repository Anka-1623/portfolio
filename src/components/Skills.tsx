import { skillGroups } from "@/lib/data";
import { CONTAINER } from "@/lib/ui";

// Each row fills with ink from the bottom on hover and its text flips to paper.
export default function Skills() {
  return (
    <div className={CONTAINER}>
      <h2 className="sr-only">Skills</h2>
      <ul className="border-b border-line">
        {skillGroups.map((group) => (
          <li
            key={group.label}
            className="group relative overflow-hidden border-t border-line"
          >
            <span
              aria-hidden
              className="absolute inset-0 origin-bottom scale-y-0 bg-ink transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100"
            />
            <div className="relative flex flex-col gap-3 py-8 transition-colors duration-500 group-hover:text-paper sm:flex-row sm:items-baseline sm:justify-between sm:gap-10 sm:px-2">
              <h3 className="text-[clamp(2.4rem,6vw,5rem)] font-semibold leading-none tracking-[-0.035em]">
                {group.label}
              </h3>
              <p className="max-w-md font-serif text-xl leading-snug opacity-70 sm:text-right sm:text-2xl">
                {group.items.join(", ")}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
