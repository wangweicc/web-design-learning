function compute(radius) {
    return Math.PI * radius * radius;
}

function show(area) {
    document.getElementById('area').value = area.toFixed(2);
}

function computeArea() {
    const radius = parseFloat(document.getElementById('radius').value);
    if (isNaN(radius)) {
        alert("请输入有效的半径值！");
        return;
    }
    const area = compute(radius);
    show(area);
}

function clearFields() {
    document.getElementById('radius').value = '';
    document.getElementById('area').value = '';
}