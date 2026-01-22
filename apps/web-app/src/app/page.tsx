import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/features/homepage/components/HeroSection';
import { AppSection } from '@/features/homepage/components/AppSection';
import { FeaturedAppSection } from '@/features/homepage/components/FeaturedAppSection';
import { apps } from '@/features/homepage/data/apps';

export default function Home() {
  const featuredApps = apps.filter((app) => app.isFeatured);
  const regularApps = apps.filter((app) => !app.isFeatured);

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <div id="apps">
          {featuredApps.map((app) => (
            <FeaturedAppSection key={app.id} app={app} />
          ))}
          {regularApps.map((app, index) => (
            <AppSection key={app.id} app={app} index={index} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
