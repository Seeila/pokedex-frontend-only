import path from 'path';
import Base64 from 'crypto-js/enc-base64';
import Utf8 from 'crypto-js/enc-utf8';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@pokedex-graphql' : path.resolve(__dirname, './src'),
    },
  },
  css: {
    modules: {
      generateScopedName: function (name, filename) {
        const uft8FileName = Utf8.parse(filename);
        const file = path.basename(filename, ".module.css");
        const hash = Base64.stringify(uft8FileName).substring(0,8);

        return file  + "__" + name  + "-" + hash;
      }
    }
  }
})
