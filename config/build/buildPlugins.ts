import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { type BuildOptions } from './types/config';

export function buildPlugins(props: BuildOptions): webpack.WebpackPluginInstance[] {
    const {
        paths,
        isDev,
        apiUrl,
        project,
    } = props;
    const plugins = [new HtmlWebpackPlugin({
        template: paths.html,
    }),
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

    new webpack.HotModuleReplacementPlugin()];

    if (isDev) {
        plugins.push(
            new ReactRefreshWebpackPlugin(),
            new BundleAnalyzerPlugin({
                openAnalyzer: false,
            }),
        );
    }
    return plugins.filter(Boolean);
}
