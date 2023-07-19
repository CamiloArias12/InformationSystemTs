/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      backgroundImage:{
	 'img-bg':"url('https://www.iamcountryside.com/wp-content/uploads/2019/03/AdobeStock_126414595-scaled-e1666730922274.jpeg')",
	 'img-profile':"url('https://www.pngkit.com/png/detail/281-2812821_user-account-management-logo-user-icon-png.png')"
      },
      height:{
	 'dash':'cal(100vh - 10px)'

      }

    },
  },
  plugins: [],
}

