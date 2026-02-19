import { RouterProvider, createRouter, createRootRoute, createRoute } from '@tanstack/react-router';
import { Layout } from './components/Layout';
import { LandingPage } from './pages/LandingPage';
import { MemoriesPage } from './pages/MemoriesPage';
import { UnderstandingPage } from './pages/UnderstandingPage';
import { OneChancePage } from './pages/OneChancePage';
import { GamePage } from './pages/GamePage';
import { FinalPage } from './pages/FinalPage';

const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: LandingPage,
});

const memoriesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/memories',
  component: MemoriesPage,
});

const understandingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/understanding',
  component: UnderstandingPage,
});

const oneChanceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/one-chance',
  component: OneChancePage,
});

const gameRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/game',
  component: GamePage,
});

const finalRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/final',
  component: FinalPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  memoriesRoute,
  understandingRoute,
  oneChanceRoute,
  gameRoute,
  finalRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
