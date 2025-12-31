import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { X } from "lucide-react";
import { useForm } from "@/context/FormContext";

const Newsletter = () => {
  const { isFormOpen, openForm, closeForm } = useForm(); // Get ALL values at once
  const [currentStep, setCurrentStep] = useState(-1);
  const [formData, setFormData] = useState({
    skinConcern: "",
    skinType: "",
    budget: "",
    email: "",
  });

  const steps = [
    {
      question: "What's your primary skin concern?",
      options: ["Acne", "Aging", "Dryness", "Hyperpigmentation", "Redness", "Sensitivity"],
    },
    {
      question: "What's your skin type?",
      options: ["Oily", "Dry", "Combination", "Normal", "Sensitive"],
    },
    {
      question: "What's your budget range?",
      options: ["Under $50", "$50-$100", "$100-$200", "$200+"],
    },
    {
      question: "Get personalized recommendations",
      description: "Enter your email to receive a customized skincare routine",
      input: true,
    },
  ];

  const handleOptionSelect = (option: string) => {
    const updatedData = { ...formData };

    switch (currentStep) {
      case 0:
        updatedData.skinConcern = option;
        break;
      case 1:
        updatedData.skinType = option;
        break;
      case 2:
        updatedData.budget = option;
        break;
    }

    setFormData(updatedData);

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (currentStep === steps.length - 1 && formData.email) {
      toast.success("Thank you! Your personalized skincare guide is on its way.");
      handleCloseForm();
    }
  };

  const handleCloseForm = () => {
    closeForm();
    setCurrentStep(-1);
    setFormData({
      skinConcern: "",
      skinType: "",
      budget: "",
      email: "",
    });
  };

  const handleStart = () => {
    setCurrentStep(0);
  };

  const getProgressPercentage = () => {
    if (currentStep === -1) return 0;
    return ((currentStep + 1) / steps.length) * 100;
  };

  return (
    <>
      <section className="py-20 md:py-32 bg-foreground text-background">
        <div className="container mx-auto px-6 text-center">
          <span className="font-body text-sm tracking-[0.3em] uppercase text-background/60 block mb-4">
            Join the Glow
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
            If Your Skin Could Talk.
          </h2>
          <p className="font-body text-background/70 mb-10 max-w-lg mx-auto">
            This Is What It'd Say.
          </p>

          <Button
            onClick={() => {
              console.log('Newsletter button clicked'); // Debug
              openForm();
            }}
            variant="light"
            size="lg"
            className="px-8 py-6 text-lg"
          >
            skin issues?
          </Button>
        </div>
      </section>

      {/* Form Modal */}
      {isFormOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50"
          onClick={(e) => {
            // Close modal when clicking on backdrop
            if (e.target === e.currentTarget) {
              handleCloseForm();
            }
          }}
        >
          <div className="relative bg-background text-foreground w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg">
            {/* Close Button */}
            <div className="sticky top-0 z-10 flex justify-end p-4 bg-background">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleCloseForm}
                className="rounded-full"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Content */}
            <div className="p-6">
              {currentStep === -1 ? (
                // Initial Welcome Screen
                <div className="text-center">
                  <h3 className="font-display text-3xl md:text-4xl mb-4">
                    Your Skin's Been Through Enough.
                    <span className="block">Let's Help.</span>
                  </h3>
                  
                  <p className="font-body text-foreground/70 mb-10 max-w-md mx-auto">
                    Tell Us About Your Skin
                  </p>
                  
                  <Button
                    onClick={handleStart}
                    size="lg"
                    className="px-8 py-6 text-lg"
                  >
                    Start
                  </Button>
                </div>
              ) : (
                // Form Steps
                <>
                  {/* Progress Bar */}
                  <div className="mb-8">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-foreground h-2 rounded-full transition-all duration-300"
                        style={{ width: `${getProgressPercentage()}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-foreground/60 mt-2 text-right">
                      Step {currentStep + 1} of {steps.length}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="mb-8">
                      <h4 className="font-display text-xl mb-4">
                        {steps[currentStep].question}
                      </h4>
                      
                      {steps[currentStep].description && (
                        <p className="text-foreground/70 mb-6">
                          {steps[currentStep].description}
                        </p>
                      )}

                      {steps[currentStep].input ? (
                        <div className="space-y-4">
                          <Input
                            type="email"
                            placeholder="your.email@example.com"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            className="w-full bg-transparent border-foreground/30 text-foreground placeholder:text-foreground/50 focus:border-foreground"
                            required
                          />
                          <p className="text-sm text-foreground/60">
                            We'll send your personalized routine and keep you updated on new products
                          </p>
                        </div>
                      ) : (
                        <div className="grid grid-cols-2 gap-3 mt-6">
                          {steps[currentStep].options.map((option) => (
                            <Button
                              key={option}
                              type="button"
                              variant="outline"
                              className="h-auto py-4 px-3 justify-start text-left hover:bg-gray-100 border-foreground/30"
                              onClick={() => handleOptionSelect(option)}
                            >
                              <span className="font-medium">{option}</span>
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-between pt-6 border-t border-foreground/30">
                      {currentStep > 0 ? (
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setCurrentStep(currentStep - 1)}
                        >
                          Back
                        </Button>
                      ) : (
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setCurrentStep(-1)}
                        >
                          Back
                        </Button>
                      )}

                      {currentStep === steps.length - 1 ? (
                        <Button type="submit" disabled={!formData.email}>
                          Get My Routine
                        </Button>
                      ) : (
                        <Button
                          type="button"
                          onClick={() => {
                            const requiredField = 
                              currentStep === 0 ? formData.skinConcern :
                              currentStep === 1 ? formData.skinType :
                              formData.budget;
                            
                            if (requiredField) {
                              setCurrentStep(currentStep + 1);
                            } else {
                              toast.error("Please select an option to continue");
                            }
                          }}
                        >
                          Continue
                        </Button>
                      )}
                    </div>
                  </form>

                  {/* Preview of selected options */}
                  {(formData.skinConcern || formData.skinType || formData.budget) && (
                    <div className="mt-8 pt-6 border-t border-foreground/30">
                      <p className="text-sm font-medium mb-2 text-foreground/80">Your selections:</p>
                      <div className="flex flex-wrap gap-2">
                        {formData.skinConcern && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-foreground">
                            {formData.skinConcern}
                          </span>
                        )}
                        {formData.skinType && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-foreground">
                            {formData.skinType}
                          </span>
                        )}
                        {formData.budget && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-foreground">
                            {formData.budget}
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Newsletter;