import { copyFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const distIndex = fileURLToPath(new URL('../dist/index.html', import.meta.url))
const dist404 = fileURLToPath(new URL('../dist/404.html', import.meta.url))

await copyFile(distIndex, dist404)
