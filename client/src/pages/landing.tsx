import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Quote, Code, BookOpen, Users, BarChart3, Target } from "lucide-react";
import { CitationModal } from "@/components/citation-modal";
import { Footer } from "@/components/footer";

export default function Landing() {
  const [showCitation, setShowCitation] = useState(false);

  const handleDownloadPaper = () => {
    alert('PDF download functionality would be implemented here');
  };

  const handleViewCode = () => {
    window.open('https://github.com/placeholder/eduvlm-bench', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-crimson mb-6" style={{ color: 'var(--academic-blue)' }}>
              EduVLM-Bench
            </h1>
            <h2 className="text-2xl md:text-3xl font-crimson mb-6" style={{ color: 'var(--dark-slate)' }}>
              A Multimodal Benchmark for Educational Concept Learning
            </h2>
            <p className="text-lg max-w-4xl mx-auto leading-relaxed" style={{ color: 'var(--slate-grey)' }}>
              A novel framework to evaluate vision-language models (VLMs) on educational reasoning tasks through concept prerequisite identification, error analysis, and learning path generation.
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-[var(--light-grey)] border-0">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold mb-2" style={{ color: 'var(--success-emerald)' }}>82.6%</div>
                <div className="font-medium" style={{ color: 'var(--slate-grey)' }}>Concept Recall Rate</div>
                <div className="text-sm mt-2" style={{ color: 'var(--slate-grey)' }}>
                  Annotators accurately mapped student errors to missing prerequisite concepts
                </div>
              </CardContent>
            </Card>
            <Card className="bg-[var(--light-grey)] border-0">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold mb-2" style={{ color: 'var(--academic-blue)' }}>74.3%</div>
                <div className="font-medium" style={{ color: 'var(--slate-grey)' }}>Model Prerequisite Identification</div>
                <div className="text-sm mt-2" style={{ color: 'var(--slate-grey)' }}>
                  Top-performing models successfully identified relevant missing concepts
                </div>
              </CardContent>
            </Card>
            <Card className="bg-[var(--light-grey)] border-0">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold mb-2" style={{ color: 'var(--accent-amber)' }}>61.7%</div>
                <div className="font-medium" style={{ color: 'var(--slate-grey)' }}>Learning Path Quality Score</div>
                <div className="text-sm mt-2" style={{ color: 'var(--slate-grey)' }}>
                  Generated learning paths showed promising structure for conceptual coverage
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleDownloadPaper}
              className="bg-[var(--academic-blue)] text-white hover:bg-blue-700 transition-colors font-medium px-8 py-3"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Paper
            </Button>
            <Button 
              onClick={() => setShowCitation(true)}
              variant="outline"
              className="border-gray-300 text-[var(--dark-slate)] hover:bg-gray-200 transition-colors font-medium px-8 py-3"
            >
              <Quote className="mr-2 h-4 w-4" />
              Generate Citation
            </Button>
            <Button 
              onClick={handleViewCode}
              variant="outline"
              className="border-gray-300 text-[var(--dark-slate)] hover:bg-gray-200 transition-colors font-medium px-8 py-3"
            >
              <Code className="mr-2 h-4 w-4" />
              View Code
            </Button>
          </div>
        </div>
      </section>

      {/* Abstract Section */}
      <section className="py-16 bg-[var(--light-grey)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-crimson mb-8 text-center" style={{ color: 'var(--academic-blue)' }}>
            Abstract
          </h2>
          <Card className="bg-white shadow-sm">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed mb-4" style={{ color: 'var(--dark-slate)' }}>
                We introduce <strong>EduVLM-Bench</strong>, a multimodal benchmark designed to evaluate educational concept understanding in Vision-Language Models (VLMs). Our framework focuses on identifying prerequisite concepts necessary for solving math and English problems, especially when a model or student fails to produce the correct answer.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--dark-slate)' }}>
                Using structured human-AI tutoring interactions and expert-generated concept maps, we explore the capability of models to bridge the gap between confusion and conceptual clarity. Evaluations span across common error types, prerequisite inference, and guided learning trajectory generation, with models ranging from 2B to 7B parameters, including Gemini 2.0 Flash.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Authors Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-crimson mb-8 text-center" style={{ color: 'var(--academic-blue)' }}>
            Authors
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Arka Mukerjee", role: "Lead Researcher" },
              { name: "Sriram P", role: "BE. CSE, Annamalai University" },
              { name: "Abhishekh Padhypalli", role: "Research Contributor" },
              { name: "Nilam Bhojwani", role: "Research Contributor" }
            ].map((author, index) => (
              <Card key={index} className="bg-[var(--light-grey)] border-0">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4">
                    <Users className="w-10 h-10 text-gray-500 mx-auto mt-5" />
                  </div>
                  <h3 className="font-semibold" style={{ color: 'var(--dark-slate)' }}>{author.name}</h3>
                  <p className="text-sm" style={{ color: 'var(--slate-grey)' }}>{author.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-16 bg-[var(--light-grey)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-crimson mb-12 text-center" style={{ color: 'var(--academic-blue)' }}>
            Methodology
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-[var(--academic-blue)] rounded-lg flex items-center justify-center mb-6">
                  <BookOpen className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--dark-slate)' }}>
                  Concept Taxonomy Building
                </h3>
                <ul className="space-y-2 text-sm" style={{ color: 'var(--slate-grey)' }}>
                  <li>• Use GPT-4 with domain expert review to construct detailed concept maps</li>
                  <li>• Establish concept hierarchies and dependency paths</li>
                  <li>• Focus on math and English tasks (starting with GSM-8K)</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-[var(--accent-amber)] rounded-lg flex items-center justify-center mb-6">
                  <Target className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--dark-slate)' }}>
                  Error-Prerequisite Mapping
                </h3>
                <ul className="space-y-2 text-sm" style={{ color: 'var(--slate-grey)' }}>
                  <li>• Simulate common student mistakes using LLMs</li>
                  <li>• Collect wide range of incorrect answers for each problem</li>
                  <li>• Human teachers annotate missing prerequisite concepts</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-[var(--success-emerald)] rounded-lg flex items-center justify-center mb-6">
                  <BarChart3 className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--dark-slate)' }}>
                  Benchmark Construction
                </h3>
                <ul className="space-y-2 text-sm" style={{ color: 'var(--slate-grey)' }}>
                  <li>• Input: Problem statement + Incorrect model response</li>
                  <li>• Task: Identify top-k missing prerequisites</li>
                  <li>• Evaluation: Precision, recall, and alignment metrics</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Gallery */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-crimson mb-12 text-center" style={{ color: 'var(--academic-blue)' }}>
            Research Gallery
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
                title: "Concept Maps",
                description: "Visual hierarchies outlining foundational and dependent concepts in math reasoning."
              },
              {
                image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
                title: "Tutoring Demo",
                description: "Live interaction between a human teacher and an AI student, showcasing confusion resolution."
              },
              {
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
                title: "Model Evaluations",
                description: "Comparative analytics for 2B, 4B, 7B, and Gemini models across prerequisite detection tasks."
              },
              {
                image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
                title: "Learning Path Generator",
                description: "Visualization of steps needed to guide the model from incorrect to correct understanding."
              }
            ].map((item, index) => (
              <Card key={index} className="bg-[var(--light-grey)] border-0 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--dark-slate)' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--slate-grey)' }}>
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Analysis */}
      <section className="py-16 bg-[var(--light-grey)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-crimson mb-12 text-center" style={{ color: 'var(--academic-blue)' }}>
            Performance Analysis
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-white">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6" style={{ color: 'var(--dark-slate)' }}>
                  Model Comparison
                </h3>
                <p className="mb-4" style={{ color: 'var(--slate-grey)' }}>
                  Flan T5 250M outperformed GPT-3.5 in zero-shot confusion handling. Larger models (7B and above) showed more robust error mapping but with diminishing returns on visual tasks.
                </p>
                <div className="space-y-3">
                  {[
                    { name: "Flan T5 250M", percentage: 78, color: "var(--success-emerald)" },
                    { name: "GPT-3.5", percentage: 65, color: "var(--academic-blue)" },
                    { name: "Gemini 2.0 Flash", percentage: 74, color: "var(--accent-amber)" }
                  ].map((model, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm" style={{ color: 'var(--slate-grey)' }}>{model.name}</span>
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div 
                          className="h-2 rounded-full" 
                          style={{ 
                            width: `${model.percentage}%`,
                            backgroundColor: model.color
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6" style={{ color: 'var(--dark-slate)' }}>
                  Scaling Effects
                </h3>
                <p className="mb-6" style={{ color: 'var(--slate-grey)' }}>
                  While larger models show overall improvement, precision in prerequisite detection plateaus, suggesting the need for more targeted training.
                </p>
                <div className="bg-[var(--light-grey)] rounded-lg p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold" style={{ color: 'var(--academic-blue)' }}>85.2%</div>
                    <div className="text-sm" style={{ color: 'var(--slate-grey)' }}>Peak Performance (7B Models)</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CitationModal open={showCitation} onOpenChange={setShowCitation} />
      <Footer />
    </div>
  );
}
