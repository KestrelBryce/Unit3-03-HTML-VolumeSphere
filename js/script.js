  /* This function calculates the volume of a sphere. 
*/

function Calculate_volume() {
  // input
  let Side_a = parseInt( (document.getElementById('Side-a-here').value));
  let Side_b = parseInt( (document.getElementById('Side-b-here').value));
  let Height = parseInt((document.getElementById('Height-here').value));
  
  // naming constants and stuff
  const Half_rate = 0.5;
  
  let Sphere_volume = (Side_a + Side_b) * 0.5 * Height;
  // remember to use .toFixed(2) to round to two decimal places
  
  // output for area
  document.getElementById('Sphere-results').innerHTML = "Your volume rounded to the nearest hundreth is " + Sphere_volume.toFixed(2) + "cm."


  // unused/currently testing code:

  

  
}