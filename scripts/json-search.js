let json_data = {
    "jane doe": {
        "name": {
            "first": "Jane",
            "last": "Doe"
        },
        "father": {
            "first": "Petrus",
            "last": "de Milliano"
        },
        "mother": {
            "first": "Sophia",
            "last": "van Damme"
        },
        "sex": "f",
        "born": 1876,
        "died": 1956
    },
    "jane ramirez": {
        "name": {
            "first": "Jane",
            "last": "Ramirez"
        },
        "father": {
            "first": "Petro",
            "last": "el Ramirez"
        },
        "mother": {
            "first": "Lucy",
            "last": "an Fuccy"
        },
        "sex": "f",
        "born": 1976,
        "died": 2010
    },
    "dean winchester": {
        "name": {
            "first": "Dean",
            "last": "Winchester"
        },
        "father": {
            "first": "Bobby",
            "last": "Winchester"
        },
        "mother": {
            "first": "Marlin",
            "last": "Winchester"
        },
        "sex": "m",
        "born": 1988,
        "died": 2018
    },
    "bob kovlov": {
        "name": {
            "first": "Bob",
            "last": "Kovlov"
        },
        "father": {
            "first": "Robert",
            "last": "Kovlov"
        },
        "mother": {
            "first": "Dorthy",
            "last": "Gebrid"
        },
        "sex": "m",
        "born": 1956,
        "died": 2008
    },
    "lily lada": {
        "name": {
            "first": "Lily",
            "last": "Lada"
        },
        "father": {
            "first": "Caleb",
            "last": "Lada"
        },
        "mother": {
            "first": "Ellena",
            "last": "Pepiros"
        },
        "sex": "f",
        "born": 1978,
        "died": 1995
    }
};

function jsonSearch() {
    let inputQuery = document.getElementById('query_text').value.toLowerCase();
    let outputHTML = "";

    for (let person in json_data) {
        let personFound = checkSubstring(inputQuery, person);

        if (personFound) {
            outputHTML += buildPerson(person);
        }
    }

    document.getElementById("people_found").innerHTML = outputHTML;
}

function checkSubstring(substring, string) {
    for (i = 0; i < substring.length; i++) {
        if (substring.charAt(i) !== string.charAt(i)) {
            return false;
        }
    }

    return string;
}

function buildPerson(person) {
    let father = json_data[person]["father"]["first"] +
        " " + json_data[person]["father"]["last"];
    let mother = json_data[person]["mother"]["first"] +
        " " + json_data[person]["mother"]["last"];
    let name = json_data[person]["name"]["first"] +
        " " + json_data[person]["name"]["last"];
    let born = json_data[person]["born"];
    let died = json_data[person]["died"];
    let sex = json_data[person]["sex"];

    let output = `<p><b>Name: ${name}</b></p>`;
    output += `<p>Sex: ${sex}</p>`;
    output += `<p>Born: ${born}</p>`;
    output += `<p>Died: ${died}</p>`;
    output += `<p>Father: ${father}</p>`;
    output += `<p>Mother: ${mother}</p><br>`;

    return output;
}