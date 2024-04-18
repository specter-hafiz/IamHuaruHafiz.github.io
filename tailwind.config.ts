import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "hero": "url('/images/card-hello-background.png')",
      },
      colors:{
        'dark_violet':'#09050f',
        'brown_dark':'#131311',
        'cream_white':'#f5f5f5'
      }
    },
  },
  plugins: [],
};
export default config;


// skill  background: linear-gradient(18.48deg, rgba(255, 255, 255, .15) 2.76%, rgba(255, 255, 255, .05) 17.23%), linear-gradient(200.6deg, rgba(255, 255, 255, .15) 4.13%, rgba(255, 255, 255, .05) 20.54%);


// font-family: Archivo, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif;
// }


// small boxes background: rgba(255, 255, 255, .02);