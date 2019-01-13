export class Commande {

    private _id : number;
    private _numero : string;
    private _dateCommande : Date;
    private _datePaiment : Date;
    private _dateLivraison : Date;
    
    

    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter numero
     * @return {string}
     */
	public get numero(): string {
		return this._numero;
	}

    /**
     * Getter dateCommande
     * @return {Date}
     */
	public get dateCommande(): Date {
		return this._dateCommande;
	}

    /**
     * Getter datePaiment
     * @return {Date}
     */
	public get datePaiment(): Date {
		return this._datePaiment;
	}

    /**
     * Getter dateLivraison
     * @return {Date}
     */
	public get dateLivraison(): Date {
		return this._dateLivraison;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter numero
     * @param {string} value
     */
	public set numero(value: string) {
		this._numero = value;
	}

    /**
     * Setter dateCommande
     * @param {Date} value
     */
	public set dateCommande(value: Date) {
		this._dateCommande = value;
	}

    /**
     * Setter datePaiment
     * @param {Date} value
     */
	public set datePaiment(value: Date) {
		this._datePaiment = value;
	}

    /**
     * Setter dateLivraison
     * @param {Date} value
     */
	public set dateLivraison(value: Date) {
		this._dateLivraison = value;
	}



}
