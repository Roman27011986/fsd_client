const path = require('path');
const { DefinePlugin } = require('webpack');
const { buildCssLoader } = require('../build/loaders/buildCssLoader');

module.exports = {
    stories: [
        '../../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],

    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-webpack5-compiler-babel',
        'storybook-addon-remix-react-router',
    ],

    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },

    docs: {
        autodocs: true,
    },

    webpackFinal: async (config) => {
        const paths = {
            build: '',
            html: '',
            entry: '',
            src: path.resolve(__dirname, '..', '..', 'src'),
        };

        config.resolve.modules?.push(paths.src);
        config.resolve.extensions?.push('.ts', '.tsx');

        config.module.rules = config.module.rules.map((rule) => {
            if (/svg/.test(rule.test)) {
                return { ...rule, exclude: /\.svg$/i };
            }
            return rule;
        });

        config.module.rules?.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        config.pligins?.push(new DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify(''),
            __PROJECT__: JSON.stringify('storybook'),
        }));

        config.module.rules?.push(buildCssLoader(true));
        return config;
    },
};
