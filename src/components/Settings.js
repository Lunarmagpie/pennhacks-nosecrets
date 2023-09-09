import { useEffect, useState, useId } from "react";

const languages = [
    "English",
    "Bulgarian",
    "Czech",
    "Danish",
    "German",
    "Greek",
    "Spanish",
    "Estonian",
    "Finnish",
    "French",
    "Hungarian",
    "Indonesian",
    "Italian",
    "Japanese",
    "Korean",
    "Lithuanian",
    "Latvian",
    "Norwegian",
    "Dutch",
    "Polish",
    "Portuguese",
    "Romanian",
    "Russian",
    "Slovak",
    "Slovenian",
    "Swedish",
    "Turkish",
    "Ukrainian",
    "Chinese",
];

export default function Settings() {
    let [data, setData] = useState({"phone": "", "language": "English", "wList": "", "bList": ""});

    useEffect(() => {
        console.log(data);
    }, [data])

    return (
        <form onSubmit={onSubmit}>

        <label for="phone_number">Phone Number:</label><br/>
        <input type="text" id="phone_number" onChange={(e) => {
            let d = {...data};
            d.phone = e.target.value;
            setData(d)}} name="phone_number" value={data.phone} /><br/>

        <label for="language">Translate To:</label><br/>

        <select onChange={e => {
            let d = {...data};
            d.language = e.target.value;
            setData(d)
        }}>
            {languages.map(v => <option key={v}>{v}</option>)}
        </select>
        <br/>
        <label for="whitelist">Whitelist:</label><br/>
        <input onChange={(e) => {
            let d = {...data};
            d.wList = e.target.value
            setData(d);
        }} type="text" id="whitelist" name="whitelist" value={data.wList} placeholder="Work, School" /><br/>

        <label for="blacklist">Blacklist:</label><br/>
        <input 
            onChange={(e) => {
            let d = {...data};
            d.bList = e.target.textContent
            setData(d);
        }} 
        type="text" id="blacklist" name="blacklist" value={data.bList} placeholder="TikTok, X.com" /><br/>

        <input type="submit" value="Save"/>

        </form>
    );
}

function onSubmit() {
    console.log("Submit")

    let phone_number = document.getElementById("phone_number");
    let language = document.getElementById("language");
    let whitelist = document.getElementById("whitelist");
    let blacklist = document.getElementById("blacklist");

    console.log(phone_number)
    console.log(language)
    console.log(whitelist)
    console.log(blacklist)


}

