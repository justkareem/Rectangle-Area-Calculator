function calculateArea() {
    const length = document.getElementById('length').value;
    const breadth = document.getElementById('breadth').value;

    if(length && breadth) {
        const area = length * breadth;
        document.getElementById('result').innerText = `The area of the rectangle is ${area} square units.`;
    } else {
        document.getElementById('result').innerText = 'Please enter both length and breadth.';
    }
}
