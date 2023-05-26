import gltf from 'vite-plugin-gltf';
// import { textureResize } from '@gltf-transform/functions';

import { defineConfig } from "vite"

export default defineConfig({
    build: {
        chunkSizeWarningLimit: 1500,
        
    },
    plugins: [ 
        gltf({
        //   transforms: [ textureResize({ size: [ 1024, 1024 ] }) ]
        }) 
      ]
      // ...
})