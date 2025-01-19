let flower = "hybiscus";//global scope
function types()
{
    const fruitName = "APPLE";//functional scope
    console.log(fruitName);
}
types();
{
    const flowerName = "ROSE";// block scope
    console.log(flowerName);
    let flower2Name = "jasmine";
    console.log(flower2Name);
     flower2Name = "lilli";
     console.log(flower2Name);
}
console.log(flower);
