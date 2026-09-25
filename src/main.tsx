import { createDashboardRouter, InstituteOverviewPage, PlatformProvider } from './shared';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import './index.css';
import { portalConfig } from './portal';

const router = createDashboardRouter({ home: <InstituteOverviewPage /> });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PlatformProvider config={portalConfig}>
      <RouterProvider router={router} />
    </PlatformProvider>
  </StrictMode>,
);
