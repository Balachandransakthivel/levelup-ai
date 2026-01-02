import { X, CheckCircle, Circle } from 'lucide-react';

interface RoadmapStep {
  id: string;
  title: string;
  duration: string;
  topics: string[];
  completed?: boolean;
}

interface RoadmapViewerProps {
  isOpen: boolean;
  onClose: () => void;
  roadmapTitle: string;
  steps: RoadmapStep[];
}

export function RoadmapViewer({ isOpen, onClose, roadmapTitle, steps }: RoadmapViewerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{roadmapTitle}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Step-by-step learning path</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition"
          >
            <X className="w-5 h-5 dark:text-gray-300" />
          </button>
        </div>

        <div className="p-6">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={step.id} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className={`rounded-full p-2 ${step.completed ? 'bg-green-100 dark:bg-green-900' : 'bg-blue-100 dark:bg-blue-900'}`}>
                    {step.completed ? (
                      <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                    ) : (
                      <Circle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    )}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-1 h-12 bg-gray-200 dark:bg-gray-700 my-2" />
                  )}
                </div>

                <div className="flex-1 pb-4">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {step.title}
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          Duration: {step.duration}
                        </p>
                      </div>
                      <span className="text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">
                        Step {index + 1}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {step.topics.map((topic) => (
                        <span
                          key={topic}
                          className="text-xs bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
