type GameType = {
	id: number,
	price: number,
	valoration: number,
	name: string
}

class Game {

	id: number;
	price: number;
	valoration: number;
	name: string;

	constructor(id: number, price: number, valoration: number, name: string){
		this.id = id;
		this.price = price;
		this.valoration = valoration;
		this.name = name;
	}

}


export default Game