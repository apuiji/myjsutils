// not nullish
export let nn = v => v !== void 0 && v !== null

export function * sequence () {
  let i = 0n
  for (; ; ) {
    yield i++
  }
}

export let promise = () => {
  let a, b
  let p = new Promise((resolve, reject) => {
    a = resolve
    b = reject
  })
  return [p, a, b]
}

// integer random
export let randomi = k => (Math.random() * k) >>> 0

export let regexec = (re, src, i = 0) => {
  re.lastIndex = i
  return re.exec(src)
}

export let sleep = ms => {
  let [p, a] = promise()
  setTimeout(a, ms)
  return p
}
