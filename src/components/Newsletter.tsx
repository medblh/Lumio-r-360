import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { X } from "lucide-react";
import { useForm } from "@/context/FormContext";

const Newsletter = () => {
  const { isFormOpen, openForm, closeForm } = useForm();
  const [currentStep, setCurrentStep] = useState(-1);
  const [formData, setFormData] = useState({
    skinConcern: "",
    skinConcernOther: "",
    skinType: "",
    duration: "",
    triedProducts: "",
    email: "",
  });
  
  const [isFormAnimating, setIsFormAnimating] = useState(false);
  const formContainerRef = useRef(null);
  const sectionRef = useRef(null);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const steps = [
    {
      question: "What's your primary skin concern?",
      options: ["Acne", "Aging", "Dryness", "Hyperpigmentation", "Redness", "Sensitivity", "Others"],
      hasOther: true,
    },
    {
      question: "What's your skin type?",
      options: ["Oily", "Dry", "Combination", "Normal", "Sensitive"],
    },
    {
      question: "For how long have you been facing this issue?",
      options: ["Less than 1 month", "1-6 months", "6-12 months", "1-2 years", "More than 2 years"],
    },
    {
      question: "Any products that you tried?",
      description: "Let us know what products you've tried (optional)",
      input: true,
      placeholder: "e.g., Retinol serum, Vitamin C, etc.",
    },
    {
      question: "Get personalized recommendations",
      description: "Enter your email to receive a customized skincare routine",
      input: true,
      placeholder: "your.email@example.com",
    },
  ];

  // Animation pour la section Newsletter (scroll-triggered)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        
        if (entry.isIntersecting && !hasAnimated) {
          setIsSectionVisible(true);
          setHasAnimated(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  // Animation d'ouverture du formulaire
  useEffect(() => {
    if (isFormOpen) {
      setIsFormAnimating(true);
    }
  }, [isFormOpen]);

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
        updatedData.duration = option;
        break;
    }

    setFormData(updatedData);

    if (currentStep < steps.length - 1 && option !== "Others") {
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
    // Animation de fermeture
    setIsFormAnimating(false);
    setTimeout(() => {
      closeForm();
      setCurrentStep(-1);
      setFormData({
        skinConcern: "",
        skinConcernOther: "",
        skinType: "",
        duration: "",
        triedProducts: "",
        email: "",
      });
    }, 300); // Correspond à la durée de l'animation de sortie
  };

  const handleStart = () => {
    setCurrentStep(0);
  };

  const getProgressPercentage = () => {
    if (currentStep === -1) return 0;
    return ((currentStep + 1) / steps.length) * 100;
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 0:
        return formData.skinConcern && 
               (formData.skinConcern !== "Others" || formData.skinConcernOther.trim());
      case 1:
        return formData.skinType;
      case 2:
        return formData.duration;
      case 3:
        return true; // Tried products is optional
      case 4:
        return formData.email;
      default:
        return false;
    }
  };

  return (
    <>
      {/* Section Newsletter */}
      <section ref={sectionRef} className="py-20 md:py-32 bg-foreground text-background overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <span className={`font-body text-sm tracking-[0.3em] uppercase text-background/60 block mb-4 transition-all duration-700 ${
            isSectionVisible ? 'translate-y-0 opacity-100 delay-100' : 'translate-y-4 opacity-0'
          }`}>
            Join the Glow
          </span>
          
          <h2 className={`font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 transition-all duration-800 ${
            isSectionVisible ? 'translate-y-0 opacity-100 delay-200' : 'translate-y-6 opacity-0'
          }`}>
            If Your Skin Could Talk.
          </h2>
          
          <p className={`font-body text-background/70 mb-10 max-w-lg mx-auto px-4 transition-all duration-900 ${
            isSectionVisible ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-8 opacity-0'
          }`}>
            This Is What It'd Say.
          </p>

          <div className={`transition-all duration-700 ${
            isSectionVisible ? 'translate-y-0 opacity-100 delay-400' : 'translate-y-4 opacity-0'
          }`}>
            <Button
              onClick={openForm}
              variant="light"
              size="lg"
              className="px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg transition-transform duration-300 hover:scale-105"
            >
              skin issues?
            </Button>
          </div>
        </div>
      </section>

      {/* Form Modal avec animations */}
      <div 
        className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-300 ${
          isFormOpen 
            ? isFormAnimating 
              ? 'opacity-100 pointer-events-auto' 
              : 'opacity-0 pointer-events-none'
            : 'opacity-0 pointer-events-none'
        }`}
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            handleCloseForm();
          }
        }}
      >
        {/* Form Container avec animations */}
        <div 
          ref={formContainerRef}
          className={`relative bg-background text-foreground w-full max-w-md sm:max-w-lg md:max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg shadow-xl transition-all duration-500 ${
            isFormOpen && isFormAnimating 
              ? 'translate-y-0 opacity-100 scale-100' 
              : 'translate-y-10 opacity-0 scale-95'
          }`}
        >
          {/* Close Button */}
          <div className="sticky top-0 z-10 flex justify-end p-3 sm:p-4 bg-background">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleCloseForm}
              className={`rounded-full h-8 w-8 sm:h-10 sm:w-10 transition-all duration-300 hover:scale-110 ${
                isFormAnimating ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'
              }`}
              aria-label="Close form"
            >
              <X className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300" />
            </Button>
          </div>

          {/* Content avec animations */}
          <div className={`p-4 sm:p-6 transition-all duration-700 ${
            isFormAnimating ? 'opacity-100' : 'opacity-0'
          }`}>
            {currentStep === -1 ? (
              // Initial Welcome Screen avec animations
              <div className={`text-center transition-all duration-700 ${
                isFormAnimating ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}>
                <h3 className="font-display text-2xl sm:text-3xl md:text-4xl mb-4 px-2 transition-all duration-500 delay-100">
                  Your Skin's Been Through Enough.
                  <span className="block mt-2 transition-all duration-500 delay-200">Let's Help.</span>
                </h3>
                
                <p className={`font-body text-foreground/70 mb-8 sm:mb-10 max-w-md mx-auto px-4 transition-all duration-500 delay-300 ${
                  isFormAnimating ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  Tell Us About Your Skin
                </p>
                
                <div className={`transition-all duration-500 delay-400 ${
                  isFormAnimating ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  <Button
                    onClick={handleStart}
                    size="lg"
                    className="px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg w-full sm:w-auto transition-transform duration-300 hover:scale-105"
                  >
                    Start
                  </Button>
                </div>
              </div>
            ) : (
              // Form Steps avec animations
              <>
                {/* Progress Bar avec animation */}
                <div className={`mb-6 sm:mb-8 transition-all duration-500 ${
                  isFormAnimating ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                    <div
                      className="bg-foreground h-1.5 sm:h-2 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${getProgressPercentage()}%` }}
                    ></div>
                  </div>
                  <p className="text-xs sm:text-sm text-foreground/60 mt-1.5 sm:mt-2 text-right">
                    Step {currentStep + 1} of {steps.length}
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className={`mb-6 sm:mb-8 transition-all duration-500 ${
                    isFormAnimating ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}>
                    <h4 className={`font-display text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 transition-all duration-300 ${
                      isFormAnimating ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                    }`}>
                      {steps[currentStep].question}
                    </h4>
                    
                    {steps[currentStep].description && (
                      <p className={`text-foreground/70 mb-4 sm:mb-6 text-sm sm:text-base transition-all duration-300 delay-100 ${
                        isFormAnimating ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                      }`}>
                        {steps[currentStep].description}
                      </p>
                    )}

                    {steps[currentStep].input ? (
                      <div className={`space-y-3 sm:space-y-4 transition-all duration-300 delay-200 ${
                        isFormAnimating ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                      }`}>
                        <Input
                          type={currentStep === 4 ? "email" : "text"}
                          placeholder={steps[currentStep].placeholder}
                          value={currentStep === 4 ? formData.email : formData.triedProducts}
                          onChange={(e) => {
                            if (currentStep === 4) {
                              setFormData({ ...formData, email: e.target.value });
                            } else {
                              setFormData({ ...formData, triedProducts: e.target.value });
                            }
                          }}
                          className="w-full bg-transparent border-foreground/30 text-foreground placeholder:text-foreground/50 focus:border-foreground text-sm sm:text-base h-11 sm:h-12 transition-all duration-300 focus:scale-[1.02]"
                          required={currentStep === 4}
                        />
                        {currentStep === 4 && (
                          <p className="text-xs sm:text-sm text-foreground/60 transition-all duration-300">
                            We'll send your personalized routine and keep you updated on new products
                          </p>
                        )}
                      </div>
                    ) : (
                      <div className={`space-y-4 transition-all duration-300 delay-200 ${
                        isFormAnimating ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                      }`}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mt-4 sm:mt-6">
                          {steps[currentStep].options.map((option, index) => (
                            <Button
                              key={option}
                              type="button"
                              variant={formData.skinConcern === option || 
                                      formData.skinType === option || 
                                      formData.duration === option ? 
                                      "default" : "outline"}
                              className={`h-auto min-h-[48px] sm:min-h-[56px] py-2.5 sm:py-4 px-3 justify-start text-left hover:bg-gray-100 border-foreground/30 text-sm sm:text-base transition-all duration-300 hover:scale-[1.02] ${
                                isFormAnimating 
                                  ? `opacity-100 translate-y-0 delay-${200 + index * 50}` 
                                  : 'opacity-0 translate-y-4'
                              }`}
                              onClick={() => handleOptionSelect(option)}
                              style={{ 
                                transitionDelay: isFormAnimating ? `${200 + index * 50}ms` : '0ms'
                              }}
                            >
                              <span className="font-medium">{option}</span>
                            </Button>
                          ))}
                        </div>
                        
                        {/* Other input for skin concern */}
                        {currentStep === 0 && formData.skinConcern === "Others" && (
                          <div className={`mt-4 transition-all duration-300 delay-500 ${
                            isFormAnimating ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                          }`}>
                            <Input
                              type="text"
                              placeholder="Please specify your skin concern"
                              value={formData.skinConcernOther}
                              onChange={(e) => setFormData({ ...formData, skinConcernOther: e.target.value })}
                              className="w-full bg-transparent border-foreground/30 text-foreground placeholder:text-foreground/50 focus:border-foreground text-sm sm:text-base h-11 sm:h-12 transition-all duration-300 focus:scale-[1.02]"
                            />
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Navigation Buttons avec animations */}
                  <div className={`flex justify-between pt-4 sm:pt-6 border-t border-foreground/30 transition-all duration-500 delay-300 ${
                    isFormAnimating ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}>
                    {currentStep > 0 ? (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setCurrentStep(currentStep - 1)}
                        className="text-sm sm:text-base px-3 sm:px-4 py-2 h-10 sm:h-11 transition-all duration-300 hover:scale-105"
                      >
                        Back
                      </Button>
                    ) : (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setCurrentStep(-1)}
                        className="text-sm sm:text-base px-3 sm:px-4 py-2 h-10 sm:h-11 transition-all duration-300 hover:scale-105"
                      >
                        Back
                      </Button>
                    )}

                    {currentStep === steps.length - 1 ? (
                      <Button 
                        type="submit" 
                        disabled={!formData.email}
                        className="text-sm sm:text-base px-4 sm:px-6 py-2 h-10 sm:h-11 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Get My Routine
                      </Button>
                    ) : (
                      <Button
                        type="button"
                        onClick={() => {
                          if (isStepValid()) {
                            setCurrentStep(currentStep + 1);
                          } else {
                            if (currentStep === 0 && formData.skinConcern === "Others" && !formData.skinConcernOther.trim()) {
                              toast.error("Please specify your skin concern to continue");
                            } else {
                              toast.error("Please select an option to continue");
                            }
                          }
                        }}
                        className="text-sm sm:text-base px-4 sm:px-6 py-2 h-10 sm:h-11 transition-all duration-300 hover:scale-105"
                      >
                        Continue
                      </Button>
                    )}
                  </div>
                </form>

                {/* Preview of selected options avec animations */}
                {(formData.skinConcern || formData.skinType || formData.duration) && (
                  <div className={`mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-foreground/30 transition-all duration-500 delay-400 ${
                    isFormAnimating ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}>
                    <p className="text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 text-foreground/80">Your selections:</p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {formData.skinConcern && (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs sm:text-sm bg-gray-100 text-foreground transition-all duration-300 hover:scale-105">
                          {formData.skinConcern === "Others" ? formData.skinConcernOther : formData.skinConcern}
                        </span>
                      )}
                      {formData.skinType && (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs sm:text-sm bg-gray-100 text-foreground transition-all duration-300 hover:scale-105">
                          {formData.skinType}
                        </span>
                      )}
                      {formData.duration && (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs sm:text-sm bg-gray-100 text-foreground transition-all duration-300 hover:scale-105">
                          {formData.duration}
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
    </>
  );
};

export default Newsletter;