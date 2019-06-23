process.stdin.resume()
process.stdin.setEncoding('utf8')

console.log('How old are you? ')
process.stdin.on('data', (age) => {
  if (isNaN(age) == false && age < 99){

    console.log('You were born in ' + '2019' - age));
  process.exit()
})