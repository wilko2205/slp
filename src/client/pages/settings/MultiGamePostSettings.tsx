//Modules
import React from "react";
import * as Yup from "yup";

//Components
import { BasicSettingsPage } from "~/client/pages/settings/BasicSettingsPage";

//Interfaces & Enums
import { ISettings } from "~/models/Settings";
import { FormFieldTypes, IFieldGroup } from "~/enum/FormFieldTypes";

//Redux

//Component
export function MultiGamePostSettings() {
	type FormFields = ISettings["multiGamePost"];

	//Get Field Groups
	const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((label, value) => ({
		label,
		value: value.toString()
	}));
	const fieldGroups: IFieldGroup<FormFields>[] = [
		{
			fields: [
				{ name: "defaultText", type: FormFieldTypes.textarea },
				{ name: "postDate", type: FormFieldTypes.radio, options: days },
				{ name: "postTime", type: FormFieldTypes.time, step: 900 }
			]
		}
	];

	//Create Validation Schema
	const validationSchema = Yup.object().shape({
		defaultText: Yup.string().required().label("Default Text"),
		postDate: Yup.string().required().label("Scheduled Post Date"),
		postTime: Yup.string()
			.required()
			.test({
				name: "15-mins",
				message: "Must be :00, :15, :30 or :45",
				test: value => {
					if (value) {
						return ["00", "15", "30", "45"].includes(value.split(":")[1]);
					}
					return true;
				}
			})
			.label("Scheduled Post Time")
	});

	return (
		<BasicSettingsPage<FormFields>
			fieldGroups={fieldGroups}
			settingGroup={"multiGamePost"}
			validationSchema={validationSchema}
		/>
	);
}
