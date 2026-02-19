import { Outlet } from '@tanstack/react-router';

export function Layout() {
  return (
    <div className="min-h-screen relative bg-pink-50">
      <div className="floating-hearts-bg" />
      <Outlet />
      <footer className="text-center py-6 text-sm text-gray-600">
        <p>
          Built with <span className="text-pink-500">❤️</span> using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
              typeof window !== 'undefined' ? window.location.hostname : 'romantic-website'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:underline"
          >
            caffeine.ai
          </a>
        </p>
        <p className="mt-1">© {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
