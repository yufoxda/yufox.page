import SkillCard from "./skilCardsWithLevel";

type Skill = {
  name: string;
  level: 1 | 2 | 3 | 4 | 5;
};

export default function Skills() {
  const skills: Skill[] = [
    { name: "Next.js", level: 2 },
    { name: "Python", level: 3 },
    { name: "Git", level: 3 },
    { name: "C", level: 2 },
    { name: "Unity", level: 2 },
    { name: "Blender", level: 3 },
    { name: "Siv3D", level: 2 },
    { name: "Ubuntu", level: 1 },
    { name: "Nix", level: 1 },
  ];

  return (
    <section id="skills" className="mb-16">
    <div className="flex items-baseline">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
        Skills
      </h2>
      <p className="pl-3 text-gray-600 dark:text-gray-300">基準</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <SkillCard key={skill.name} name={skill.name} level={skill.level} />
        ))}
      </div>
    </section>
  );
}