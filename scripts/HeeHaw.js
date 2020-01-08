function heeHaw($max) {
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
