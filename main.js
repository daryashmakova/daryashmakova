const canvas = document.querySelector("#canvas")
canvas.style.backgroundColor = 'lightgray'
const ctx = canvas.getContext('2d')
ctx.fillStyle = 'red'
ctx fillRect(150, 150, 100, 50)
ctx.fillStyle = 'blue' 
ctx.font = `$20px Arial`
ctx.textAlign = 'center'
ctx.textBaseline = 'middle'
ctx.fillText('Hello, World', 150, 150)
ctx.strokeStyle = 'yellow'
ctx.linewidth = 5/
ctx.strokeRect(10, 20, 50, 70)