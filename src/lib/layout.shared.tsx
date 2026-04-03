import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="font-bold text-base">
          ScaleReach API
        </span>
      ),
    },
    links: [
      {
        text: 'Dashboard',
        url: 'https://app.scalereach.ai',
      },
      {
        text: 'Get API Key',
        url: 'https://app.scalereach.ai/settings/api-keys',
      },
    ],
  };
}
