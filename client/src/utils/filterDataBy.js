export default function filterDataBy (array, key, value) {  
  return [...array]
    .filter(item => {
      return item[key].toString().toLowerCase().indexOf(value.toLowerCase()) >= 0
    })
    .map(item => item)
}