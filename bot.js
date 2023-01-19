const router = require('express').Router();
const facebook = require('fb-messenger-bot-api');
const messagingClient = new facebook.FacebookMessagingAPIClient('EAAZA1F3dtHAkBAEdf2T4dBC6tHN3GZBAT9QNmqjXiz8ZBXlWB4cnLHbnSVCHpfJgP0ZBBjSiBdI4q5QLggQKDZAABFXeGSsqtZAJhfHsH4Ei1CJwWXu6dOrm7GcPngEw4ifRRsoZBZCjWeXDvbgyMloa3RsopxZCT7qZBjxmbBb3oTCKrsQyLjgUVHeVJlefBCtzQZD');
const messageParser = facebook.FacebookMessageParser;

router.get('/api/webhook',facebook.ValidateWebhook.validateServer);
router.post('/api/webhook', (req, res) => {
    const incomingMessages = messageParser.parsePayload(req.body);  
    
    messagingClient.markSeen(senderId)
        .then(() => client.toggleTyping(senderId,true))
        .catch((err) => console.log(error));
    
    //promise based reaction on message send confirmation
    messagingClient.sendTextMessage(senderId, 'Hello')
        .then((result) => console.log(`Result sent with: ${result}`));
    
    //callback based reaction on message confirmation
    messagingClient.sendTextMessage(senderId, 'Hello',(result) => console.log(`Result sent with: ${result}`));
    
    //silent message sending
    messagingClient.sendTextMessage(senderId,'Hello');
})
