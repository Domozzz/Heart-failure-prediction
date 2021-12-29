const { validationResult } = require("express-validator");
const request = require("request");
const path = require("../util/path");

var options = {
  method: "POST",
  url: "http://localhost:8080/api/rest/process/heart_withTestDataDB?",
  qs: {},
  headers: {
    "postman-token": "276f2361-7208-2ad7-e1b4-3b3c83473807",
    "cache-control": "no-cache",
    authorization: "Basic YWRtaW46MTIzNDU2Nzg=",
    "content-type": "application/x-www-form-urlencoded",
  },
};
exports.getAbout = (req, res, next) => {
  request(options, (error, response, body) => {
    if (error) throw new Error(error);
    const info = JSON.parse(body);
    res.render("heart/about", {
      pageTitle: "Heart Failure Prediction",
    });
  });
};

exports.getAll = (req, res, next) => {
  // Old
  // request.get(path.serverPath + "car/search", (error, response, body) => {
  //     const info = JSON.parse(body);
  //     // console.log(info.response.data);
  //     if (!error && response.statusCode == 200) {
  //         res.render('car/search', {
  //             pageTitle: 'Search Car',
  //             cars: info.response.data,
  //         });
  //     }
  // });

  // New
  // request(options, function (error, response, body) {
  //     if (error) throw new Error(error);

  //     console.log(body);
  // });
  request(options, (error, response, body) => {
    if (error) throw new Error(error);
    const info = JSON.parse(body);
    // console.log(info[Sex]);
    // alert(info[0]);
    res.render("heart/search", {
      pageTitle: "Heart Failure Prediction",
      Heart: info[0],
    });
  });
};

exports.getAdd = (req, res, next) => {
  const Age = "";
  const Sex = "";
  const ChestPainType = "";
  const RestingBP = "";
  const Cholesterol = "";
  const FastingBS = "";
  const RestingECG = "";
  const MaxHR = "";
  const ExerciseAngina = "";
  const Oldpeak = "";
  const ST_Slope = "";

  res.render("heart/insert", {
    pageTitle: "Insert Heart Information",
    errorMessage: null,
    Age: Age,
    Sex: Sex,
    ChestPainType: ChestPainType,
    RestingBP: RestingBP,
    Cholesterol: Cholesterol,
    FastingBS: FastingBS,
    RestingECG: RestingECG,
    MaxHR: MaxHR,
    ExerciseAngina: ExerciseAngina,
    Oldpeak: Oldpeak,
    ST_Slope: ST_Slope,
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
  //   const { buying, maint, doors, persons, lug_boot, safety } = req.body;

  request.post(
    {
      url: path.serverPath + "heart/insert",
      form: {
        Age: Age,
        Sex: Sex,
        ChestPainType: ChestPainType,
        RestingBP: RestingBP,
        Cholesterol: Cholesterol,
        FastingBS: FastingBS,
        RestingECG: RestingECG,
        MaxHR: MaxHR,
        ExerciseAngina: ExerciseAngina,
        Oldpeak: Oldpeak,
        ST_Slope: ST_Slope,
      },
    },
    (error, response, body) => {
      console.log(response);
      const info = JSON.parse(body);
      if (!error && response.statusCode == 200 && info.response.result) {
        res.redirect("/heart");
      }
    }
  );
};

exports.getUpdate = (req, res, next) => {
  console.log(req.params);
  const { heart_id } = req.params;
  request.get(
    path.serverPath + "heart/update/" + heart_id,
    (error, response, body) => {
      const info = JSON.parse(body);
      if (!error && response.statusCode == 200) {
        res.render("heart/update", {
          pageTitle: "Update heart",
          errorMessage: null,
          heart_id: info.response.data.id,
          Age: info.response.data.Age,
          Sex: info.response.data.Sex,
          ChestPainType: info.response.data.ChestPainType,
          RestingBP: info.response.data.RestingBP,
          Cholesterol: info.response.data.Cholesterol,
          FastingBS: info.response.data.FastingBS,
          RestingECG: info.response.data.RestingECG,
          MaxHR: info.response.data.MaxHR,
          ExerciseAngina: info.response.data.ExerciseAngina,
          Oldpeak: info.response.data.Oldpeak,
          ST_Slope: info.response.data.ST_Slope,
        });
      }
    }
  );
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
  //   const { car_id, buying, maint, doors, persons, lug_boot, safety } = req.body;

  request.post(
    {
      url: path.serverPath + "heart/update",
      form: {
        heart_id: heart_id,
        Age: Age,
        Sex: Sex,
        ChestPainType: ChestPainType,
        RestingBP: RestingBP,
        Cholesterol: Cholesterol,
        FastingBS: FastingBS,
        RestingECG: RestingECG,
        MaxHR: MaxHR,
        ExerciseAngina: ExerciseAngina,
        Oldpeak: Oldpeak,
        ST_Slope: ST_Slope,
      },
    },
    (error, response, body) => {
      console.log(response);
      const info = JSON.parse(body);
      if (!error && response.statusCode == 200 && info.response.result) {
        res.redirect("/heart");
      }
    }
  );
};

exports.getDelete = (req, res, next) => {
  const { heart_id } = req.params;
  console.log(heart_id);
  request.get(
    path.serverPath + "heart/delete/" + heart_id,
    (error, response, body) => {
      const info = JSON.parse(body);
      if (!error && response.statusCode == 200) {
        console.log("Delete heart Information");
        res.redirect("/heart");
      }
    }
  );
};
