import { ExternalLink, Youtube, Link2 } from 'lucide-react';

interface Reference {
  title: string;
  url: string;
  type: 'youtube' | 'website' | 'documentation';
}

interface ExplanationCardProps {
  title: string;
  summary: string;
  details: string[];
  visualization?: string;
  references?: Reference[];
}

export function ExplanationCard({
  title,
  summary,
  details,
  visualization,
  references,
}: ExplanationCardProps) {
  const getReferenceIcon = (type: string) => {
    switch (type) {
      case 'youtube':
        return <Youtube className="w-4 h-4" />;
      case 'website':
        return <Link2 className="w-4 h-4" />;
      case 'documentation':
        return <ExternalLink className="w-4 h-4" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-4 my-4">
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-5 border border-blue-100 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
          {title}
        </h3>

        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          {summary}
        </p>

        {details.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Key Points:</p>
            <ul className="space-y-2">
              {details.map((detail, idx) => (
                <li key={idx} className="flex gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {visualization && (
          <div className="mt-4 p-3 bg-white dark:bg-gray-950 rounded-lg">
            <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">Visual Diagram:</p>
            <div className="text-center">
              <code className="text-xs text-gray-600 dark:text-gray-400 whitespace-pre-wrap">
                {visualization}
              </code>
            </div>
          </div>
        )}

        {references && references.length > 0 && (
          <div className="mt-4 pt-4 border-t border-blue-200 dark:border-gray-700">
            <p className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-3">
              Learn More:
            </p>
            <div className="space-y-2">
              {references.map((ref, idx) => (
                <a
                  key={idx}
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 rounded-lg bg-white dark:bg-gray-950 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                >
                  <div className="text-blue-600 dark:text-blue-400">
                    {getReferenceIcon(ref.type)}
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300 flex-1 truncate">
                    {ref.title}
                  </span>
                  <ExternalLink className="w-3 h-3 text-gray-400 flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
