// process.argv.forEach((val, index) => {
//     console.log(`${index}: ${val}`)
//   })
//   const args = process.argv.slice(2)
// console.log(args[0])
// const args = require('minimist')(process.argv.slice(2))
// console.log(args['name']) 

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   })
  
//   readline.question(`What's your name?`, name => {
//     console.log(`Hi ${name}!`)
//     readline.close()
//   })
const inquirer = require('inquirer')

var questions = [
  {
    type: 'input',
    name: 'name',
    message: "What's your name?"
  }
]

inquirer.prompt(questions).then(answers => {
  console.log(`Hi ${answers['name']}!`)
})