import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/features/homepage/components/HeroSection';
import { AppSection } from '@/features/homepage/components/AppSection';
import { apps } from '@/features/homepage/data/apps';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <div id="apps">
          {apps.map((app, index) => (
            <AppSection key={app.id} app={app} index={index} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
