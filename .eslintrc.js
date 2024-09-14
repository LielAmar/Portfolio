module.exports = {
    // Specify the parser (useful for TypeScript)
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2021, // Allows the parsing of modern ECMAScript features
        sourceType: 'module', // Allows the use of imports
        ecmaFeatures: {
            jsx: true, // Enable JSX parsing
        },
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'], // Ensure TS and TSX files are included
            rules: {
                // TypeScript specific rules
            },
        },
    ],
    // Base configuration
    extends: [
        'eslint:recommended', // Basic ESLint recommended rules
        'plugin:react/recommended', // React-specific rules
        'plugin:jsx-a11y/recommended', // Accessibility rules for JSX
        'plugin:import/errors', // Ensure imports are error-free
        'plugin:import/warnings', // Show warnings for import issues
        'plugin:prettier/recommended', // Integrates Prettier with ESLint
        'plugin:@typescript-eslint/recommended', // TypeScript rules (if using TypeScript)
    ],
    plugins: ['react', 'jsx-a11y', 'import', '@typescript-eslint'], // Add custom plugins
    env: {
        browser: true, // Enable browser global variables like `window`
        es2021: true, // Enable ES2021 syntax
        node: true, // Enable Node.js global variables
    },
    rules: {
        // Customize ESLint rules
        'prettier/prettier': [
            'error',
            {
                singleQuote: true, // Use single quotes
                trailingComma: 'es5', // Add trailing commas where valid in ES5 (objects, arrays, etc.)
                semi: true, // Use semicolons
            },
        ],
        indent: ['error', 4], // Enforce 4 spaces for indentation
        'react/react-in-jsx-scope': 'off', // Not necessary with React 17+ (automatic JSX runtime)
        'react/prop-types': 'off', // Disable prop-types rule if using TypeScript
        'no-unused-vars': 'warn', // Warn on unused variables
        'no-console': 'warn', // Warn on console statements
        'import/order': [
            'error',
            {
                groups: [['builtin', 'external', 'internal']],
                pathGroups: [
                    {
                        pattern: 'react',
                        group: 'external',
                        position: 'before',
                    },
                ],
                pathGroupsExcludedImportTypes: ['react'],
                'newlines-between': 'always',
            },
        ],
        '@typescript-eslint/no-unused-vars': ['error'], // TypeScript specific unused variables check
    },
    settings: {
        react: {
            version: 'detect', // Automatically detect the React version
        },
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
};
