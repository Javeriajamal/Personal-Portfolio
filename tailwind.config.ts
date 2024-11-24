import { Inter } from "@next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	"types/**/*.d.ts",
  ],
  theme: {
  	extend: {
  		colors: {
  			black: {
  				'100': '#000319',
  				DEFAULT: '#000'
  			}
  		},
		screens: {
			'xs': '320px',
		},

  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	},
  	plugins: []
  },
    plugins: [require("tailwindcss-animate")]
}
export default config;
