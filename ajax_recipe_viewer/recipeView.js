//array for displaying the recipe descriptions
var recipeInfo = ["Recipe: ","Recipe Servings: ", "Recipe Time: ", "Recipe Creator: ", ""];

//array of JSON object recipes
var jsFile = ["recipe1.js", "recipe2.js", "recipe3.js", "recipe4.js", "recipe5.js", "recipe6.js"];

let p = 0;

//randomize the JSON array of files for randomly ordering the recipes on site load
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

//call the randomize function on page load or on view recipe
shuffleArray(jsFile);

//function that receives parameter based on which button is clicked
//decides wheter to view first recipe, next recipe or previous recipe
    function  viewRecipe(view){

    var txt = "";
    
    //if the first view recipe is click, load a random recipe to display
    //brings up the next button but not previous button
    if(view == "viewClick"){

        shuffleArray(jsFile);

        p = 0;

        document.getElementById("recipeViewFull").innerHTML = "";

        fetch(jsFile[p])
        .then(function(resp){
            return resp.json();
        })
        .then(function(data){
            var x;
            var i = 0;

            txt +=  data["recipe_name"] + "<br>" +
                    data["recipe_img"] + "<br>" +
                    "<p><button onclick='fullRecipe(p)'>Select</button></p>"

            document.getElementById("previous").style.visibility = "hidden";
            document.getElementById("next").style.visibility = "visible";
            document.getElementById("recipeView").innerHTML = txt;
        })
        
    }
    //if next button is clicked, then insert the nextClick parameter 
    //selects recipe based on jsFile index
    else if(view == "nextClick"){
        p++;

        //if the index is greater than the jsFile length
        //then don't do anything and return
        //shouldn't happen as the next button should not appear when it reaches this point
        if(p >= jsFile.length){
            p--;
            return;
        }
        //if the index has reached the last position then remove the next button
        else{
            if(p == jsFile.length - 1){
                document.getElementById("recipeViewFull").innerHTML = "";

                fetch(jsFile[p])
                .then(function(resp){
                    return resp.json();
                })
                .then(function(data){
                    var x;
                    var i = 0;

                    txt +=  data["recipe_name"] + "<br>" +
                            data["recipe_img"] + "<br>" +
                            "<p><button onclick='fullRecipe(p)'>Select</button></p>"

                    document.getElementById("previous").style.visibility = "visible";
                    document.getElementById("next").style.visibility = "hidden";
                    document.getElementById("recipeView").innerHTML = txt;
                })
            }
            //if the index is not the last position or the first position
            //then include the previous and next button
            else{
                document.getElementById("recipeViewFull").innerHTML = "";

                fetch(jsFile[p])
                .then(function(resp){
                    return resp.json();
                })
                .then(function(data){
                    var x;
                    var i = 0;

                    txt +=  data["recipe_name"] + "<br>" +
                            data["recipe_img"] + "<br>" +
                            "<p><button onclick='fullRecipe(p)'>Select</button></p>"

                    document.getElementById("next").style.visibility = "visible";
                    document.getElementById("previous").style.visibility = "visible";
                    document.getElementById("recipeView").innerHTML = txt;
                })
            }
        }

    }
    //if previous button is clicked, then insert the previousClick parameter 
    //selects recipe based on jsFile index
    else if(view == "previousClick"){
            p--;

            //if the index is less than zero then, stop function and return
            //shouldn't happen as the index incrementer/decremeter is put in place
            if(p == -1){
                p = 0;
                return
            }
            else{
                //if the jsFile index is at the first spot 0, then don't include the previous button
                if(p == 0){
                    document.getElementById("recipeViewFull").innerHTML = "";

                    fetch(jsFile[p])
                    .then(function(resp){
                        return resp.json();
                    })
                    .then(function(data){
                        var x;
                        var i = 0;

                        txt +=  data["recipe_name"] + "<br>" +
                                data["recipe_img"] + "<br>" +
                                "<p><button onclick='fullRecipe(p)'>Select</button></p>"

                        document.getElementById("previous").style.visibility = "hidden";
                        document.getElementById("next").style.visibility = "visible";
                        document.getElementById("recipeView").innerHTML = txt;
                    })                            
                }
                //include the previous button as long as the index is not <= 0
                else{
                    document.getElementById("recipeViewFull").innerHTML = "";

                    fetch(jsFile[p])
                    .then(function(resp){
                        return resp.json();
                    })
                    .then(function(data){
                        var x;
                        var i = 0;

                        txt +=  data["recipe_name"] + "<br>" +
                                data["recipe_img"] + "<br>" +
                                "<p><button onclick='fullRecipe(p)'>Select</button></p>"

                        document.getElementById("previous").style.visibility = "visible";
                        document.getElementById("next").style.visibility = "visible";
                        document.getElementById("recipeView").innerHTML = txt;
                    })
                        }
                    }
            } 
         }


         //display the full recipe with instructions and ingriedents 
         function  fullRecipe(){

            var txt = "";

            fetch(jsFile[p])
            .then(function(resp){
                return resp.json();
            })
            .then(function(data){
                var x;
                var i = 0;
                
                for(x in data){

                    if(data[x] == data["recipe_instructions"]){
                        txt += "Recipe Instructions" + "<br>";
                        for(x in data["recipe_instructions"]){
                            txt += data.recipe_instructions[x] + "<br>";
                        }
                    }
                    else if(data[x] == data["recipe_ingredients"]){
                            txt += "Recipe Instructions" + "<br>";
                            for(x in data["recipe_instructions"]){
                                txt += data.recipe_instructions[x] + "<br>";
                            }
                    }
                    else{
                    txt += recipeInfo[i] + " " + data[x] + "<br>";
                    i++;
                    }
                }

                document.getElementById("recipeViewFull").innerHTML = txt;
            })
            
         }
