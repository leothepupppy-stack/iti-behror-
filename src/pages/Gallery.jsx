import { useLanguage } from '../context/LanguageContext.jsx';
import { GALLERY_IMAGES } from '../data/gallery.js';
import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import GalleryGrid from '../components/GalleryGrid.jsx';
import EmptyState from '../components/EmptyState.jsx';

export default function Gallery() {
  const { t } = useLanguage();

  return (
    <>
      <Seo page="gallery" />
      <PageHero title={t('pages.gallery.title')} intro={t('pages.gallery.intro')} />

      <section className="section">
        <div className="container">
          {GALLERY_IMAGES.length > 0 ? (
            <Reveal>
              <GalleryGrid />
            </Reveal>
          ) : (
            <EmptyState title={t('gallery.emptyTitle')} text={t('gallery.emptyText')} />
          )}
        </div>
      </section>
    </>
  );
}
