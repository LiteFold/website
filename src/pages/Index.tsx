
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <main className="flex flex-col items-center justify-center text-center w-full max-w-xl mx-auto">
        <h1 className="mb-4 text-5xl md:text-6xl font-playfair font-bold text-black/90 leading-tight tracking-tighter">
          <span className="block text-[#181E3C]">SemanticSearch</span>
          <span className="mt-2 block text-blue-600 font-sans text-2xl font-semibold tracking-wide">Making OpenScience more accessible</span>
        </h1>
        <section className="my-8">
          <h2 className="font-playfair text-xl md:text-2xl font-bold text-black mb-2">About LiteFold</h2>
          <p className="text-base md:text-lg font-sans text-black/70 leading-relaxed">
            LiteFold is an open-source web server for protein folding <br/>
            and interactive scientific research.
          </p>
        </section>
        <div className="flex space-x-4 justify-center">
          <Button
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-base font-semibold font-sans shadow transition hover:scale-105"
            onClick={() => window.open("https://anindya.bearblog.dev/blogs", "_blank")}
          >
            Read Blog Posts
          </Button>
          <Button
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-base font-semibold font-sans shadow transition hover:scale-105"
            onClick={() => {
              window.open("https://litefold.vercel.app", "_blank")
              window.open("https://github.com/Anindyadeep/litefold", "_blank")
            }}
          >
            Explore LiteFold
          </Button>
        </div>
        <div className="mt-10 text-gray-400 text-sm font-sans select-none">Coming soon</div>
      </main>
    </div>
  );
};

export default Index;

