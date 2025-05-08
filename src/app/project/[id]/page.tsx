import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import projects from "@/data/projects.json";

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolve = await params;
  const { id } = resolve;
  const project = projects.find((p) => p.id === Number(id));

  if (!project) return <div className="p-6 text-center">Project not found</div>;

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Project Header */}
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          {project.title}
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          {project.description}
        </p>
      </div>

      {/* Project Links */}
      <div className="flex flex-wrap gap-4">
        <a
          href={project.link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
        >
          <TbWorld size={18} />
          Live Demo
        </a>
        {project.link.githubLink && (
          <a
            href={project.link.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors"
          >
            <FaGithub size={18} />
            View Code
          </a>
        )}
      </div>

      {/* Project Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {project.thumbnail.map((img, index) => (
          <div
            key={index}
            className="relative aspect-video rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700"
          >
            <Image
              src={img}
              alt={`${project.title} screenshot ${index + 1}`}
              fill
              className="object-cover"
              quality={100}
            />
          </div>
        ))}
      </div>

      {/* Project Details Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Key Features */}
        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
          <h2 className="text-xl font-semibold mb-4 text-blue-500">
            Key Features
          </h2>
          <ul className="space-y-2">
            {project.keyFeatures.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                <span className="text-gray-700 dark:text-gray-300">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Challenges Faced */}
        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
          <h2 className="text-xl font-semibold mb-4 text-blue-500">
            Challenges Faced
          </h2>
          <ul className="space-y-2">
            {project.challengesFaced.map((challenge, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                <span className="text-gray-700 dark:text-gray-300">
                  {challenge}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Future Plans */}
        {project.futurePlans && (
          <div className="lg:col-span-2 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <h2 className="text-xl font-semibold mb-4 text-blue-500">
              Future Plans
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.futurePlans.map((plan, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {plan}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Technology Stack */}
      <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
        <h2 className="text-xl font-semibold mb-4 text-blue-500">
          Technology Stack
        </h2>
        <div className="flex flex-wrap gap-4">
          {project.languageIcons.map((icon, index) => (
            <div key={index} className="p-2 bg-white/10 rounded-lg">
              <Image
                src={icon}
                alt="Technology icon"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
