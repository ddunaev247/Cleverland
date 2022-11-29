'use scrict'
// task 1
let fruits = ["Яблоко", "Апельсин", "Слива"]
fruits.push('Абрикос')
fruits.splice(0,0,'Нектарин','Персик')
fruits.splice(2,2)
let favoriteFruits = fruits.filter((item,index)=>index<=2)
let berries = ['Барбарис', 'Виноград', 'Годжи']
fruits.concat(berries)
console.log(fruits.length)
favoriteFruits.forEach((e,i)=>console.log(`Фрукт:${e}, индекс:${i}`))
console.log(fruits.indexOf('Слива'), fruits.includes('Яблоко'))

//task 2
let arr = [2, -15, 12, 83, -29, 111, -6, 22]
console.log()
arr.map(item=>String(item)).forEach((el,ind)=>el.length===3?console.log(ind):null)
arr.forEach(i=>i%5==0?console.log(i):null)
console.log(arr.sort((a,b)=> a-b))
console.log(arr.sort((a,b)=> b-a))
console.log(arr.reverse())
console.log(arr.reduce((pr,cur)=>pr*cur))
console.log(arr.reduce((pr,cur)=>pr+cur,0)/arr.length)


