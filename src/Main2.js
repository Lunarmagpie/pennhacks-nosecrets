import React from "react";

import { useState, useEffect } from "react";

function Main2() {
	// all the languages that deepL supports
	const languages = {
		English: "EN",
		Bulgarian: "BG",
		Czech: "CS",
		Danish: "DA",
		German: "DE",
		Greek: "EL",
		Spanish: "ES",
		Estonian: "ET",
		Finnish: "FI",
		French: "FR",
		Hungarian: "HU",
		Indonesian: "ID",
		Italian: "IT",
		Japanese: "JA",
		Korean: "KO",
		Lithuanian: "LT",
		Latvian: "LV",
		Norwegian: "NB",
		Dutch: "NL",
		Polish: "PL",
		Portuguese: "PT",
		Romanian: "RO",
		Russian: "RU",
		Slovak: "SK",
		Slovenian: "SL",
		Swedish: "SV",
		Turkish: "TR",
		Ukrainian: "UK",
		Chinese: "ZH",
	};

	const [language, setLanguage] = useState(languages);

	const handleLanguageChange = (event) => {
		setLanguage(event.target.value);
	};

	// make a post request to the backend with the language and get the summary

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const response = await fetch("http://127.0.0.1:3000/summarize/", {
				method: "POST",
				body: JSON.stringify({
					category: "test",
					// get email text from the input field
					email_text:
						'People ask me all the time: "what software are you using to run your blogging business?"',
				}),
				headers: {
					"Content-Type": "application/json",
				},
			});

			const data = await response.json(); // Debugging line

			if (response.ok) {
				console.log("Received data:", data);
			} else {
				console.log("Failed to fetch: ", response.status);
				console.log("Error data: ", data); // Debugging line
			}
		} catch (error) {
			console.log("An error occurred:", error);
		}
	};

	return (
		<div>
			<input type="text" placeholder="Add a mail category" id="category" />
			<select value={language} onChange={handleLanguageChange}>
				{/* maping */}
				{Object.keys(languages).map((language) => (
					<option value={languages[language]} key={languages[language]}>
						{language}
					</option>
				))}
				{/* end */}
			</select>
			<button onClick={handleSubmit}>Submit</button>
		</div>
	);
}

export default Main2;
