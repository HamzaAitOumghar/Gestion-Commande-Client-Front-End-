export class Produits {

    private _id:number;
    private _libelleProduit:string;
    private _prixProduit:number;
    
    


    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter libelleProduit
     * @return {string}
     */
	public get libelleProduit(): string {
		return this._libelleProduit;
	}

    /**
     * Getter prixProduit
     * @return {number}
     */
	public get prixProduit(): number {
		return this._prixProduit;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter libelleProduit
     * @param {string} value
     */
	public set libelleProduit(value: string) {
		this._libelleProduit = value;
	}

    /**
     * Setter prixProduit
     * @param {number} value
     */
	public set prixProduit(value: number) {
		this._prixProduit = value;
	}


}



