// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  console.log(findMatching(drivers, "Bobby"))
  console.log(findMatching(drivers, "Susan"))

  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
  }
  console.log(fuzzyMatch(drivers, "Sa"));
  
  const drivers2 = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
  
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }

  console.log(matchName(drivers2, "Bobby"));
  

  
  
  