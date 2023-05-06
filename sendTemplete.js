const axios = require('axios');

const sendTemplete = async (req, res, next) => {
    // console.log(req.body.numbers)
    req.body.numbers.map((number) => {

        let data = JSON.stringify({
            "messaging_product": "whatsapp",
            "to": `${number}`,
            "type": "template",
            "template": {
                "name": "hello_world",
                "language": {
                    "code": "en_US"
                }
            }
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://graph.facebook.com/v16.0/112298418515652/messages',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer EAAODDiayRbgBACfam8rQ54ZBhxrJGak9ZBwQEdrhtwZCLPmPB6pqJNeWY7Qu1XWcDHnZBxYQXEU0yUS5nnzZBGENXUnpAQNkKZBZBp1dCsniDlwlaXOOAhRApgmhRdNHGhYjJZAIG4R8EjVauFT2cKdaJN7HmZCzd5KM4CDGWEhxvcgZAzixRFQfT4'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    })
    next();
}

module.exports = { sendTemplete }
