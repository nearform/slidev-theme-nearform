import { resolve } from 'path'
import { defineUnoSetup } from '@slidev/types'

export default defineUnoSetup(() => ({
  extract: {
    include: [
      resolve(__dirname, '**/*.vue'),
    ],
    exclude: [
      resolve(__dirname, 'node_modules'),
    ],
  },
  shortcuts: {
    'bg-main': 'bg-white text-[#555] dark:(bg-[#121212] text-[#ddd])',
  },
}))
