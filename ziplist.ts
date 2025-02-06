function zipList(arr1 : string[], arr2 : string[]) : string[] {
  const output : string[] = [];
  for (let x = 0; x < arr1.length; x++) {
    output.push(arr1[x]);
    output.push(arr2[x]);
  }
  return output;
}

function zipListTheFunctionalWay(arr1 : string[], arr2 : string[]) {
  let output : string[] = [];
  const bigarray : string[][] = arr1.map((element, index) => [element, arr2[index]]);
  output = bigarray.reduce((finalarray, pair) => {
    finalarray.push(pair[0]);
    finalarray.push(pair[1]);
    return finalarray;
  });

  return output;
}

console.log(zipList(['1', '2', '3'], ['a', 'b', 'c']));
console.log(zipListTheFunctionalWay(['1', '2', '3'], ['a', 'b', 'c']));
