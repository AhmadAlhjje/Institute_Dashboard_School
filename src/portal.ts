import type { PortalConfig } from './shared';
import {
  BellRing,
  BookOpen,
  FolderTree,
  KeyRound,
  LayoutDashboard,
  Layers,
  UserRound,
  Users,
  UserSquare2,
} from 'lucide-react';

/** Institute owner dashboard (spec §76). */
export const portalConfig: PortalConfig = {
  portal: 'OWNER_WEB',
  role: 'OWNER',
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:4000',
  nav: [
    { to: '/', labelKey: 'dashboard', icon: LayoutDashboard, end: true },
    { to: '/students', labelKey: 'students', icon: Users },
    { to: '/teachers', labelKey: 'teachers', icon: UserSquare2 },
    { to: '/grades', labelKey: 'grades', icon: Layers },
    { to: '/subjects', labelKey: 'subjects', icon: BookOpen },
    { to: '/content', labelKey: 'content', icon: FolderTree },
    { to: '/access', labelKey: 'access', icon: KeyRound },
    { to: '/notifications', labelKey: 'notifications', icon: BellRing },
    { to: '/profile', labelKey: 'profile', icon: UserRound },
  ],
};
