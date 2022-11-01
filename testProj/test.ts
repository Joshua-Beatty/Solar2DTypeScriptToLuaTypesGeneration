function hello(this: void){
    return "hi"
}

let thing = hello()

let thing2 = display.newRect(2, 3,3,4,)
thing2.setFillColor(255, 255, 0);
thing2.path = [3,4,5, "Asd"]