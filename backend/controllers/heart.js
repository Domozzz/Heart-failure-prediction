const Heart = require("../models/heart");

exports.getSearch = (req, res, next) => {
  Heart.fetchAll()
    .then((heart) => {
      console.log("Get All Heart");
      res.status(200).json({
        response: {
          data: heart,
          result: true,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(200).json({
        response: {
          result: false,
          message: err,
        },
      });
    });
};

exports.postAdd = (req, res, next) => {
  console.log(req.body);
  const {
    Age,
    Sex,
    ChestPainType,
    RestingBP,
    Cholesterol,
    FastingBS,
    RestingECG,
    MaxHR,
    ExerciseAngina,
    Oldpeak,
    ST_Slope,
  } = req.body;
  const heart = new Heart(
    null,
    Age,
    Sex,
    ChestPainType,
    RestingBP,
    Cholesterol,
    FastingBS,
    RestingECG,
    MaxHR,
    ExerciseAngina,
    Oldpeak,
    ST_Slope
  );
  heart
    .save()
    .then(() => {
      console.log("Created Heart");
      res.status(200).json({
        response: {
          result: true,
          message: "success",
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(200).json({
        response: {
          result: false,
          message: err,
        },
      });
    });
};

exports.postUpdate = (req, res, next) => {
  console.log(req.body);
  const {
    heart_id,
    Age,
    Sex,
    ChestPainType,
    RestingBP,
    Cholesterol,
    FastingBS,
    RestingECG,
    MaxHR,
    ExerciseAngina,
    Oldpeak,
    ST_Slope,
  } = req.body;

  const heart = new Heart(
    heart_id,
    Age,
    Sex,
    ChestPainType,
    RestingBP,
    Cholesterol,
    FastingBS,
    RestingECG,
    MaxHR,
    ExerciseAngina,
    Oldpeak,
    ST_Slope
  );
  heart
    .save()
    .then(() => {
      console.log("Update Heart");
      res.status(200).json({
        response: {
          result: true,
          message: "success",
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(200).json({
        response: {
          result: false,
          message: err,
        },
      });
    });
};

exports.getDelete = (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  Heart.deleteById(id)
    .then(() => {
      console.log("Delete Heart");
      res.status(200).json({
        response: {
          result: true,
          message: "success",
        },
      });
    })
    .catch((err) => {
      res.status(200).json({
        response: {
          result: false,
          message: err,
        },
      });
    });
};

exports.getUpdate = (req, res, next) => {
  console.log(req.params);
  const { id } = req.params;

  Heart.findById(id)
    .then(([heart, fieldData]) => {
      console.log("Get Heart");
      res.status(200).json({
        response: {
          data: heart[0],
          result: true,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(200).json({
        response: {
          result: false,
          message: err,
        },
      });
    });
};
