module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'plugin:vue/recommended',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    'ecmaVersion': 6,
    'sourceType': 'module',
    'ecmaFeatures': {
      'modules': true
    }
  },
  'plugins': [
    'vue'
  ],
  'rules': {
    'padding-line-between-statements': [
      'error',
      { 'blankLine': 'always', 'prev': '*', 'next': ['return', 'break']},
      { 'blankLine': 'always', 'prev': 'import', 'next': 'export'}
    ],
    'generator-star-spacing': 'off',
    'eqeqeq': ['error', 'always'], // ===
    'no-confusing-arrow': 'error', // a => 1 ? 2 : 3
    // предотвращает выполнение, зависимого от предыдущей строки, кода (заставляет ставить ; в таких ситуациях)
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    // 'no-unreachable-loop': "error",
    // максимальное кол-во пустых строк => в начале / между / в конце => файла
    'no-multiple-empty-lines': ['error', { 'maxBOF': 0, 'max': 2, 'maxEOF': 1 }],
    'no-empty': 'error', // пустые блоки кода
    'no-eval': 'error',
    'no-return-await': 'error',
    'require-await': 'error',
    'no-var': 'error', // only let, const
    'spaced-comment': ['error', 'always'],
    'arrow-spacing': ['error', { 'before': true, 'after': true }],
    'block-spacing': ['error', 'always'], // { bar = 0; }
    'indent': ['error', 2], // отступ
    'comma-dangle': ['error', 'never'], // trailing comma (,)
    'no-trailing-spaces': 'error',

    // где-то ошибка в настройке правила
    // 'object-curly-newline': ['error', {'multiline': true, 'minProperties': 2, 'ImportDeclaration': 'always', 'ExportDeclaration': 'never'}],

    'padded-blocks': ['error', 'never'],
    'quotes': ['error', 'single', { 'allowTemplateLiterals': true, 'avoidEscape': true }],
    'semi': ['error', 'never', { beforeStatementContinuationChars: 'always' }],
    'semi-style': ['error', 'last'],
    'no-extra-semi': 'warn', // ;;
    'no-constant-condition': 'error',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'eol-last': 0,
    // 'default-case-last': "error",
    'no-console': [ 'error', { allow: [ 'warn', 'error', 'debug' ] } ],
    'array-callback-return': ['error', { allowImplicit: true }], // return в callback методов массива
    'no-unmodified-loop-condition': 'error',
    // Vue
    'vue/require-default-prop': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-multi-spaces': 'error',
    'vue/no-mutating-props': 'error',
    'vue/html-indent': ['error', 2, {
      'attribute': 1,
      'baseIndent': 1,
      'closeBracket': 0,
      'alignAttributesVertically': true,
      'ignores': []
    }],
    'vue/html-end-tags': 'error',
    'vue/html-quotes': [ 'error', 'double', { 'avoidEscape': true } ],
    // 'vue/name-property-casing': ['error', 'kebab-case'],
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/component-definition-name-casing': ['error', 'kebab-case'],
    'vue/first-attribute-linebreak': ['error', {
      'singleline': 'ignore',
      'multiline': 'below'
    }],
    'vue/html-closing-bracket-newline': ['error', {
      'singleline': 'never',
      'multiline': 'always'
    }],
    'vue/html-closing-bracket-spacing': ['error', {
      'startTag': 'never',
      'endTag': 'never',
      'selfClosingTag': 'always'
    }],
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'never',
        'normal': 'always',
        'component': 'always'
      },
      'svg': 'always',
      'math': 'always'
    }],
    'vue/max-attributes-per-line': ['error', {
      'singleline': {
        'max': 1
      },
      'multiline': {
        'max': 1
      }
    }],
    'vue/multiline-html-element-content-newline': ['error', {
      'ignoreWhenEmpty': true,
      'ignores': ['pre', 'textarea', 'span'],
      'allowEmptyLines': false
    }],
    'vue/no-spaces-around-equal-signs-in-attribute': ['error'],
    'vue/mustache-interpolation-spacing': ['error', 'always'],
    'vue/require-prop-types': 'error',
    'vue/v-bind-style': ['error', 'shorthand'],
    'vue/v-on-style': ['error', 'shorthand'],
    'vue/require-explicit-emits': ['error', {
      'allowProps': false
    }],
    'vue/v-on-event-hyphenation': ['error', 'always', {
      'autofix': false
    }],
    'vue/attributes-order': ['error', {
      'order': [
        'GLOBAL',
        'DEFINITION',
        'RENDER_MODIFIERS',
        'CONDITIONALS',
        'LIST_RENDERING',
        ['UNIQUE', 'SLOT'],
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'OTHER_ATTR',
        'EVENTS',
        'CONTENT'
      ],
      'alphabetical': false
    }],
    'vue/order-in-components': ['error', {
      'order': [
        'el',
        'name',
        'key',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        'emits',
        ['props', 'propsData'],
        ['components', 'directives', 'filters'],
        'extends',
        'mixins',
        ['provide', 'inject'],
        'ROUTER_GUARDS',
        'layout',
        'middleware',
        'validate',
        'scrollToTop',
        'transition',
        'loading',
        'inheritAttrs',
        'model',
        'setup',
        'asyncData',
        'data',
        'fetch',
        'head',
        'computed',
        'watch',
        'watchQuery',
        'LIFECYCLE_HOOKS',
        'methods',
        ['template', 'render'],
        'renderError'
      ]
    }],
    'vue/this-in-template': ['error', 'never'],
    'vue/custom-event-name-casing': ['error', 'kebab-case'],
    'vue/attribute-hyphenation': ['error', 'always'],
    'vue/no-static-inline-styles': 'error',
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/eqeqeq': ['error', 'always'],
    'vue/html-comment-content-spacing': ['error', 'always']
  }
}
