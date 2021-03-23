interface CharacterBuild{
	charName: string;
	charAge: number;
	charFeet: number;
	charInches: number;
	charClass: string;
	charRole: string;
	charMotto: any;
	charDescription: any;
}

function charBuild(){
	
	let age: number = parseInt((<HTMLInputElement>document.getElementById("charAge")).value);
	let agePhrase: string;
	let height: number = parseInt((<HTMLInputElement>document.getElementById("charFeet")).value);
	let heightPhrase: string;

	if(age > 65){
		agePhrase = "You are an older adventurer at the age of ";
	}else if(age < 30){
		agePhrase = "You are a younger adventurer at the age of ";
	}else{
		agePhrase = "You are a middle-aged adventurer at the age of ";
	}
	
	if(height > 7){
		heightPhrase = "and stand a massive "
	}else if(height < 4){
		heightPhrase = "and stand a pathetic "
	}else{
		heightPhrase = " and stand an average "
	}
	
	let char: CharacterBuild = {
		charName:(<HTMLInputElement>document.getElementById("charName")).value,
		charAge: parseInt((<HTMLInputElement>document.getElementById("charAge")).value),
		charFeet: parseInt((<HTMLInputElement>document.getElementById("charFeet")).value),
		charInches: parseInt((<HTMLInputElement>document.getElementById("charInches")).value),
		charClass: (<HTMLInputElement>document.getElementById("charClass")).value,
		charRole: (<HTMLInputElement>document.getElementById("charRole")).value,
		charMotto: (<HTMLInputElement>document.getElementById("charMotto")).value,
		charDescription: function (){
			return "<h2>Your Hero:</h2>" + 
				"You go by the name " + "<span class='descrip'>"+this.charName+"</span>" + "." + "<br>" +
				agePhrase + " " + "<span class='descrip'>"+this.charAge+"</span>" + " " +
				heightPhrase + " " + "<span class='descrip'>"+this.charFeet+"</span>" + " feet and " + "<span class='descrip'>"+this.charInches+"</span>" + " inches tall." + "<br>" +
				"You are a powerful " + "<span class='descrip'>"+this.charClass+"</span>" + " that takes on a " + "<span class='descrip'>"+this.charRole+"</span>" + " role while adventuring." + "<br>" +
				"The motto you live by is: " + "<span class='descrip'>"+this.charMotto+"</span>"
		}
	}
	
	
	document.getElementById("charDisplay").innerHTML = char.charDescription();
	
}

function clearChar(){
	document.getElementById("charDisplay").innerHTML = "";
}

