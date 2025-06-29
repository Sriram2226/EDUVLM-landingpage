import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Copy, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CitationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CitationModal({ open, onOpenChange }: CitationModalProps) {
  const { toast } = useToast();
  
  const citationText = `@article{eduvlmbench2024,
  title={EduVLM-Bench: A Multimodal Benchmark for Educational Concept Learning},
  author={Mukerjee, Arka and P, Sriram and Padhypalli, Abhishekh and Bhojwani, Nilam},
  year={2024},
  journal={Educational AI Research}
}`;

  const handleCopyCitation = async () => {
    try {
      await navigator.clipboard.writeText(citationText);
      toast({
        title: "Citation copied!",
        description: "The citation has been copied to your clipboard.",
      });
    } catch (error) {
      toast({
        title: "Copy failed",
        description: "Failed to copy citation to clipboard.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-[var(--dark-slate)]">
            Citation
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="bg-[var(--light-grey)] rounded-lg p-4 font-mono text-sm">
            <pre className="whitespace-pre-wrap">{citationText}</pre>
          </div>
          <Button 
            onClick={handleCopyCitation}
            className="bg-[var(--academic-blue)] text-white hover:bg-blue-700 transition-colors"
          >
            <Copy className="mr-2 h-4 w-4" />
            Copy Citation
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
