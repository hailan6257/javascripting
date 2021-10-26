function judgeVegetable(vegetables, metric){
  let array = [];
  for(let vegetable of vegetables){
    for( let i in vegetable){
      if(i === metric){
        array.push(vegetable[i]);
      }
    }
  }
  let max = Math.max(...array);
  let choice;
  for( let i = 0; i < array.length; i++){
    if(array[i] == max){
      choice = vegetables[i].submitter;
    }
  }
  return choice;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

judgeVegetable(vegetables, metric)