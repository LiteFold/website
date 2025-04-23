
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <main className="flex flex-col items-center justify-center text-center w-full">
        <h1
          className="font-playfair font-bold text-4xl sm:text-5xl md:text-6xl text-black tracking-tighter mb-2"
        >
          Making <span className="text-[#0EA5E9]">OpenScience</span>
          <br className="hidden sm:block" />
          more accessible
        </h1>
        <div className="inline-block bg-blue-50 text-[#0EA5E9] px-4 py-2 rounded-full text-base font-medium mt-6 mb-2 tracking-tight">
          Coming soon
        </div>
        <Button
          className="mt-8 bg-[#0EA5E9] hover:bg-[#33C3F0] text-white px-8 py-3 rounded-full text-lg font-semibold font-sans shadow transition"
          onClick={() => window.open("https://anindya.bearblog.dev/blogs", "_blank")}
        >
          Read Blog Posts
        </Button>
      </main>
    </div>
  );
};

export default Index;

