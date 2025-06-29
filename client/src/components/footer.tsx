import { Link } from "wouter";
import { Github, Mail, FileText, BarChart3 } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--light-grey)] border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-2">
            <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--academic-blue)' }}>
              EduVLM-Bench
            </h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--slate-grey)' }}>
              A multimodal benchmark for evaluating educational concept understanding in Vision-Language Models. 
              Our framework focuses on identifying prerequisite concepts and bridging the gap between confusion and conceptual clarity.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/placeholder/eduvlm-bench" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[var(--slate-grey)] hover:text-[var(--academic-blue)] transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="mailto:contact@eduvlm-bench.org" 
                className="text-[var(--slate-grey)] hover:text-[var(--academic-blue)] transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4" style={{ color: 'var(--dark-slate)' }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/" 
                  className="text-sm text-[var(--slate-grey)] hover:text-[var(--academic-blue)] transition-colors flex items-center"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Research Paper
                </Link>
              </li>
              <li>
                <Link 
                  href="/leaderboard" 
                  className="text-sm text-[var(--slate-grey)] hover:text-[var(--academic-blue)] transition-colors flex items-center"
                >
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Model Leaderboard
                </Link>
              </li>
              <li>
                <a 
                  href="https://github.com/placeholder/eduvlm-bench" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--slate-grey)] hover:text-[var(--academic-blue)] transition-colors flex items-center"
                >
                  <Github className="h-4 w-4 mr-2" />
                  View Code
                </a>
              </li>
            </ul>
          </div>

          {/* Authors */}
          <div>
            <h4 className="text-sm font-semibold mb-4" style={{ color: 'var(--dark-slate)' }}>
              Authors
            </h4>
            <ul className="space-y-2">
              <li className="text-sm" style={{ color: 'var(--slate-grey)' }}>Arka Mukerjee</li>
              <li className="text-sm" style={{ color: 'var(--slate-grey)' }}>Sriram P</li>
              <li className="text-sm" style={{ color: 'var(--slate-grey)' }}>Abhishekh Padhypalli</li>
              <li className="text-sm" style={{ color: 'var(--slate-grey)' }}>Nilam Bhojwani</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm" style={{ color: 'var(--slate-grey)' }}>
            © {currentYear} EduVLM-Bench. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-sm text-[var(--slate-grey)] hover:text-[var(--academic-blue)] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-[var(--slate-grey)] hover:text-[var(--academic-blue)] transition-colors">
              Terms of Use
            </a>
            <a href="#" className="text-sm text-[var(--slate-grey)] hover:text-[var(--academic-blue)] transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}