import { useState, useEffect } from 'react';
import { ChevronDown, GitCommit, Trash2 } from 'lucide-react';

interface PushItem {
  id: string;
  repo: string;
  message: string;
  date: string;
  sha: string;
  deletions: number;
}

export default function GithubPushFeed({ username }: { username: string }) {
  const [pushes, setPushes] = useState<PushItem[]>([]);
  const [openId, setOpenId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPushHistory() {
      try {

        const eventsRes = await fetch(`https://github.com{username}/events/public`);
        const events = await eventsRes.json();


        const recentPushEvents = events
          .filter((e: any) => e.type === 'PushEvent' && e.payload.commits?.length > 0)
          .slice(0, 4);


        const detailedPushes = await Promise.all(
          recentPushEvents.map(async (event: any) => {
            const latestCommit = event.payload.commits[event.payload.commits.length - 1];
            const repoName = event.repo.name;

            const commitRes = await fetch(
              `https://github.com{repoName}/commits/${latestCommit.sha}`
            );

            const commitData = await commitRes.json();

            return {
              id: event.id,
              repo: repoName.split('/')[1], 
              message: latestCommit.message,
              date: new Date(event.created_at).toLocaleDateString(),
              sha: latestCommit.sha.substring(0, 7),
              deletions: commitData.stats?.deletions ?? 0,
            };
          })
        );

        setPushes(detailedPushes);
      } catch (error) {
        console.error('Failed to fetch GitHub pushes:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchPushHistory();
  }, [username]);

  const toggleDropdown = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  if (loading) {
    return <div className="text-neutral-400 text-sm">Loading recent pushes...</div>;
  }

  return (
    <div className="w-full max-w-xl space-y-3">
      {pushes.map((push) => {
        const isOpen = openId === push.id;

        return (
          <div
            key={push.id}
            className="bg-[#0F0F0F] border border-neutral-800 rounded-lg overflow-hidden transition-colors hover:border-neutral-700"
          >

            <button
              onClick={() => toggleDropdown(push.id)}
              className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
            >
              <div className="flex items-center gap-3 min-w-0">
                <GitCommit className="w-5 h-5 text-emerald-400 shrink-0" />
                <div className="truncate">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-neutral-800 text-neutral-300">
                      {push.repo}
                    </span>
                    <span className="text-xs text-neutral-500">{push.date}</span>
                  </div>
                  <p className="text-sm text-neutral-200 font-medium truncate mt-1">
                    {push.message}
                  </p>
                </div>
              </div>

              <ChevronDown
                className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                  }`}
              />
            </button>

            {isOpen && (
              <div className="px-4 pb-4 pt-2 border-t border-neutral-800/80 bg-neutral-900/40 flex items-center justify-between text-xs">
                <span className="text-neutral-400 font-mono">Commit: {push.sha}</span>
                <div className="flex items-center gap-1.5 text-red-400 font-medium">
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>{push.deletions} deletions</span>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
