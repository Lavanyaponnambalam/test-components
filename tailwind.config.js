
    /** @type {import('tailwindcss').Config} */
    import { agnikulUIConfig } from './agnikul-ui.config';
    export default {
      content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
      theme: {
        extend: {
          ...agnikulUIConfig
        },
      },
      plugins: [],
    };