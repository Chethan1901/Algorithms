// <!DOCTYPE html>
// <html>
// <head>
//   <meta charset = "utf-8">
//   <title>Create a Circle</title>
//   <h1 style="text-align:center">Create a Circle!</h1>
//   <br>
//   <div style="text-align:center">
//   Enter the radius for your circle:
//   <input type="text" id="txtRadius" size="10" />
//   <br>
//   <input type="button" value="Calculate" onclick="CalculateArea()"/>

//   <script>

  function print() {
    var p = 
    document.createElement("p"),
    text = Array.prototype.join.call(arguments,",");
    p.textContent = text;
    document.getElementById("console").appendChild(p);
    return text;    
  }

  function CalculateCircumference() {
    var radius =
    parseInt(document.getElementById('txtRadius').value);//String to Integer

    if (0 < radius)
        print("The circumference of the circle is " + (radius * 2 * Math.PI);
    else
        print("Error - radius must be a whole number greater than 0.");
    return false;
  }

  function CalculateArea() {
    var radius = 
    parseInt(document.getElementById('txtRadius').value); //String to Integer

    if (0 < radius)
        print("The area of the circle is " + (radius * radius * Math.PI);
    else
        print("Error - radius must be a whole number greater than 0.");
    return false;
  }
// </script>
// </head>
// <body>
// </body>   
// </html>