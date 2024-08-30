const DICE_FACE_DOT_POSITIONS = {
  1: ['dot--center'],
  2: ['dot--top-right', 'dot--bottom-left'],
  3: ['dot--top-right', 'dot--center', 'dot--bottom-left'],
  4: [
    'dot--top-left',
    'dot--top-right',
    'dot--bottom-left',
    'dot--bottom-right',
  ],
  5: [
    'dot--top-left',
    'dot--top-right',
    'dot--center',
    'dot--bottom-left',
    'dot--bottom-right',
  ],
  6: [
    'dot--top-left',
    'dot--top-right',
    'dot--center-left',
    'dot--center-right',
    'dot--bottom-left',
    'dot--bottom-right',
  ],
};

document.getElementById("rollButton").addEventListener("click", () => {
  let NumberOfDices = document.getElementById("diceNumberInput").value
  throwDices(NumberOfDices)
})

function throwDices(NumberOfDices)
{
  if(NumberOfDices < 1)
  {
    alert("Minimum is 1")
    return
  }

  if(NumberOfDices > 50)
  {
    alert("Maximum is 50")
    return
  }

  if(isNaN(NumberOfDices)) {
    document.getElementById("diceNumberInput").value = ""
    return
  }

  let DiceGrid = document.getElementById("diceGrid");
  DiceGrid.classList.replace("hidden", "visible")
  DiceGrid.innerHTML = ''
  let Sum = 0
  for (let i = 0; i < NumberOfDices; i++) {
    let DiceValue = Math.floor(Math.random() * 6) + 1;
    Sum += DiceValue;
    createDice(DiceValue);
  }

  document.getElementById("diceSumValue").innerText = Sum.toString();
  document.getElementById("diceSum").classList.replace("hidden", "visible")
}

function createDice(DiceValue)
{
  let DiceGrid = document.getElementById("diceGrid");
  let Dice = document.createElement("div");
  Dice.classList.add("dice");
  DICE_FACE_DOT_POSITIONS[DiceValue].map((DotPositionClass) => {
    let Dot = document.createElement("div");
    let DotClass = DiceValue === 1 ? "dot-1" : "dot"
    Dot.classList.add(DotClass, DotPositionClass);
    Dice.appendChild(Dot);
  })
  DiceGrid.appendChild(Dice);
}