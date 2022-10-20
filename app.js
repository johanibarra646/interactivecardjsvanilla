const confirm = document.getElementById("form-main");

confirm.addEventListener("submit", (e) => {
  e.preventDefault();
  const fullname = document.getElementById("full_name").value;
  const namefootcard = document.querySelector(".namefootcard");
  namefootcard.innerHTML = fullname;

  const card = document.getElementById("card").value;
  const number_cards = document.querySelector(".number-cards");
  number_cards.innerHTML = card;

  const cvc = document.getElementById("cvc").value;
  const number_cvc = document.querySelector(".numberBack-cards");
  number_cvc.innerHTML = cvc;

  const mouthCard = document.getElementById("mouthCard").value;
  const number_mm = document.querySelector(".mm_number");
  number_mm.innerHTML = mouthCard;

  const yearCard = document.getElementById("yearCard").value;
  const number_year = document.querySelector(".yy_number");
  number_year.innerHTML = yearCard;
});

let limit = "";
card.addEventListener("input", function () {
  if (this.checkValidity()) {
    limit = this.value;
  } else {
    this.value = limit;
  }
});

let limitcvc = "";
cvc.addEventListener("input", function () {
  if (this.checkValidity()) {
    limitcvc = this.value;
  } else {
    this.value = limitcvc;
  }
});

let limitMm = "";
mouthCard.addEventListener("input", function () {
  if (this.checkValidity()) {
    limitMm = this.value;
  } else {
    this.value = limitMm;
  }
});

let limityy = "";
yearCard.addEventListener("input", function () {
  if (this.checkValidity()) {
    limityy = this.value;
  } else {
    this.value = limityy;
  }
});
