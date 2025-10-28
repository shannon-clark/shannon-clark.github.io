import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";

// 1. Determine the root directory for tsconfig resolution
const projectRoot = import.meta.dirname;

export default tseslint.config(
  // 1. GLOBAL IGNORES
  {
    ignores: ["**/.next/**", "**/out/**"],
  },

  // 2. BASE JAVASCRIPT CONFIG
  pluginJs.configs.recommended,

  // 3. CONSOLIDATED TYPESCRIPT AND REACT CONFIG
  {
    // Apply this configuration ONLY to TypeScript/TSX files
    files: ["**/*.{ts,tsx}"],

    // Spread all recommended configs into a single array
    extends: [
      ...tseslint.configs.recommendedTypeChecked,
      // You don't usually need to extend these plugins directly,
      // as you are setting their rules/plugins below, but this is an alternative:
      // pluginReact.configs.recommended,
      // pluginReact.configs["jsx-runtime"],
      // pluginReactHooks.configs.recommended,
      // pluginJsxA11y.configs.recommended,
    ],

    // Set up the parser and type-aware options
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        // Use an array for project and tsconfigRootDir for safety
        project: ["./tsconfig.json"],
        tsconfigRootDir: projectRoot,
      },
      globals: {
        ...globals.browser,
      },
    },

    // Set up plugins
    plugins: {
      react: pluginReact,
      "react-hooks": pluginReactHooks,
      "jsx-a11y": pluginJsxA11y,
    },

    // Define all rules
    rules: {
      // Manually add recommended rules from plugins (if not using 'extends')
      // Otherwise, these are already covered by the spread 'extends' above
      "react/prop-types": "off",
      // Example of adding a rule:
      // "react/react-in-jsx-scope": "off",
    },
  },
);
