function NumberFilter(){
 
    //define an array of numbers
    const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 
    //use filter to keep only even numbers--num % 2 === 0 (how to figure out even or odd)
    //num % 2 === 0....is used to determine if # is even/odd
 
    return(
 
        <>
        <h2>Even Numbers</h2>
        <ul>
            {number
                .filter((num) => num % 2 === 0)//keep only even numbers
                .map((num, index) => (
 
                    <li key={index}>{num}</li>
                ))
            }
        </ul>
 
        </>
 
    );
 
}
export default NumberFilter
