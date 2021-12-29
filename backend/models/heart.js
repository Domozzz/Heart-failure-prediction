const db = require("../util/database");

module.exports = class heart {
  constructor(
    id,
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
  ) {
    this.id = id;
    this.Age = Age;
    this.Sex = Sex;
    this.ChestPainType = ChestPainType;
    this.RestingBP = RestingBP;
    this.Cholesterol = Cholesterol;
    this.FastingBS = FastingBS;
    this.RestingECG = RestingECG;
    this.MaxHR = MaxHR;
    this.ExerciseAngina = ExerciseAngina;
    this.Oldpeak = Oldpeak;
    this.ST_Slope = ST_Slope;
  }

  save() {
    // console.log(this);
    if (this.id) {
      return db.execute(
        "UPDATE heart SET Age=?, Sex=?, ChestPainType=?, RestingBP=?, Cholesterol=?, FastingBS=?, RestingECG=?, MaxHR=?,ExerciseAngina=?,Oldpeak=?,ST_Slope=?  WHERE id = ?",
        [
          this.id,
          this.Age,
          this.Sex,
          this.ChestPainType,
          this.RestingBP,
          this.Cholesterol,
          this.FastingBS,
          this.RestingECG,
          this.MaxHR,
          this.ExerciseAngina,
          this.Oldpeak,
          this.ST_Slope,
        ]
      );
    } else {
      return db.execute(
        "INSERT INTO heart( Age, Sex, ChestPainType, RestingBP, Cholesterol, FastingBS, RestingECG, MaxHR,ExerciseAngina,Oldpeak,ST_Slope) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
        [
          this.Age,
          this.Sex,
          this.ChestPainType,
          this.RestingBP,
          this.Cholesterol,
          this.FastingBS,
          this.RestingECG,
          this.MaxHR,
          this.ExerciseAngina,
          this.Oldpeak,
          this.ST_Slope,
        ]
      );
    }
  }

  static deleteById(id) {
    return db.execute("DELETE FROM heart WHERE heart.id = ?", [id]);
  }

  static fetchAll() {
    return db.execute("SELECT * FROM heart");
  }

  static findById(id) {
    return db.execute("SELECT * FROM heart WHERE heart.id = ?", [id]);
  }
};
