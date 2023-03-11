import CTAMain from './UI/cta-main';

const Video = () => {
  return (
    <section>
      <h4 className="h4">WATCH THIS VIDEO TO LEARN MORE ABOUT OUR PRODUCT</h4>
      <div className="w-full mb-10">
        <iframe
          src="https://youtube.com/embed/mzZt6faN8wo"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
          frameborder="0"
          className="w-[87%] h-[35.0625rem] mx-auto"
        />
      </div>
      <CTAMain />
    </section>
  );
};

export default Video;
