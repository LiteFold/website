
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, FileCode } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="py-6 px-4 sm:px-6 lg:px-8 border-b bg-white">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-black">
            Semantic
            <span className="text-[#0EA5E9] ml-1">Search</span>
          </h1>
        </div>
      </header>

      {/* Hero: minimal, centered, poetic */}
      <section className="flex flex-col items-center justify-center py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <img
          src="/lovable-uploads/38a55bfe-2550-436e-ab80-dbbfc89f893b.png"
          alt="Know it all"
          className="w-52 sm:w-64 rounded-lg shadow-none mb-6"
          style={{ objectFit: "cover" }}
        />
        <div className="text-center mb-5">
          <h2
            className="font-[Playfair] font-bold text-4xl md:text-5xl text-black mb-2"
            style={{
              fontFamily: "'Playfair Display', serif",
              letterSpacing: "-0.02em",
              lineHeight: "1.05",
            }}
          >
            Know it <span className="italic text-[#0EA5E9]">all</span>
          </h2>
          <p className="text-[#0EA5E9] text-lg sm:text-xl font-medium tracking-tight mt-3">
            Making OpenScience more accessible
          </p>
          <div className="inline-block bg-blue-50 text-[#0EA5E9] px-4 py-2 rounded-full text-sm font-medium mt-6">
            Coming Soon
          </div>
        </div>
      </section>

      {/* Project Section: LiteFold */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-2xl">
          <Card className="p-6 border-[#0EA5E9]/15 shadow-none">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-blue-50 text-[#0EA5E9]">
                <FileCode size={28} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-black mb-1 tracking-tight">LiteFold</h3>
                <div className="flex gap-2 mb-2">
                  <span className="bg-blue-50 text-[#0EA5E9] px-2 py-0.5 rounded-full text-xs font-medium">Open Source</span>
                  <span className="bg-blue-50 text-[#0EA5E9] px-2 py-0.5 rounded-full text-xs font-medium">Protein Folding</span>
                </div>
                <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                  An open-source protein folding web server with interactive visualizations.
                </p>
                <Button variant="link" className="text-[#0EA5E9] p-0 h-auto font-medium">
                  Project Coming Soon <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-2xl">
          <Card className="p-6 flex flex-col items-center text-center shadow-none border-[#0EA5E9]/10">
            <h3 className="text-lg font-bold text-black mb-2">Blog</h3>
            <p className="text-gray-700 mb-4 text-sm">
              Read ideas, progress, and updates on our journey in OpenScience.
            </p>
            <Button
              className="bg-[#0EA5E9] hover:bg-[#33C3F0] text-white"
              onClick={() => window.open("https://anindya.bearblog.dev/blogs", "_blank")}
            >
              Read Blog Posts
            </Button>
          </Card>
        </div>
      </section>

      {/* Footer, minimal */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t bg-white">
        <div className="container mx-auto text-center">
          <span className="block text-base font-semibold text-black">
            Semantic<span className="text-[#0EA5E9]">Search</span>
          </span>
          <span className="block text-gray-400 mt-2 text-xs">
            &copy; {new Date().getFullYear()} Making OpenScience more accessible.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
