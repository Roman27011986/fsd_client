import webpack from 'webpack';

import { IBuildOptions } from './types/config';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: IBuildOptions):
    webpack.Configuration {
    const { mode, paths, isDev } = options;

    return {
        mode,

        entry: { main: paths.entry },

        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
            publicPath: '/',
        },

        plugins: buildPlugins(options),

        module: {
            rules: buildLoaders(options),
        },

        resolve: buildResolvers(options),
        devServer: isDev ? buildDevServer(options) : undefined,
        devtool: isDev ? 'inline-source-map' : undefined,
    };
}
