function RGBAToHex(rgba = "") {
  const rgbaValues = rgba
    .match(/(\d+(\.\d+)?)/g)
    .map((value) => parseFloat(value));

  const hex = (x) => ("0" + Math.round(x).toString(16)).slice(-2);

  return (
    "#" +
    hex(rgbaValues[0]) +
    hex(rgbaValues[1]) +
    hex(rgbaValues[2]) +
    (rgbaValues[3] ? hex(Math.round(rgbaValues[3] * 255)) : "")
  );
}

console.log(RGBAToHex("rgba(255,255,255,0.3)"));
