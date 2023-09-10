import { useEffect, useState, useId, Component } from "react";
import "./Settings.css";

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

function Settings() {
  let [data, setData] = useState({
    phone_number: "",
    language: "English",
    whitelist: "",
    blacklist: "",
  });

  return (
    <form onSubmit={(e) => onSubmit(e, data)}>
      <label for="phone_number">Phone Number:</label>
      <br />
      <input
        type="text"
        id="phone_number"
        onChange={(e) => {
          let d = { ...data };
          d.phone_number = e.target.value;
          setData(d);
        }}
        name="phone_number"
        value={data.phone_number}
      />
      <br />

      <label for="language">Translate To:</label>
      <br />

      <select
        onChange={(e) => {
          let d = { ...data };
          d.language = e.target.value;
          setData(d);
        }}
      >
        {languages.map((v) => (
          <option key={v}>{v}</option>
        ))}
      </select>
      <br />
      <label for="whitelist">Whitelist:</label>
      <br />
      <input
        onChange={(e) => {
          let d = { ...data };
          d.whitelist = e.target.value;
          setData(d);
        }}
        type="text"
        id="whitelist"
        name="whitelist"
        value={data.whitelist}
        placeholder="Work, Youtube, ect."
      />
      <br />

      <label for="blacklist">Blacklist:</label>
      <br />
      <input
        onChange={(e) => {
          let d = { ...data };
          d.blacklist = e.target.textContent;
          setData(d);
        }}
        type="text"
        id="blacklist"
        name="blacklist"
        value={data.blacklist}
        placeholder="TikTok, School, ect."
      />
      <br />

      <input
        type="submit"
        class="settings-button"
        value="Save"
        onsubmit={() => {}}
      />
    </form>
  );
}

async function onSubmit(e, data) {
  e.preventDefault()
  let state = new URL(document.location).searchParams.get("state");
  await fetch("/api/update_user/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...data, state }),
  });
}

export default class ProfileArea extends Component {
  render() {
    return (
      <div class="settings-container">
        <div class="settings-bar">
          <Settings />
        </div>
        <div class="snippets-container">
          <div>Past snips</div>
          <div class="snippets-box">{}</div>
        </div>
      </div>
    );
  }
}
