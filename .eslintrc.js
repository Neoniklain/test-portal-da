module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/recommended',
    ],
    rules: {
        'vue/no-v-html': 'off',
        "vue/attribute-hyphenation": ["error", "always"],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'max-len': [0],
        'import/no-unresolved': 'off',
        'no-unused-expressions': ['error', {'allowTernary': true}],
        'no-param-reassign': 0,
        'quote-props': ['error', 'consistent'],
        // vue rules
        'vue/html-closing-bracket-spacing': 'off',
        'vue/html-closing-bracket-newline': 'off',
        'vue/multiline-html-element-content-newline': 'off',
        'vue/order-in-components': ['error', {
            'order': [
                'el',
                'name',
                'parent',
                'functional',
                ['delimiters', 'comments'],
                ['components', 'directives', 'filters'],
                'extends',
                'mixins',
                'inheritAttrs',
                'model',
                ['props', 'propsData'],
                'data',
                'computed',
                'watch',
                'LIFECYCLE_HOOKS',
                'methods',
                ['template', 'render'],
                'renderError'
            ]
        }],
        'vue/html-indent': 'off',
        'vue/html-self-closing': 'off',
        'padded-blocks': 0,
        'space-before-blocks': 2,
        'vue/script-indent': 0,
        'vue/max-attributes-per-line': [2, {
            'singleline': 1,
            'multiline': {
                'max': 1,
                'allowFirstLine': false
            }
        }],
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
};
