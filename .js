function calculateSleep() {
    let wakeTime = document.getElementById("wake-time").value;
    if (!wakeTime) {
        document.getElementById("result").innerHTML = "कृपया समय दर्ज करें!";
        return;
    }

    let [hours, minutes] = wakeTime.split(":").map(Number);
    let wakeDate = new Date();
    wakeDate.setHours(hours, minutes);

    let sleepCycles = [9, 7.5, 6, 4.5]; // hours
    let results = [];

    sleepCycles.forEach(cycle => {
        let sleepTime = new Date(wakeDate.getTime() - cycle * 60 * 60 * 1000);
        results.push(
            sleepTime.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
        );
    });

    document.getElementById("result").innerHTML =
        "<b>सोने के सुझाए गए समय:</b><br>" + results.join("<br>");
}
