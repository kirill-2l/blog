import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import CopyPlugin from 'copy-webpack-plugin';

import CircularDependencyPlugin from 'circular-dependency-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { type BuildOptions } from './types/config';

export function buildPlugins(props: BuildOptions): webpack.WebpackPluginInstance[] {
    const {
        paths,
        isDev,
        apiUrl,
        project,
    } = props;
    const plugins = [
        new HtmlWebpackPlugin(
            {
                template: paths.html,
            },
        ),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API_URL__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify(project),
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: paths.locales,
                    to: paths.buildLocales,
                },
            ],
        }),

        new webpack.HotModuleReplacementPlugin(),

    ];

    if (isDev) {
        plugins.push(
            new ReactRefreshWebpackPlugin(),
            new BundleAnalyzerPlugin({
                openAnalyzer: false,
            }),
            new CircularDependencyPlugin({
                // exclude detection of files based on a RegExp
                exclude: /a\.js|node_modules/,
                // include specific files based on a RegExp
                include: /src/,
                // add errors to webpack instead of warnings
                failOnError: true,
                // allow import cycles that include an asyncronous import,
                // e.g. via import(/* webpackMode: "weak" */ './file.js')
                // allowAsyncCycles: false,
                // set the current working directory for displaying module paths
                // cwd: process.cwd(),
            }),
            new ForkTsCheckerWebpackPlugin({
                typescript: {
                    diagnosticOptions: {
                        semantic: true,
                        syntactic: true,
                    },
                    mode: 'write-references',
                },
            }),
        );
    }
    return plugins.filter(Boolean);
}
