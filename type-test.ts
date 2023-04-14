const daysInWeek = 7;
const fullName = "Ada Lovelace"
const isRaining = false
const add = (x: number, y: number) => x+y;

const everything = [daysInWeek, fullName, isRaining, add]

for (const value of everything){
    console.log( `${value} ${typeof(value)}`)
}