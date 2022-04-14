  /* This function calculates the volume of a sphere. 
*/

function Calculate_volume() {
  // input
  let Radius = parseInt( (document.getElementById('Radius-here').value));

  
  // naming constants and stuff
  const Sphere_rate = 1.333333333;
  
  let Sphere_volume = Radius * Radius * Radius * Math.PI * Sphere_rate;
  // remember to use .toFixed(2) to round to two decimal places
  
  // output for area
  document.getElementById('Sphere-results').innerHTML = "Your volume rounded to the nearest hundreth is " + Sphere_volume.toFixed(2) + "cm."


  // unused/currently testing code:

  //   let Side_b = parseInt( (document.getElementById('Side-b-here').value));
  //   let Height = parseInt((document.getElementById('Height-here').value));  

  
}