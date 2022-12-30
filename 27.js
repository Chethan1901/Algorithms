// Write a program to classify the triangle as equilateral, isosceles and scalene to the given sides of
// triangle.(HINT: Solve using semi-perimeter and area)

let findTriangle=(a,b,c)=>{
    if ((a+b<=c) && (b+c<=a) && (c+a<=b)){
        console.log("it is not a triangle")
    }
    else{
        if (a == b && b == c){
            console.log("Equilateral Triangle");
        }
        else if (a == b || b == c || c == a) {
            console.log("Isosceles Triangle");
        }
        else {
            console.log("Scalene Triangle");
        }
    }
    

}
findTriangle(25,30,40)
