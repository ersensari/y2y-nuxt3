/// <reference types="vite-svg-loader" />

// declaration.d.ts
declare module '*.scss' {
  const content: { [className: string]: string }
  export default content
}
