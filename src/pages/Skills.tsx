function Skills() {
  const skills = [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Git / GitHub",
    "VPS (Ubuntu)",
    "CI/CD (GitHub Actions)"
  ]

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-center mb-10">
        Skills
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill}
            className="p-6 border rounded-xl shadow hover:shadow-lg transition"
          >
            <p className="text-center font-semibold">
              {skill}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
