import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { viteExternalsPlugin } from 'vite-plugin-externals'

const outputs: { format: 'es' | 'cjs'; dir: string }[] = [
  { format: 'es', dir: 'dist/es' },
  { format: 'cjs', dir: 'dist/lib' },
]

export default defineConfig({
  plugins: [
    ...outputs.map((output) => {
      return dts({
        outputDir: output.dir,
      })
    }),
    viteExternalsPlugin({
      'vue': 'Vue',
      'vue-router': 'VueRouter',
    }),
  ],
  build: {
    minify: false,
    lib: {
      entry: './src/index.ts',
    },
    rollupOptions: {
      external: [/vite-plugin-qiankun\/dist\/helper/],
      output: outputs.map((output) => {
        return {
          ...output,
          entryFileNames: (chunkInfo) => {
            let { name } = chunkInfo

            if (/node_modules/.test(name)) {
              // 处理node_modules
              name = name.replace(/node_modules/g, `.node_modules_${output.format}`)
            }

            return output.format === 'es' ? `${name}.mjs` : `${name}.cjs`
          },
          preserveModules: true,
          preserveModulesRoot: 'src',
        }
      }),
    },
  },
})
