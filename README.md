# React TypeScript Visualizer

A step-by-step visualizer that shows how TypeScript code changes over time. Watch code transform with smooth animations as you click through different stages.

## Features

- 🎯 **Step-by-step visualization** - Navigate through different stages of TypeScript interface evolution
- 🎨 **Animated code transitions** - Smooth animations showing code changes using diff highlighting
- 💡 **Educational explanations** - Each step includes detailed explanations of the transformation
- 🎨 **Syntax highlighting** - Powered by Shiki for beautiful code display
- 📱 **Responsive design** - Modern UI built with Tailwind CSS
- ⚡ **Fast and lightweight** - Built with Vite for optimal performance

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Shiki** - Syntax highlighting
- **Framer Motion** - Animations
- **diff-match-patch** - Code diffing for smooth transitions

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd react-typescript-visualizer
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
src/
├── components/
│   ├── TypeScriptVisualizer.tsx  # Main visualizer component
│   ├── AnimatedCode.tsx          # Code animation component
│   ├── ShikiHighlighter.tsx      # Syntax highlighting wrapper
│   └── steps.ts                  # Step definitions and data
├── App.tsx                        # Root component
├── main.tsx                       # Application entry point
└── index.css                      # Global styles
```

## How It Works

The visualizer demonstrates the evolution of a `ButtonClasses` interface through multiple steps:

1. **Basic String Properties** - Starting with simple string properties
2. **Converting Variants to Record** - Transforming variants into Record types
3. **Converting Remaining Properties** - Applying Record types to size, radius, and weight
4. **Adding Nested Structure** - Introducing nested structures within variants
5. **Adding Loading State** - Adding state-specific properties
6. **Adding Disabled State** - Completing the variant configuration

Each step shows:

- **Type Definition** (left panel) - The TypeScript interface/type definition
- **Generated Structure** (right panel) - The resulting implementation structure
- **Explanation** - A description of what changed in this step

## Customization

To add or modify steps, edit the `steps.ts` file in the `src/components/` directory. Each step contains:

- `title` - The step title
- `interface` - The TypeScript type definition
- `implementation` - The resulting object structure
- `explanation` - A description of the transformation

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready to be deployed to any static hosting service.

## License

This project is open source and available for educational purposes.
