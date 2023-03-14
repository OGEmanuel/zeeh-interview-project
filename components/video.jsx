import { useRef } from 'react';
import useRevealSection from './hooks/use-reveal-section';
import CTAMain from './UI/cta-main';

const Video = () => {
  const ref = useRef();
  const { display } = useRevealSection(ref);
  return (
    <section
      ref={ref}
      className={`mb-20 animate-in ${display ? '' : 'section-hidden'}`}
    >
      <h4 className="h4">WATCH THIS VIDEO TO LEARN MORE ABOUT OUR PRODUCT</h4>
      <div className="px-20 mb-10">
        <iframe
          src="https://youtube.com/embed/mzZt6faN8wo"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
          frameBorder="0"
          className="h-[35.0625rem] w-full"
        />
      </div>
      <CTAMain />
    </section>
  );
};

export default Video;
