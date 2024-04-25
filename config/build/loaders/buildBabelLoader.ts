import { BuildOptions } from '../types/config';
import BabelRemovePropsPlugin from '../../babel/babelRemoveProps.plugin';

interface buildBabelLoaderOptions extends BuildOptions {
    isTsx: boolean;
}

export const buildBabelLoader = (options: buildBabelLoaderOptions) => {
    const {
        isTsx,
        isDev,
    } = options;

    const isProd = !isDev;

    return {
        test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                cacheDirectory: true,
                presets: ['@babel/preset-env'],
                plugins: [
                    ['@babel/plugin-transform-typescript', {
                        isTsx,
                    }],
                    '@babel/plugin-transform-runtime',
                    isTsx && isProd && [BabelRemovePropsPlugin, {
                        props: ['data-testid'],
                    }],
                    isDev && require.resolve('react-refresh/babel'),

                ].filter(Boolean),
            },
        },
    };
};
