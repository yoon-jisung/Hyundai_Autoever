import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        container: 'var(--max-width)',
      },
      colors: {
        mint: {
          900: 'var(--mint-900)',
          700: 'var(--mint-700)',
        },
        midnight: {
          900: 'var(--midnight-900)',
          100: 'var(--midnight-100)',
        },
        gray: {
          700: 'var(--gray-700)',
          500: 'var(--gray-500)',
          400: 'var(--gray-400)',
          300: 'var(--gray-300)',
          200: 'var(--gray-200)',
          100: 'var(--gray-100)',
          50: 'var(--gray-50)',
          10: 'var(--gray-10)',
        },
        red: 'var(--red)',
        blue: 'var(--blue)',
      },
      lineHeight: {
        sm: 'var(--line-height-sm)',
        md: 'var(--line-height-md)',
        lg: 'var(--line-height-lg)',
      },
      transitionTimingFunction: {
        primary: 'var(--cubic-bezier-primary)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        kia: ['var(--font-kia)', 'Kia Signature Fix', 'Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
