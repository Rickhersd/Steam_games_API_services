type GameType = {
	id: number,
	price: number,
	valoration: number,
	name: string,
	metascore: string,
}

class Game {

	id: number;
	price: number;
	valoration: number;
	name: string;
	metascore: string;

	constructor(id: number, price: number, valoration: number, app_name: string, metascore: string){
		this.id = id;
		this.price = price;
		this.valoration = valoration;
		this.metascore = metascore;
		this.name = app_name;
	}
}


export default Game