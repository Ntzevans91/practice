
function Greet(){
let today = new Date()
let hour = today.getHours()

if (hour < 12) {
  return(<h3>'good morning'</h3>)
} else if (hour < 18) {
  return(<h3>'good afternoon'</h3>)
} else {
  return(<h3>'good evening'</h3>)
}
}
export default Greet