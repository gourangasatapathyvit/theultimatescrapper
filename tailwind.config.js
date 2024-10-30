/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "input-grey": "#D9D9D9",
            },
        },
    },
    plugins: [daisyui],
};
