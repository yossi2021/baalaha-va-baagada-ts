const { Books } = require('../models/Books');
const joi = require('joi');

module.exports = {
    getAll: async function (req, res, next) {
        try {
            const result = await Books.find({}).sort({"location":1});
            res.json(result);
        }
        catch (err) {
            console.log(err);
            res.status(400).json({error: 'error getting books'});
        }
    },
    getItem: async function (req, res, next) {
        try {
            
                const scheme = joi.object({
                    _id: joi.string().required(),
                });
    
                const { error, value } = scheme.validate({ _id: req.params.id });
    
                if (error) {
                    console.log(error.details[0].message);
                    res.status(400).json({error:  "invalid data"});
                    return;
                }
            const result = await Books.findOne({ _id: value._id });
            res.json(result);
        }
        catch (err) {
            console.log(err);
            res.status(400).json({ error: "error get the book"});
        }
    },

    add: async function (req, res, next) {
        try {
            const scheme = joi.object({
                date: joi.string().required(),
                location: joi.string().required(),
                price: joi.number().min(1),
            });

            const { error, value } = scheme.validate(req.body);

            if (error) {
                console.log(error.details[0].message);
                res.status(400).json({error:'invalid data'});
                return;
            }

            const newBooks = new Books(value);
            const result = await newBooks.save();

            res.json({
                ...value,
                _id: result._id
            });
        }
        catch (err) {
            console.log(err);
            res.status(400).json({error: 'error add Books'});
        }
    },

    delete: async function (req, res, next) {
        try {
            const scheme = joi.object({
                _id: joi.string().required(),
            });

            const { error, value } = scheme.validate({ _id: req.params.id });

            if (error) {
                console.log(error.details[0].message);
                res.status(400).json({error:'invalid data'});
                return;
            }

            const deleted = await Books.findOne({ _id: value._id});

            await Books.deleteOne(value).exec();
            res.json(deleted);
        }
        catch (err) {
            console.log(err);
            res.status(400).json({error:'error delete book'});
        }
    },

    edit: async function (req, res, next) {
        try {
            const scheme = joi.object({
                
                date: joi.string().required(),
                location: joi.string().required(),
                price: joi.number().min(1),
            });

            const { error, value } = scheme.validate(req.body);

            if (error) {
                console.log(error.details[0].message);
                res.status(400).json({error: 'invalid data'});
                return;
            }

            const book = await Books.findOneAndUpdate({
                _id: req.params.id
            }, value);

            if (!book) return res.status(404).send('Given ID was not found.')

            const updated = await Books.findOne({ _id: req.params.id});
            res.json(updated)
        }
        catch (err) {
            console.log(err);
            res.status(400).json({error: 'fail to update data'});
        }
    },
}
