import webpack, { RuleSetRule } from 'webpack';
import path from 'path';

import { buildCssLoader } from '../build/loaders/cssLoaders';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }): webpack.Configuration => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    // eslint-disable-next-line no-param-reassign
    config.resolve!.modules = [paths.src, 'node_modules'];
    config.resolve!.extensions!.push('.ts', '.tsx');

    // @ts-ignore
    // eslint-disable-next-line no-param-reassign
    config!.module!.rules! = config.module!.rules!.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config.module!.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    config.module!.rules.push(buildCssLoader(true));

    config.plugins!.push(new webpack.DefinePlugin({
        __IS_DEV__: true,
        __API_URL__: JSON.stringify(''),
    }));
    return config;
};
