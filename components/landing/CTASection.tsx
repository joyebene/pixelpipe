import Button from '../shared/Button';

const CTASection = () => {
  return (
    <div className="pb-32 pt-10 md:py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to ship faster?
        </h2>
        <p className="text-sm sm:text-lg md:text-xl text-slate-400 mb-10">
          Join thousands of developers using PixelPipe to streamline their workflow
        </p>
        <Button href="/signup" size="lg" className="shadow-xl shadow-blue-500/20">
          Get Started for Free
        </Button>
      </div>
    </div>
  );
};

export default CTASection;