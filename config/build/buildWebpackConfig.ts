import { Configuration } from "webpack";
import { BuildOptions } from "./types/config";
import { buildLoaders } from "./buildLoaders";
import { buildResolves } from "./buildResolves";
import { buildPlugins } from "./buildPlugins";
import path from "path";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): Configuration{
    const {paths, mode, isDev} = options;
    return {
        mode: mode,
        entry: paths.entry,
        module: {
            rules: buildLoaders(options),
          },
          resolve: buildResolves(),
        output: {
            filename: 'bundle.[contenthash].js',
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    }
}