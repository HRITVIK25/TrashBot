/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      colors:{
        "custom-yellow" : "#FFD60A",
        "custom-yellow-dark" : "#FFC300",
        "custom-blue" : "#003566",
        "custom-blue-dark" : "#001D3D",
        "custom-gray" : "#C1C1C1",
      },
      height:{
        600: "600px"
      },
      fontFamily:{
        "jost": ["jost","sans-serif"]
      }
    },
  },
  plugins: [],
}

