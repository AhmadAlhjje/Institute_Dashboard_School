import i18n from 'i18next';
import { describe, expect, it } from 'vitest';
import { portalConfig } from '../src/portal';

describe('institute owner dashboard configuration', () => {
  it('signs in through the owner portal', () => {
    expect(portalConfig.portal).toBe('OWNER_WEB');
    expect(portalConfig.role).toBe('OWNER');
  });

  it('matches the owner sidebar from the spec and hides system administration', () => {
    expect(portalConfig.nav.map((item) => item.to)).toEqual([
      '/',
      '/students',
      '/teachers',
      '/grades',
      '/subjects',
      '/content',
      '/access',
      '/notifications',
      '/profile',
    ]);
    for (const adminOnly of ['/devices', '/audit-logs', '/settings', '/owner']) {
      expect(portalConfig.nav.some((item) => item.to === adminOnly)).toBe(false);
    }
  });

  it('has an Arabic and English label for every navigation item', () => {
    for (const item of portalConfig.nav) {
      expect(i18n.getFixedT('ar')(`nav.${item.labelKey}`)).not.toBe(`nav.${item.labelKey}`);
      expect(i18n.getFixedT('en')(`nav.${item.labelKey}`)).not.toBe(`nav.${item.labelKey}`);
    }
  });
});
