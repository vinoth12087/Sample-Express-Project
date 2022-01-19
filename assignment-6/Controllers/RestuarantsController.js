

const Restuarant = require("../Models/restaurantsModel");


exports.getAllRestuarant = async (req, res) => {
    const list = await Restuarant.find();
    try{
        res.status(200).json(list);
    }catch(err){
        res.status(500).send(err);
    }
}

