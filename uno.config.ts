import * as fs from 'node:fs'
import { defineConfig } from 'unocss'
import { rokuPreset } from '@roku-ui/preset'

let file = ''
try {
  file = fs.readFileSync('node_modules/@roku-ui/vue/dist/index.js', 'utf-8')
}
catch {
  console.error('Failed to read file')
}

export default defineConfig({
  presets: [
    rokuPreset(),
  ],
  content: {
    inline: [file],
  },
})
