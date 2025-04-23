
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Database, FileCode } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="py-6 px-4 sm:px-6 lg:px-8 border-b">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-black tracking-tight">
            <span className="text-[#0EA5E9]">Semantic</span>Search
          </h1>
          <nav className="hidden sm:flex space-x-8">
            <a href="#research" className="text-black hover:text-[#0EA5E9] transition-colors font-medium">Research</a>
            <a href="#projects" className="text-black hover:text-[#0EA5E9] transition-colors font-medium">Projects</a>
            <a href="#blog" className="text-black hover:text-[#0EA5E9] transition-colors font-medium">Blog</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center max-w-3xl">
          <div className="inline-block bg-blue-50 text-[#0EA5E9] px-4 py-2 rounded-full text-sm font-medium mb-6">
            Coming Soon
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
            Advancing Protein Research Through <span className="text-[#0EA5E9]">Semantic Search</span>
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Exploring the intersection of machine learning, semantic analysis, and protein folding research to unlock new scientific discoveries.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-[#0EA5E9] hover:bg-[#33C3F0] text-white">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-[#0EA5E9] text-[#0EA5E9]">
              Subscribe for Updates
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Current Projects</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our groundbreaking research initiatives focused on advancing the field of structural biology and semantic search.
            </p>
          </div>

          <Card className="p-6 border-2 border-[#0EA5E9]/10 shadow-lg">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-lg bg-blue-50 text-[#0EA5E9]">
                <FileCode size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-black mb-2">LiteFold</h3>
                <p className="text-gray-700 mb-4">
                  An open-source protein folding web server featuring interactive visualizations that enable researchers to analyze protein structures with unprecedented clarity and insight.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-50 text-[#0EA5E9] px-3 py-1 rounded-full text-xs font-medium">Open Source</span>
                  <span className="bg-blue-50 text-[#0EA5E9] px-3 py-1 rounded-full text-xs font-medium">Protein Folding</span>
                  <span className="bg-blue-50 text-[#0EA5E9] px-3 py-1 rounded-full text-xs font-medium">Interactive Visualization</span>
                </div>
                <Button variant="link" className="text-[#0EA5E9] p-0 h-auto font-medium">
                  Project Coming Soon <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-gray-500 italic">More research projects coming soon...</p>
          </div>
        </div>
      </section>

      {/* Research Focus */}
      <section id="research" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-black mb-4">Our Research Focus</h2>
              <p className="text-gray-700 mb-6">
                We're developing cutting-edge tools that combine semantic search capabilities with structural biology analysis to accelerate scientific discovery.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center text-[#0EA5E9] mr-3">
                    <span className="text-sm font-medium">1</span>
                  </div>
                  <p className="text-gray-700">Advanced protein structure prediction using machine learning algorithms</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center text-[#0EA5E9] mr-3">
                    <span className="text-sm font-medium">2</span>
                  </div>
                  <p className="text-gray-700">Semantic analysis of scientific literature to identify novel connections</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center text-[#0EA5E9] mr-3">
                    <span className="text-sm font-medium">3</span>
                  </div>
                  <p className="text-gray-700">Interactive visualization tools for complex protein structures</p>
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 h-64 md:h-80 rounded-lg flex items-center justify-center">
              <div className="text-center px-6">
                <Database className="h-12 w-12 text-[#0EA5E9] mx-auto mb-4" />
                <p className="text-gray-500 font-medium">
                  Research visualization coming soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Latest Insights</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Explore our latest thoughts, research findings, and industry insights on our blog.
            </p>
          </div>
          
          <Card className="p-6 flex flex-col items-center text-center">
            <h3 className="text-xl font-bold text-black mb-4">Visit Our Blog</h3>
            <p className="text-gray-700 mb-6">
              Our blog posts are hosted externally, where we share our research progress, insights, and discoveries.
            </p>
            <Button 
              className="bg-[#0EA5E9] hover:bg-[#33C3F0] text-white"
              onClick={() => window.open("https://anindya.bearblog.dev/blogs", "_blank")}
            >
              Read Our Blog Posts
            </Button>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-xl font-semibold text-black">
                <span className="text-[#0EA5E9]">Semantic</span>Search
              </h2>
              <p className="text-gray-500 mt-1">Advancing protein research through semantic analysis</p>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <p className="text-gray-500 mb-2">Contact us</p>
              <a href="mailto:contact@semanticsearch.org" className="text-[#0EA5E9] hover:underline">
                contact@semanticsearch.org
              </a>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} SemanticSearch. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
