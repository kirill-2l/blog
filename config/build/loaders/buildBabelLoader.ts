import { BuildOptions } from '../types/config';

export const buildBabelLoader = (options: BuildOptions) => {
    const { isDev } = options;
    return {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [isDev && require.resolve('react-refresh/babel')].filter(Boolean),
            },
        },
    };
};
