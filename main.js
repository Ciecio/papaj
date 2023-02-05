const answerBox = document.querySelector('.answer-box')
const questionBox = document.querySelector('.question-box')
const input = document.querySelector('input')
const error = document.querySelector('.error')
const instruction = document.querySelector('.instruction')
const addBtn = document.querySelector('.add')
const btn2 = document.querySelector('.btn2')
const closeBtn = document.querySelector('.close')
const body = document.querySelector('body')
let counter = 1

const answersArr = [
	'Dość!',
	'Nieee!',
	'Co mam robić?',
	'Bądźmy łagodni.',
	'A można jak najbardziej, jeszcze jak!',
	'Tak jak Pan Jezus powiedział.',
	'A któż by go przenosił, taki ciężki!',
	'Z warkoczykami albo bez warkoczyków, też ujdą.',
]

const answers2Arr = ['Nie wieeeem!', 'Nie wiem, bo mi nie dali', 'A jak Pan Jezus powiedział?']

const nthElement = (answersArr, n = 0) => (n > 0 ? answersArr.slice(n, n + 1) : answersArr.slice(n))[0]

const ask = () => {
	if (input.value === '') {
		error.style.display = 'flex'
	} else {
		error.style.display = 'none'
		question()
		counter++
	}
}

const question = () => {
	const answer = document.createElement('p')
	const question = document.createElement('p')
	answer.setAttribute('class', 'answer')
	question.setAttribute('class', 'question')
	question.innerHTML = `<span>Pytanie:</span> ${input.value}`
	const idk = answers2Arr[Math.floor(Math.random() * answers2Arr.length)]

	if (counter > 4) {
		answer.innerHTML = `<span>Odpowiedź:</span> ${nthElement(answersArr, 0)}`
	} else if (input.value.indexOf('jezus') !== -1 || (input.value.indexOf('powiedzial') !== -1 && counter <= 5)) {
		answer.innerHTML = `<span>Odpowiedź:</span> ${nthElement(answersArr, 5)}`
	} else if (
		input.value.indexOf('moge') !== -1 ||
		input.value.indexOf('jestem') !== -1 ||
		input.value.indexOf('jestes') !== -1 ||
		(input.value.indexOf('jest') !== -1 && counter <= 5) ||
		input.value.indexOf('isc') !== -1 ||
		input.value.indexOf('idziesz') !== -1
	) {
		answer.innerHTML = `<span>Odpowiedź:</span> ${nthElement(answersArr, 1)}`
	} else if (input.value.indexOf('robisz') !== -1 && counter <= 5) {
		answer.innerHTML = `<span>Odpowiedź:</span> ${nthElement(answersArr, 2)}`
	} else if (
		input.value.indexOf('dzieci') !== -1 ||
		input.value.indexOf('dziewczynki') !== -1 ||
		input.value.indexOf('dzieck') !== -1 ||
		(input.value.indexOf('mowi') !== -1 && counter <= 5)
	) {
		answer.innerHTML = `<span>Odpowiedź:</span> ${nthElement(answersArr, 3)}`
	} else if (input.value.indexOf('wielbic') !== -1 || (input.value.indexOf('mozna') !== -1 && counter <= 5)) {
		answer.innerHTML = `<span>Odpowiedź:</span> ${nthElement(answersArr, 4)}`
	} else if (input.value.indexOf('watykan') !== -1 && counter <= 5) {
		answer.innerHTML = `<span>Odpowiedź:</span> ${nthElement(answersArr, 6)}`
	} else if (input.value.indexOf('warko') !== -1 && counter <= 5) {
		answer.innerHTML = `<span>Odpowiedź:</span> ${nthElement(answersArr, 7)}`
	} else {
		answer.innerHTML = `<span>Odpowiedź:</span> ${idk}`
	}

	answerBox.append(question, answer)
	error.style.display = 'none'
	input.value = ''
}

const instr = () => {
	instruction.style.display = 'flex'
	answerBox.style.display = 'none'
	questionBox.style.display = 'none'
	error.style.display = 'none'
	body.classList.add('active')
	btn2.style.display = 'none'
}

const close = () => {
	instruction.style.display = 'none'
	answerBox.style.display = 'flex'
	questionBox.style.display = 'flex'
	body.classList.remove('active')
	btn2.style.display = 'flex'
}

const enterCheck = () => {
	if (event.keyCode === 13) {
		ask()
	}
}

addBtn.addEventListener('click', ask)
btn2.addEventListener('click', instr)
closeBtn.addEventListener('click', close)
input.addEventListener('keyup', enterCheck)
