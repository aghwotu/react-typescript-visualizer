type Step = {
  title: string;
  interface: string;
  implementation: string;
  explanation: string;
};

export const steps: Step[] = [
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
    interface: `type ButtonVariant = 'primary' | 'success' | 'danger';
type ButtonSize = 'sm' | 'md';
type ButtonRadius = 'none' | 'sm' | 'md' | 'lg';
type ButtonWeight = 'normal' | 'bold' | 'semibold';

interface ButtonClasses {
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
    interface: `type ButtonVariant = 'primary' | 'success' | 'danger';
type ButtonSize = 'sm' | 'md';
type ButtonRadius = 'none' | 'sm' | 'md' | 'lg';
type ButtonWeight = 'normal' | 'bold' | 'semibold';

interface ButtonClasses {
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
    interface: `type ButtonVariant = 'primary' | 'success' | 'danger';
type ButtonSize = 'sm' | 'md';
type ButtonRadius = 'none' | 'sm' | 'md' | 'lg';
type ButtonWeight = 'normal' | 'bold' | 'semibold';

interface ButtonClasses {
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
