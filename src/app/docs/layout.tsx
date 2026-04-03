import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout
      tree={source.getPageTree()}
      {...baseOptions()}
      sidebar={{
        footer: (
          <div className="text-xs text-fd-muted-foreground px-2 pb-2">
            © {new Date().getFullYear()} ScaleReach
          </div>
        ),
        components: {
          ThemeToggle: () => null,
        },
      }}
    >
      {children}
    </DocsLayout>
  );
}
