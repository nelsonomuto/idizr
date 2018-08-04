function* simpleIdGenerator () {
  let id = 0;
  while(true) {
    yield id++
  }
}

export default function idizr(input, arrIdMaker) {
  for (let p in input) {
    const idMaker = arrIdMaker || simpleIdGenerator()
    const val = input[p]
    if (Array.isArray(val)) {
      const arrIdMaker = simpleIdGenerator()
      val.forEach((v, idx) => idizr({v}, arrIdMaker))
    } else if (typeof val === 'object') {
      val.id = idMaker.next().value.toString()
      idizr(val)
    }
  }
  return input
}

