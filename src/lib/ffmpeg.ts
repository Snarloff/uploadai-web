import { FFmpeg } from '@ffmpeg/ffmpeg'

import coreURL from '@/ffmpeg/ffmpeg-core.js?url' // Carregar assincronamente o arquivo ffmpeg-core.js
import wasmURL from '@/ffmpeg/ffmpeg-core.wasm?url' // Carregar assincronamente o arquivo ffmpeg-core.wasm
import workerURL from '@/ffmpeg/ffmpeg-worker.js?url' // Carregar assincronamente o arquivo ffmpeg-worker.js

let ffmpeg: FFmpeg | null

export async function getFFmpeg() {
  if (ffmpeg) {
    return ffmpeg
  }

  ffmpeg = new FFmpeg()

  if (!ffmpeg.loaded) {
    await ffmpeg.load({
      coreURL,
      wasmURL,
      workerURL,
    })
  }

  return ffmpeg
}
