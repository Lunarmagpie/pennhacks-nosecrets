export default function Settings() {
    return (
        <form onSubmit={onSubmit}>

        <label for="phone_number">Phone Number:</label><br/>
        <input type="text" id="phone_number" name="phone_number" value="" /><br/>

        <label for="language">Translate To:</label><br/>
        <input type="text" id="language" name="language" value="" placeholder="English" /><br/>

        <label for="whitelist">Whitelist:</label><br/>
        <input type="text" id="whitelist" name="whitelist" value="" placeholder="Work, School" /><br/>

        <label for="blacklist">Blacklist:</label><br/>
        <input type="text" id="blacklist" name="blacklist" value="" placeholder="TikTok, X.com" /><br/>

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

