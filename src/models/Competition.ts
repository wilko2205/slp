//Modules
import mongoose, { Schema, Document, Types } from "mongoose";

//Interfaces
interface ICompetition_Root {
	_id: string | Types.ObjectId;
	name: string;
	hashtagPrefix: string;
	competitionHashtag?: string;
	image: string;
	isFavourite: boolean;
}
export interface ICompetition extends ICompetition_Root {
	_id: string;
}
export interface ICompetition_Mongoose extends ICompetition_Root, Document {
	_id: ICompetition_Root["_id"];
}

export interface ICompetitionFormFields extends Required<Omit<ICompetition, "_id">> {}

//Schema
const CompetitionSchema = new Schema<ICompetition_Mongoose>({
	name: { type: String, required: true },
	hashtagPrefix: { type: String, required: true },
	competitionHashtag: { type: String, default: null },
	image: { type: String, required: true },
	isFavourite: { type: Boolean, default: false }
});

//Assign to mongoose
export const Competition = mongoose.model<ICompetition_Mongoose>("competitions", CompetitionSchema);
