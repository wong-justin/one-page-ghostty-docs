// (() => {
  let count = 0

  let generateID = () => 'uid-' + count++

  for (let i=0; i++; i<10) {
    console.log(generateID())
  }
  
  export { generateID }

// })()

