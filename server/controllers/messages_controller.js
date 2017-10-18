var messages = [];
var id = 0;


module.exports = {
    create(req, res, next) {
        const {text, time} = req.body;
        req.body.id = id;
        messages.push({id, text, time});
        id += 1;
        res.status(200).json(messages);

    },

    read(req, res, next) {
        res.status(200).json(messages);
    },

    update(req, res, next){
        const {text} = req.body;
        const selectedID = req.params.id;
        const messageIndex = messages.findIndex( message => message.id == selectedID);
        let message = messages[messageIndex];

        messages[messageIndex] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        }
        res.status(200).json(messages);
    },

    delete(req, res, next){
        messages = messages.filter((x) => x.id != req.params.id);
        res.status(200).json(messages);
    },
}