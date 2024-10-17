module.exports = {
    env: {
        browser: true,
        node: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:import/recommended',
        'plugin:unicorn/recommended',
        'plugin:cypress/recommended',
    ],
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx'],
            },
            webpack: {
                configFile: './config/webpack.dev.config.js',
            },
        },
    },
    plugins: ['simple-import-sort', 'react'],
    ignorePatterns: ['node_modules', '.eslintrc.js'],
    rules: {
        'unicorn/filename-case': [
            'error',
            {
                cases: {
                    camelCase: true,
                    pascalCase: true,
                    kebabCase: true,
                },
            },
        ],
        'unicorn/no-empty-file': 'off',
        'simple-import-sort/exports': 'error',
        'simple-import-sort/imports': 'error',
        'import/namespace': [2, { allowComputed: true }],
        'import/first': 'error',
        'import/newline-after-import': 'error',
    },
    overrides: [
        {
            files: ['*rc.js', '*.config.js'],
            rules: {
                'unicorn/prefer-module': 'off',
                'unicorn/filename-case': 'off',
            },
        },
    ],
    globals: {
        Cypress: true,
    },
};