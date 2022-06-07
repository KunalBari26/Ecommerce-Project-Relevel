const express       = require('express');
const CategoryRoute = require('./routes/category.route');
const ProductRoute  = require('./routes/product.routes');
const AuthRoute     = require('./routes/auth.routes');
const cartRoutes = require('./routes/cart.routes');


const bodyParser = require ('body-parser');
const app        = express();
const config     = require('./config/serverconfig');
const db = require('./models/index');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



CategoryRoute(app);
ProductRoute(app);
AuthRoute(app);
cartRoutes(app);


app.get('/home',async (req,res)=>{
    res.send("Homepage Of Ecommerce App");
});


app.listen(config.PORT, async ()=>{
    await console.log("SERVER STARTED AND USING",config.PORT);
    //await db.sequelize.sync({ force: true });

    if(process.env.SYNC) {
        await db.sequelize.sync({ force: true });
    }
    
})