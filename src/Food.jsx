function Food(){

const food = ["Pizza", "Sushi", "Ice Cream"];
let title = "Some of my fav foods";

return(

<ul>
    <li>{title.toUpperCase()}</li>
    <li>{food[0]}</li>
    <li>{food[1]}</li>
    <li>{food[2]}</li>
</ul>

);

}

export default Food;