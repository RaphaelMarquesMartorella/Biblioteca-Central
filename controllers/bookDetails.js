const Details = require('../models/Details')

const createDetail = async (req,res) => {
    const {id, titulo, num_paginas, isbn, editora } = req.body

    await Details.create({id, titulo, num_paginas, isbn, editora})

    res.json({...req.body}).status(201)

}

const getAllDetails = async (req,res) => {

    try {
        const allItems = await Details.find({})
        res.json(allItems).status(200)
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Could not find the data.'})
    }

    
}

const getDetail = async (req,res) => {
    try {
        const getDetail = await Details.findOne({id: req.params.id})
        res.status(200).json({getDetail})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Could not find the data.'})
    }
}

const updateDetail = async (req, res) => {
    try {
        const updateDetail = await Details.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
        console.log('Updated Detail:', updateDetail);
        if (updateDetail) {
            res.status(200).json(updateDetail);
        } else {
            res.status(404).json({ message: 'There is no item to update.' });
        }
    } catch (error) {
        console.log('Error:', error);
        res.status(500).json({ message: 'Something went wrong.' });
    }
};


const deleteDetail = async (req, res) => {
    try {
        const deleteDetail = await Details.findOneAndDelete({ id: req.params.id });
        if (deleteDetail) {
            res.status(200).json({ message: 'The removal was successful.' });
        } else {
            res.status(300).json({ message: 'There is no item to remove.' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong.' });
    }
};



module.exports = {
    createDetail,
    getAllDetails,
    getDetail,
    updateDetail,
    deleteDetail
}