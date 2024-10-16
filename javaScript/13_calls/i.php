<?php
    echo "Enter the number to find whether it is a prime number or not: ";
    $number = (int)trim(fgets(STDIN));
    $flag = 0;


    if ($number > 1) {
        for ($i = 2; $i < $number; $i++) {
            if ($number % $i == 0) {
                $flag = 1;
                break;
            }
        }

        if ($flag == 0) {
            echo "The entered number is a prime number.\n";
        } else {
            echo "The entered number is not a prime number.\n";
        }
    } else {
        echo "The entered number is not a prime number.\n";
    }
?>
