const printTable = function(sheetNum){
  let table = '';
  for(let i = 1; i <= sheetNum; i ++){
    table = table + i + ':_____________;';
  };
  return table;
};
//if you want to a sheet with 110 answers,then sheetNum = 110
console.log(printTable(110));