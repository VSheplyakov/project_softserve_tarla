function delivery() {
  let CENTRALLONDON = [
    "W1",
    "W2",
    "W8",
    "W9",
    "SW1",
    "SW3",
    "SW5",
    "SW6",
    "SW7",
    "SW10",
    "SW11",
    "WC1",
    "WC2",
    1,
    "1",
  ];
  let EASTLONDON = [
    "EC1",
    "EC2",
    "EC3",
    "EC4",
    "E1",
    "E2",
    "E3",
    "E4",
    "E6",
    "E7",
    "E8",
    "E9",
    "E10",
    "E13",
    "E14",
    "E15",
    "E16",
    "E17",
    "E20",
  ];
  let WESTLONDON = [
    "W2",
    "W3",
    "W4",
    "W5",
    "W6",
    "W7",
    "W8",
    "W9",
    "W11",
    "W12",
    "W13",
    "W14",
  ];
  let NORTHLONDON = [
    "N1",
    "N3",
    "N4",
    "N10",
    "N12",
    "N14",
    "N19",
    "N20",
    "NW1",
    "NW2",
    "NW3",
    "NW4",
    "NW6",
    "NW7",
    "NW8",
    "NW9",
    "NW10",
    "NW11",
  ];
  let SOUTHLONDON = [
    "SE1",
    "SE3",
    "SE5",
    "SE9",
    "SE10",
    "SE16",
    "SE18",
    "SE19",
    "SE24",
    "SW4",
    "SW8",
    "SW12",
    "SW15",
    "SW16",
    "SW18",
    "SW19",
  ];
  let answer;
  let postCode = document.getElementById("input_d").value.toUpperCase();
  if (
    !CENTRALLONDON.includes(postCode) &&
    !EASTLONDON.includes(postCode) &&
    !WESTLONDON.includes(postCode) &&
    !NORTHLONDON.includes(postCode) &&
    !SOUTHLONDON.includes(postCode)
  ) {
    answer = "Your Post code is incorrect";
  } else if (CENTRALLONDON.includes(postCode)) {
    answer = "Delivery is free of charge";
  } else {
    answer = "Delivery costs";
  }
  document.querySelector(".header_text").innerHTML = answer;
}
