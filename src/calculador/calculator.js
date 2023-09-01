export default function calculador(cadena) {
  if (cadena == '') {
    return 0
  }
  if (cadena.includes('+')) {
    let nums = cadena.split("+")
    return nums.reduce((a, b) => parseInt(a) +parseInt(b))
  }

  return parseInt(cadena)
}
