function calculateAverageAge() {
    const table = document.getElementById('friendsTable');
    const rows = table.getElementsByTagName('tr');
    let totalAge = 0;
    let count = 0;

    for (let i = 1; i < rows.length; i++) { 
        const age = parseInt(rows[i].cells[2].textContent);
        totalAge += age;
        count++;
    }

    const averageAge = totalAge / count;
    document.getElementById('averageAge').textContent = averageAge.toFixed(2);
    console.log("Average Age: ",averageAge)
}

calculateAverageAge();
