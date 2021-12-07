//write your code here
const animals =['cheetah','dog', 'cat', 'dodobird', 'bear', 'dolphin']

// Q1
const pluralize = (arr) => {
    const plural = arr.map(singular => {
        return `${singular}s`
    })
    return plural
}

// Q2
const uppercase = (arr) => {
    return arr.map(words => words[0].toUpperCase() + words.substring(1));
}

// Q3
const longWords = (arr) => {
    const moreThanThree = arr.filter(words => {
      if (words.length > 3) {
        return words
      }
    })

    return moreThanThree
}

// Q4
const shortWords = (arr) => {
    const lessThanFive = arr.filter(words => {
        if(words.length < 5) {
            return words
    }
})
  return lessThanFive
}

// Q5
const oddLength = (arr) => {
     const odd = arr.filter(words => {
       if (words.length % 2 !== 0) {
         return words
       }
     })
     return odd
}

// Q6
const longToShort = (arr) => {
   const sort = arr.sort((a, b) => {
     return b -a;
   })
   return sort
}

 const numbers = [22, 15, 1114, 416, 37, 4]
// Q7
const sum = (arr) => {
    const sumUp = arr.reduce((total, num) => {
      return total += num
    }, 0)
    return sumUp
}