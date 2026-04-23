/**
 * combines multiple arrays of usernames into a single object.
 * @param {...Array} userArrays - Multiple arrays of usernames .
 * @return {Object} An object containing the merged users and the merge date.
 */
function combineUsers(...userArrays) {
  //Use the spread operator to flatten all incoming arrays into one
  const mergedUsers =[].concat(...userArrays);

  //Alternatively,using the spread operator within the array literal :
  //const mergedUsers = [].concat(...userArrays);
  //Or more modernly :const mergedUsers = userArrays.flat();

  return {
    users: mergedUsers,
    mergedAt: new Date().toISOString() //Returns today's date 
  };
}

//Export the function using CommonJS (typical for Node.js lab environments)
module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};