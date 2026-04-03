import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="ScaleReach" width={24} height={24} />
          <span className="font-semibold">ScaleReach API</span>
        </div>
      ),
    },
    links: [
      {
        text: 'Dashboard',
        url: 'https://app.scalereach.ai',
      },
      {
        text: 'Get API Key',
        url: 'https://app.scalereach.ai',
      },
    ],
  };
}
