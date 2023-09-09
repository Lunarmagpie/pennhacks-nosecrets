import React from "react";

import { useState } from "react";

function Main2() {
	const [categories, setCategories] = useState("");
	// all the languages that deepL supports
	const languages = {
    "Bulgarian": "BG",
    "Czech": "CS",
    "Danish": "DA",
    "German": "DE",
    "Greek": "EL",
    "English": "EN",
    "Spanish": "ES",
    "Estonian": "ET",
    "Finnish": "FI",
    "French": "FR",
    "Hungarian": "HU",
    "Indonesian": "ID",
    "Italian": "IT",
    "Japanese": "JA",
    "Korean": "KO",
    "Lithuanian": "LT",
    "Latvian": "LV",
    "Norwegian": "NB",
    "Dutch": "NL",
    "Polish": "PL",
    "Portuguese": "PT",
    "Romanian": "RO",
    "Russian": "RU",
    "Slovak": "SK",
    "Slovenian": "SL",
    "Swedish": "SV",
    "Turkish": "TR",
    "Ukrainian": "UK",
    "Chinese": "ZH"
  
	};

	const [language, setLanguage] = useState(languages);

	const handleCategoriesChange = (event) => {
		setCategories(event.target.value);
	};

	const handleLanguageChange = (event) => {
		setLanguage(event.target.value);
	};

	return (
		<div>
			<input
				type="text"
				placeholder="Add all the categories of mail you want to summarize"
				value={categories}
				onChange={handleCategoriesChange}
			/>
			<select value={language} onChange={handleLanguageChange}>
				{/* maping */}
				{Object.keys(languages).map((language) => (
					<option value={languages[language]} key={languages[language]}>{language}</option>
				))}
				{/* end */}
			</select>
		</div>
	);
}

export default Main2;
