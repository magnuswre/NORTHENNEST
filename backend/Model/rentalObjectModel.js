const rentalObject = require('../Schema/rentalObjectSchema');

exports.createNewRentalObject = (req, res) => {
    const { name, description, price, imageURL, bedrooms, category, livingarea, rating, saved } = req.body;

    if (!name || !description || !price || !imageURL || !bedrooms || !category || !livingarea) {
        res.status(400).json({
            message: 'You need to enter all the fields, RentalObject'
        });
        return;
    }

    rentalObject.create({
        name,
        description,
        price,
        imageURL,
        bedrooms,
        category,
        livingarea,
        rating,
        saved,
        createdAt: new Date(),
        updatedAt: new Date()
    })
    .then(data => {
        res.status(201).json(data);
    })
    .catch(err => {
        res.status(500).json({
            message: 'Something went wrong when creating the rentalObject',
            err: err.message
        });
    });
};


exports.getAllRentalObjects = async (req, res) =>{

    const limit = parseInt(req.query.limit)


    try {
        const rentalObjects = await rentalObject.find().limit(limit)
        res.status(200).json(rentalObjects)
        
    } catch (err) {
        res.status(500).json({message: 'Something went wrong when getting the rentalObjects'})
    }
}


exports.getRentalObjectById = async (req, res) =>{

    const _rentalObject = await rentalObject.findById(req.params.id)
    
    if(!_rentalObject){
        return res.status(404).json({message: 'Could not find the rentalObject'})
    }

    res.status(200).json(_rentalObject)
    
}

exports.uppdateRentalObject = async (req, res) =>{
    const _rentalObject = await rentalObject.findByIdAndUpdate(req.params.id, req.body, {new: true})
    
    if(!_rentalObject){
      return res.status(404).json({message: 'Could not find the rentalObject'})
    }

    res.status(200).json(_rentalObject)

}


exports.deleteRentalObject = (req, res) =>{

    rentalObject.findByIdAndDelete(req.params.id)
    .then(_rentalObject => {
        if(!_rentalObject){
           return res.status(404).json({message: 'Could not find the rentalObject'})
        }
        res.status(200).json(_rentalObject)
    })
    .catch(err => {
        res.status(500).json({message: 'Something went wrong when deleting the rentalObject' ,
        err: err.message})
        
    })
}
