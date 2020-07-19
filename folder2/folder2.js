async function executeFolder2(data) {
  let promise = new Promise((res, rej) => {
    const resultObj = Object.keys(data).map((item) => data[item])
    setTimeout(() => res(resultObj, 1000))
  })
  let result = await promise
  return result.join(' -> ')
}

module.exports = executeFolder2
