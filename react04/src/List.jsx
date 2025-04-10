function List(){
    //0  1  2  3  4  //indexes
const numbers = ["1", "2", "3", "4", "5"]; //number

//syntax

return (
<>
<h2>{"Rendering a list of numbers using .map()"}</h2>
{numbers.map((number,index) => (
<ul>
<li key={index}>{number}</li>
</ul>
))}
</>
)
}
export default List;