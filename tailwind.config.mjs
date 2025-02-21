/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            container: {
                center: true, // Centers container
                padding: "3rem", // Adds padding inside container
            },
            colors: {
                // Dark Mode Palette
                "dark-background": "#121212",
                "dark-surface": "#1E1E1E",
                "primary-color": "#F0524B", // Your logo color
                "primary-hover-color": "#F26A63", // Your logo color
                "dark-primary-text": "#FFFFFF",
                "dark-secondary-text": "#A0A0A0",
                "dark-icon": "#F5F5F5",
                "dark-secondary-accent": "#4CAF50", // Muted green (use sparingly)

                // Light Mode Palette (Optional - Include if needed)
                "light-background": "#FFFFFF", // Example
                "light-primary-text": "#333333", // Example
                // ... other light mode colors
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"], // Uses Inter font (configured with next/font)
            },
            spacing: {
                128: "32rem", // Adds custom spacing
            },
        },
    },
    plugins: [],
};
