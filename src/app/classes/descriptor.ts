export class Descriptor {
    private _id: string;
    private _description: string;
    private _masterHint: string;
    
    get id(): string { return this._id }
    get description(): string { return this._description }
    get masterHint(): string { return this._masterHint }
    
    constructor(id: string, description: string, masterHint: string) {
        this._id = id;
        this._description = description;
        this._masterHint = masterHint;
    }
}