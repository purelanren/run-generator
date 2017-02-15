function run (gen) {
  let it = gen()
  function next(data) {
    let result = it.next(data)
    if (result.done) {
      return result.value
    }
    result.value.then(next)
  }
  next()
}

