export class Fournisseur {


    private _id:number;
    private _libelle:string;
    private _adresse:string;
    private _ville:string;
    private _telephone:string;
    private _email:string;
    
    
    

    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter libelle
     * @return {string}
     */
	public get libelle(): string {
		return this._libelle;
	}

    /**
     * Getter adresse
     * @return {string}
     */
	public get adresse(): string {
		return this._adresse;
	}

    /**
     * Getter ville
     * @return {string}
     */
	public get ville(): string {
		return this._ville;
	}

    /**
     * Getter telephone
     * @return {string}
     */
	public get telephone(): string {
		return this._telephone;
	}

    /**
     * Getter email
     * @return {string}
     */
	public get email(): string {
		return this._email;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter libelle
     * @param {string} value
     */
	public set libelle(value: string) {
		this._libelle = value;
	}

    /**
     * Setter adresse
     * @param {string} value
     */
	public set adresse(value: string) {
		this._adresse = value;
	}

    /**
     * Setter ville
     * @param {string} value
     */
	public set ville(value: string) {
		this._ville = value;
	}

    /**
     * Setter telephone
     * @param {string} value
     */
	public set telephone(value: string) {
		this._telephone = value;
	}

    /**
     * Setter email
     * @param {string} value
     */
	public set email(value: string) {
		this._email = value;
	}



}
