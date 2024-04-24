var car = {
  kilometaraPresao: 123135,
  vozi: function (km) {
    this.kilometaraPresao += km;
  },
  vratiProsjecnuBrzinu: function (brojRadnihSati) {
    return this.kilometaraPresao / brojRadnihSati;
  },
  vratiKilometrePresao: function () {
    return this.kilometaraPresao;
  },
};

module.exports = car;
