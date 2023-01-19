const login = require("facebook-chat-api");

// Create simple echo bot
login({email: "rivers.zeronine@gmail.com", password: "nini09"}, (err, api) => {
    if(err) return console.error(err);

    api.listen((err, message) => {
        api.sendMessage(message.body, message.threadID);
    });
});
