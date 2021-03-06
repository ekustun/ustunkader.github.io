
// https://themealdb.com/api/json/v1/1/search.php?s=pizza

const BASE_URL = 'https://themealdb.com/api/json/v1/1/search.php?';

let mealData;
let userInput;
const $instructions = $('#instructions');
const $input = $('input[type="text"]');
const $link = $('#imagelink');
const $image = $('#img');
const $list1 = $('#li1');
const $list2 = $('#li2');
const $list3 = $('#li3');
const $list4 = $('#li4');
const $list5 = $('#li5');
const $name = $('#name');
const $foodregion = $('#foodregion');
const $foodtype = $('#foodtype');



$('form').on('submit', handleGetData);

function handleGetData(event){
    event.preventDefault();
    userInput = $input.val();

    $.ajax(BASE_URL + 's=' + userInput).then(
        (data)=>{
            mealData = data;
            
            render();


        },
        (error)=>{
            console.log("Error: ", error);
        }
    )

}

function render(){

    
    // Getting recipe as a list
    let arr=[];
    arr.push(mealData.meals[0].strInstructions.split("\r\n\r\n"))
    let newArr = arr[0].map(s=>s.slice(2))
    console.log(newArr)
    newArr.forEach(element => {
        $('#instructions').append($('<li>').text(element));
    });


    // Image
    let imgNew = document.getElementById('image-alt');
    imgNew.src = mealData.meals[0].strMealThumb;
    imgNew.style.height= "250px";
    imgNew.style.width = "250px";
    $image.append(imgNew);

    
    // Ingredients
    $list1.text(mealData.meals[0].strIngredient1);
    $list2.text(mealData.meals[0].strIngredient2);
    $list3.text(mealData.meals[0].strIngredient3);
    $list4.text(mealData.meals[0].strIngredient4);
    $list5.text(mealData.meals[0].strIngredient5);
   
    // Name of the food
    $name.text(mealData.meals[0].strMeal);

    // Country
    $foodregion.text(mealData.meals[0].strArea);

    // tags
    $foodtype.text(mealData.meals[0].strTags);
   
    // Ingredients are added to shopping list when clicked
    $('#li1').click(function(){
        let existingList = document.getElementById('item1');
        existingList.append(this.innerText);
        
    })
    
    $('#li2').click(function(){
        let existingList = document.getElementById('item2');
        existingList.append(this.innerText)
    })
    $('#li3').click(function(){
        let existingList = document.getElementById('item3');
        existingList.append(this.innerText);
        
    })
    $('#li4').click(function(){
        let existingList = document.getElementById('item4');
        existingList.append(this.innerText);
        
    })
    $('#li5').click(function(){
        let existingList = document.getElementById('item5');
        existingList.append(this.innerText);
        
    })
    


}
