import ProjectsList from '@/app/ProjectsList';

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="row-start-2 w-full max-w-6xl mx-auto">
        <ProjectsList />
      </main>
    </div>
  );
}