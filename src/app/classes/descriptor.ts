export class Descriptor {
    private _id: string;
    private _description: string;
    
    get id(): string { return this._id }
    get description(): string { return this._description }
    
    constructor(id: string, description: string) {
        this._id = id;
        this._description = description;
    }
}