const mongoose = require("mongoose"); //.set('debug', true);
const Model = mongoose.model("trips");

// GET: /trips - list of all the trips
const tripsList = async (req, res) => {
    // Calling the trips with no paramerters brings up all trips
    Model.find({}).exec((err, trips) => {
        if (!trips) {
            return res.status(404).json({ message: "trips not found"});
        } else if (err) {
            return res.status(404).json(err);
        }else {
            return res.status(200).json(trips);
        }
    });
};

// GET: /trips/:tripCode - returns a single specific trip 
const tripsFindByCode = async (req, res) => {
    Model.find({ code: req.params.tripCode }).exec((err, trip) => {
        if (!trip) {
            return res.status(404).json({ message: "trip not found"});
        } else if (err) {
            return res.status(404).json(err);
        }else {
            return res.status(200).json(trip);
        }
    });
};

module.exports = {
    tripsList,
    tripsFindByCode,
}