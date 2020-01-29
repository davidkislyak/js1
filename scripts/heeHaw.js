function consoleHeeHaw($max) {
    if (!Number.isInteger($max) || $max < 1) {
        console.log("Please enter a valid maximum number.");
        return;
    }

    let $current = 1;

    while ($current <= $max) {
        if ($current % 3 == 0) {
            if ($current % 5 == 0) {
                console.log("Hee Haw!");
            } else {
                console.log("Hee!");
            }
        } else if ($current % 5 == 0) {
            console.log("Haw!");
        } else {
            console.log($current);
        }
        $current++;
    }
}

function heeHaw($max) {
    if (!Number.isInteger($max) || $max < 1) {
        console.log("Please enter a valid maximum number.");
        return;
    }

    let $return = [];
    let $current = 1;

    while ($current <= $max) {
        if ($current % 3 == 0) {
            if ($current % 5 == 0) {
                $return.push("Hee Haw!");
            } else {
                $return.push("Hee!");
            }
        } else if ($current % 5 == 0) {
            $return.push("Haw!");
        } else {
            $return.push($current);
        }
        $current++;
    }

    return $return;
}

function arrToList($arr, $id) {
    $output = "<ul>";

    // $arr.forEach(element => $output.append("<li>" + element + "</li>"));
    for (let $i = 0; $i < $arr.length; $i++) {
        $output += "<li>" + $arr[$i] + "</li>";
    }

    $(`${$id}`).append($output + "</ul>");
}