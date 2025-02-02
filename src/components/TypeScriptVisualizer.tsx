// src/components/TypeScriptVisualizer.tsx
import { useState, useEffect } from 'react';
import { AnimatedCode } from './AnimatedCode';
// import { ShikiHighlighter } from './ShikiHighlighter';

type Step = {
  title: string;
  interface: string;
  implementation: string;
  explanation: string;
};

const steps: Step[] = [
  {
    title: 'Basic String Properties',
    interface: `interface ButtonClasses {
  base: string;
  variants: string;
  size: string;
  radius: string;
  weight: string;
  animate: string;
}`,
    implementation: `const buttonClasses = {
  base: '',
  variants: '',
  size: '',
  radius: '',
  weight: '',
  animate: ''
}`,
    explanation: 'Starting with simple string properties for each attribute',
  },
  {
    title: 'Converting Variants to Record',
    interface: `type ButtonVariant = 'primary' | 'success' | 'danger';

interface ButtonClasses {
  base: string;
  variants: Record<ButtonVariant, string>;
  size: string;
  radius: string;
  weight: string;
  animate: string;
}`,
    implementation: `const buttonClasses = {
  base: '',
  variants: {
    primary: '',
    success: '',
    danger: ''
  },
  size: '',
  radius: '',
  weight: '',
  animate: ''
}`,
    explanation: 'Converting variants to use Record type, mapping each variant to a string',
  },
  {
    title: 'Converting Remaining Properties',
    interface: `type ButtonVariant = 'primary' | 'success' | 'danger';
type ButtonSize = 'sm' | 'md';
type ButtonRadius = 'none' | 'sm' | 'md' | 'lg';
type ButtonWeight = 'normal' | 'bold' | 'semibold';

interface ButtonClasses {
  base: string;
  variants: Record<ButtonVariant, string>;
  size: Record<ButtonSize, string>;
  radius: Record<ButtonRadius, string>;
  weight: Record<ButtonWeight, string>;
  animate: string;
}`,
    implementation: `const buttonClasses = {
  base: '',
  variants: {
    primary: '',
    success: '',
    danger: ''
  },
  size: {
    sm: '',
    md: ''
  },
  radius: {
    none: '',
    sm: '',
    md: '',
    lg: ''
  },
  weight: {
    normal: '',
    bold: '',
    semibold: ''
  },
  animate: ''
}`,
    explanation: 'Converting size, radius, and weight to use Record types with their respective values',
  },
  {
    title: 'Adding Nested Structure to Variants',
    interface: `interface ButtonClasses {
  base: string;
  variants: Record<ButtonVariant, {
    base: string;
  }>;
  size: Record<ButtonSize, string>;
  radius: Record<ButtonRadius, string>;
  weight: Record<ButtonWeight, string>;
  animate: string;
}`,
    implementation: `const buttonClasses = {
  base: '',
  variants: {
    primary: {
      base: ''
    },
    success: {
      base: ''
    },
    danger: {
      base: ''
    }
  },
  size: {
    sm: '',
    md: ''
  },
  radius: {
    none: '',
    sm: '',
    md: '',
    lg: ''
  },
  weight: {
    normal: '',
    bold: '',
    semibold: ''
  },
  animate: ''
}`,
    explanation: 'Evolving variants to have their own base property',
  },
  {
    title: 'Adding Loading State',
    interface: `interface ButtonClasses {
  base: string;
  variants: Record<ButtonVariant, {
    base: string;
    loading: string;
  }>;
  size: Record<ButtonSize, string>;
  radius: Record<ButtonRadius, string>;
  weight: Record<ButtonWeight, string>;
  animate: string;
}`,
    implementation: `const buttonClasses = {
  base: '',
  variants: {
    primary: {
      base: '',
      loading: ''
    },
    success: {
      base: '',
      loading: ''
    },
    danger: {
      base: '',
      loading: ''
    }
  },
  size: {
    sm: '',
    md: ''
  },
  radius: {
    none: '',
    sm: '',
    md: '',
    lg: ''
  },
  weight: {
    normal: '',
    bold: '',
    semibold: ''
  },
  animate: ''
}`,
    explanation: 'Adding loading state to each variant',
  },
  {
    title: 'Adding Disabled State',
    interface: `interface ButtonClasses {
  base: string;
  variants: Record<ButtonVariant, {
    base: string;
    loading: string;
    disabled: string;
  }>;
  size: Record<ButtonSize, string>;
  radius: Record<ButtonRadius, string>;
  weight: Record<ButtonWeight, string>;
  animate: string;
}`,
    implementation: `const buttonClasses = {
  base: '',
  variants: {
    primary: {
      base: '',
      loading: '',
      disabled: ''
    },
    success: {
      base: '',
      loading: '',
      disabled: ''
    },
    danger: {
      base: '',
      loading: '',
      disabled: ''
    }
  },
  size: {
    sm: '',
    md: ''
  },
  radius: {
    none: '',
    sm: '',
    md: '',
    lg: ''
  },
  weight: {
    normal: '',
    bold: '',
    semibold: ''
  },
  animate: ''
}`,
    explanation: 'Adding disabled state to complete the variant configuration',
  },
];

const TypeScriptVisualizer = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [transition, setTransition] = useState(0); // 0 to 1

  // Auto-transition when step changes
  useEffect(() => {
    const interval = setInterval(() => {
      setTransition((prev) => {
        if (prev >= 1) {
          clearInterval(interval);
          return 1;
        }
        return prev + 0.05;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [currentStep]);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
      setTransition(0);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      setTransition(0);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4 space-y-6 bg-gray-950 text-gray-200">
      <div className="flex items-center justify-between">
        <button
          onClick={handlePrevious}
          className="px-4 py-2 bg-gray-800 rounded flex items-center gap-2 disabled:opacity-50 hover:bg-gray-700 transition-colors"
          disabled={currentStep === 0}
        >
          Previous
        </button>
        <h2 className="text-xl font-semibold">{steps[currentStep].title}</h2>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-gray-800 rounded flex items-center gap-2 disabled:opacity-50 hover:bg-gray-700 transition-colors"
          disabled={currentStep === steps.length - 1}
        >
          Next
        </button>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-blue-400">Type Definition</h3>
          <div className="bg-gray-900 rounded-lg p-4 overflow-auto text-xs">
            <AnimatedCode
              startCode={steps[currentStep].interface}
              endCode={steps[Math.min(currentStep + 1, steps.length - 1)].interface}
              progress={transition}
            />
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-green-400">Generated Structure</h3>
          <div className="bg-gray-900 rounded-lg p-4 overflow-auto text-xs">
            <AnimatedCode
              startCode={steps[currentStep].implementation}
              endCode={steps[Math.min(currentStep + 1, steps.length - 1)].implementation}
              progress={transition}
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-4">
        <p className="text-gray-300">{steps[currentStep].explanation}</p>
      </div>

      <div className="flex justify-center space-x-2">
        {steps.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentStep(index);
              setTransition(0);
            }}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentStep ? 'bg-blue-500' : 'bg-gray-700 hover:bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TypeScriptVisualizer;
