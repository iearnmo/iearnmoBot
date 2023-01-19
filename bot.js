const login = require("facebook-chat-api");

// Create simple echo bot
login({email: "09157400849", password: "nini09"}, (err, api) => {
    if(err) return console.error(err);

    api.listen((err, message) => {
        api.sendMessage(message.body, message.threadID);
    });
});
