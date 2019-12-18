///REQUIRED PACKAGES AND SOME OTHER STUFF////
require('dotenv').config();
const express = require('express'),
      massive = require('massive'),
      session = require('express-session'),
    //   authCtrl = require('./authCtrl'),
      ctrl = require('./ctrl'),
      {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;
      
const app = express();

///TOP LVL MID-WARE///
app.use(express.json());
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60 * 24}
}));

///DB CONNECTION///
massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('DATABASE IS CONNECTED BROO')
    const port = SERVER_PORT;
    app.listen(port, () => console.log(`SERVER IS UP ON PORT ${port}`));
});

///ENDPOINTS///
app.get('/api/list', ctrl.getList);
app.post('/api/list', ctrl.addItem);
app.put('/api/list/:itemId', ctrl.editItem);
app.delete('/api/list/:itemId/', ctrl.deleteItem);



