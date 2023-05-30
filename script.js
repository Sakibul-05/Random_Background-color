 const button = document.getElementById("btn");
      function randomRgbColor() {
        let red = parseInt(Math.random() * 256);
        let green = parseInt(Math.random() * 256);
        let blue = parseInt(Math.random() * 256);
        return `rgb(${red},${green},${blue})`;
      }
      console.log(randomRgbColor());
      function changeBackground() {
        let rgb = randomRgbColor();
        document.body.style.backgroundColor = rgb;
        let showRgbValue = document.getElementById("showRgbValue");
        showRgbValue.innerText = rgb;
        showRgbValue.style.fontWeight = "bold";
      }
