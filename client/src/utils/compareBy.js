export default function compareBy (sortBy, sortDir) {
  return (a, b) => {
    let sortVal = 0;

    if (a[sortBy] > b[sortBy]) sortVal = 1;
    if (a[sortBy] < b[sortBy]) sortVal = -1;
    if (sortDir === 'DESC' ) sortVal = sortVal * -1

    return sortVal;
  }
}