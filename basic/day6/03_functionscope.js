function parent(){
    const icecream = "Vanilla";

    function child(){
        const chocolate = "DairyMilk";
        console.log(icecream);
    }
    // console.log(chocolate); //yaha error auxa why?
    child();
}
parent();

//-------------------note----------------- best way to understand
//parent ko icecream child ley magda hunxa but child snga parent ley magera khada baccha runcha so mildaena jsto bhayo 