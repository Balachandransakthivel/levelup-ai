import { X, Star, Code2, Users, Clock } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  skills: string[];
  objectives: string[];
  teamSize: number;
}

interface ProjectSuggestionsProps {
  isOpen: boolean;
  onClose: () => void;
  projects: Project[];
  topic: string;
}

const difficultyColors = {
  beginner: 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300',
  intermediate: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300',
  advanced: 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300',
};

export function ProjectSuggestions({ isOpen, onClose, projects, topic }: ProjectSuggestionsProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {topic} Projects
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Build real-world projects to strengthen your skills
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition"
          >
            <X className="w-5 h-5 dark:text-gray-300" />
          </button>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="border border-gray-200 dark:border-gray-700 rounded-xl p-5 hover:shadow-lg dark:hover:shadow-xl hover:shadow-gray-300 dark:hover:shadow-gray-800 transition"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {project.description}
                    </p>
                  </div>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap ml-3 ${
                    difficultyColors[project.difficulty]
                  }`}>
                    {project.difficulty.charAt(0).toUpperCase() + project.difficulty.slice(1)}
                  </span>
                </div>

                <div className="flex flex-wrap gap-3 mb-4">
                  <div className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                    <Clock className="w-4 h-4" />
                    {project.duration}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                    <Users className="w-4 h-4" />
                    {project.teamSize === 1 ? 'Individual' : `Team of ${project.teamSize}`}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                    <Code2 className="w-4 h-4" />
                    {project.skills.length} Skills
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Skills you'll learn:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Key Objectives:
                  </p>
                  <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                    {project.objectives.slice(0, 3).map((obj, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-blue-600 dark:text-blue-400 mt-0.5">•</span>
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 rounded-lg transition">
                  Start This Project
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
