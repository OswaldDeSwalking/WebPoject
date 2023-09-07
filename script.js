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
        StandartCalc(simbol,inputTemp);
    } else {
        HardCalc(simbol,inputTemp);
    }

    function StandartCalc(sim,tepm)
    {
        var ssr = sim[0].toString();
        let splits = inputTemp.value.split(sim[0].toString());
        switch (ssr) {
            case '/':
                document.querySelector('label').innerHTML= parseInt(splits[0]) / parseInt(splits[1]);
                tepm.value="";
                break
            case '*':
                document.querySelector('label').innerHTML=(parseInt(splits[0]) * parseInt(splits[1]));
                tepm.value="";
                break
            case '+':
                document.querySelector('label').innerHTML=(parseInt(splits[0]) + parseInt(splits[1]));
                tepm.value="";
                break
            case '-':
                document.querySelector('label').innerHTML=(parseInt(splits[0]) - parseInt(splits[1]));
                tepm.value="";
                break
        }
        function HardCalc(sim)
        {

        }
    }
}