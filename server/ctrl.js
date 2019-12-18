module.exports = {
    //GET POSTMAN GOOD//
    getList: async (req, res) => {
        const db = req.app.get('db')
        let list = await db.get_list()
        res.status(200).send(list)
    },
    //NOPE//
    addItem: (req, res) => {
        const db = req.app.get('db')
        const {item} = req.body
        let list = db.add_item(item)
        res.status(200).send(list)
    },
    //DELETE POSTMAN GOOD//
    deleteItem: (req, res) => {
        const {itemId} = req.params
        const db = req.app.get('db')
        db.delete_item([itemId]).then(result => {
            res.status(200).send(result)
        }).catch(err => res.status(418).send(err))
    },
    //.findIndex IS NOT A FUNCTION//
    editItem: (req, res) => {
        console.log(req.params)
        const {id} = req.params
        const editedItem = req.body
        console.log(req.body)
        const db = req.app.get('db')
        let list = db.get_list()
        const index = list.findIndex(el => el.id === +id)
        const updatedObj = {...list[index], ...editedItem}
        list[index] = updatedObj
        res.status(200).send(list)
    }
}