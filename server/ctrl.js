module.exports = {
    //GET POSTMAN GOOD//
    getList: async (req, res) => {
        const db = req.app.get('db')
        let list = await db.get_list()
        res.status(200).send(list)
    },
    //YUP//
    addItem: (req, res) => {
        const db = req.app.get('db')
        const {item} = req.body
        // console.log(item)
        // console.log(req.body)
        let list = db.add_item(item)
        res.status(200).send(list)
    },
    //DELETE POSTMAN GOOD//
    deleteItem: (req, res) => {
        const db = req.app.get('db')
        const {itemId} = req.params
        db.delete_item([itemId]).then(result => {
            res.status(200).send(result)
        }).catch(err => res.status(418).send(err))
    },
    //P-P-P-POST IS GOOD TO GO!//
    editItem: async (req, res) => {
        const db = req.app.get('db')
        const {item} = req.body
        const {itemId} = req.params
        let updatedItem = await db.edit_item([itemId, item])
        res.status(200).send(updatedItem)
    }
}