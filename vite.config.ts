import { resolve } from 'path';
import type { ConfigEnv, UserConfig } from 'vite';

import svgLoader from 'vite-svg-loader';
import vue from '@vitejs/plugin-vue';

export default ({ command, mode }: ConfigEnv): UserConfig => {
  return {
    build: {
      cssCodeSplit: true,
      lib: {
        // Could also be a dictionary or array of multiple entry points
        entry: [
          resolve(__dirname, 'lib/core.ts'),
          resolve(__dirname, 'lib/quill.ts'),
        ],
        name: 'quill',
        // the proper extensions will be added
      },
    },
    plugins: [
      vue(),
      svgLoader({
        defaultImport: 'raw',
      }),
    ],
  };
};
