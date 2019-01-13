export class Client {

    private _id:number;
    private _nom:string;
    private _prenom:string;
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
     * Getter nom
     * @return {string}
     */
	public get nom(): string {
		return this._nom;
	}

    /**
     * Getter prenom
     * @return {string}
     */
	public get prenom(): string {
		return this._prenom;
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
     * Setter nom
     * @param {string} value
     */
	public set nom(value: string) {
		this._nom = value;
	}

    /**
     * Setter prenom
     * @param {string} value
     */
	public set prenom(value: string) {
		this._prenom = value;
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
