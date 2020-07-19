const executeFolder1 = require('./folder1/folder1')
const executeFolder2 = require('./folder2/folder2')
const executeFolder3 = require('./folder3/folder3')

const orders = { order2: 2, order3: 3, order4: 4, order5: 5 }

async function mainFunction(data) {
  let result1 = await executeFolder1(data)
  let result2 = await executeFolder2(data)
  let result3 = await executeFolder3(data)
  console.log(result1)
  console.log(result2)
  console.log(result3)
}

mainFunction(orders)
