function findMatching(source, sought) {
    return source.filter(
      (match) => match.toLowerCase() === sought.toLowerCase()
    );
  }
  

  function fuzzyMatch(source, string) {
    return source.filter(
        (match) => match.toLowerCase().indexOf(string.toLowerCase()) === 0 

    )
  } 
function matchName(source, sname){ 
    return source.filter((record) => record.name === sname)
}