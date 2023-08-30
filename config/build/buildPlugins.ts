import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { HotModuleReplacementPlugin, ProgressPlugin, WebpackPluginInstance } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildPlugins({ paths, isDev }:BuildOptions): WebpackPluginInstance[] {
  return [
    new ProgressPlugin(),
    new HtmlWebpackPlugin({ template: paths.html }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    isDev && (new ReactRefreshWebpackPlugin(), new HotModuleReplacementPlugin()),
  ];
}
