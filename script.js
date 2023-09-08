function Ivoce(id) {
    let inputTemp = document.querySelector('input');
    if (id != "C") {
        inputTemp.value += document.getElementById(`${id}`).innerHTML;
    } else {
        let splits = inputTemp.value.split("");
        splits.pop();
        let lav = splits.toString();
        lav = lav.replaceAll(',', '')
        inputTemp.value = lav;
    }
}

function Result() {
    let inputTemp = document.querySelector('input');
    const regex = /[/*+-]/gm;
    let simbol = inputTemp.value.match(regex);
    if (simbol.length < 2) {
        StandartCalc(simbol, inputTemp);
    } else {
        HardCalc(simbol, inputTemp);
    }
}

function StandartCalc(sim, tepm) {
    var ssr = sim[0].toString();
    let splits = tepm.value.split(sim[0].toString());
    switch (ssr) {
        case '/':
            document.querySelector('label').innerHTML = parseFloat(splits[0]) / parseFloat(splits[1]);
            tepm.value = "";
            break
        case '*':
            document.querySelector('label').innerHTML = (parseFloat(splits[0]) * parseFloat(splits[1]));
            tepm.value = "";
            break
        case '+':
            document.querySelector('label').innerHTML = (parseFloat(splits[0]) + parseFloat(splits[1]));
            tepm.value = "";
            break
        case '-':
            document.querySelector('label').innerHTML = (parseFloat(splits[0]) - parseFloat(splits[1]));
            tepm.value = "";
            break
    }
}

function HardCalc(sim, t) {
    const regex = /[/*+-]/gm;
    let nud = t.value.split(regex);
    for (let i = 0; i < sim.length; i++) {
        if (sim[i] == "/") {
            nud[i] = parseFloat(nud[i]) / parseFloat(nud[i + 1]);
            nud.splice(i + 1, 1)
            sim.splice(i, 1);
        }
        if (sim[i] == "*") {
            nud[i] = parseFloat(nud[i]) * parseFloat(nud[i + 1]);
            nud.splice(i + 1, 1)
            sim.splice(i, 1);
            console.log();
        }

    }
    for (let i = 0; i < sim.length;) {
        if (sim.length > 0) {
            if (sim[i] == "-") {
                nud[i] = parseFloat(nud[i]) - parseFloat(nud[i + 1]);
                nud.splice(i + 1, 1)
                sim.splice(i, 1);
            }
            if (sim[i] == "+") {
                nud[i] = parseFloat(nud[i]) + parseFloat(nud[i + 1]);
                nud.splice(i + 1, 1)
                sim.splice(i, 1);
            }
        }
    }
    document.querySelector('label').innerHTML = nud[0];
}

function All_clear()
{
    document.querySelector('input').value ="";
    document.querySelector('label').innerHTML = 0;
}