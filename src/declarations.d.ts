interface ImportMetaEnv {
  readonly VITE_EMAILJS_SERVICE_ID: string;
  readonly VITE_EMAILJS_TEMPLATE_ID: string;
  readonly VITE_EMAILJS_PUBLIC_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "*.pdf" {
  const content: string;
  export default content;
}

declare module "*.gif" {
    const content: string;
    export default content;
}

declare module "*.pdf" {
    const value: string;
    export default value;
}

declare module "*.svg" {
    const content: string;
    export default content;
}

declare module "*.png" {
    const content: string;
    export default content;
  }