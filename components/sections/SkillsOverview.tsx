import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { skillGroups } from "@/lib/data/skills";

type SkillsOverviewProps = {
  showHeader?: boolean;
};

export function SkillsOverview({ showHeader = true }: SkillsOverviewProps) {
  return (
    <section className={showHeader ? "mt-16" : ""}>
      {showHeader ? (
        <SectionHeader
          description="Phase 1 uses the content plan skills as placeholders. The content phase can add proficiency levels or project evidence links where useful."
          eyebrow="Skills"
          level="h2"
          title="Cybersecurity skills grouped by role relevance"
        />
      ) : null}
      <div className={showHeader ? "mt-8 grid gap-6" : "grid gap-6"}>
        {skillGroups.map((group) => (
          <Card as="section" key={group.title}>
            <h2 className="heading-text text-xl">{group.title}</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
