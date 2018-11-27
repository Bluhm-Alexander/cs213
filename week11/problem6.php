<!DOCTYPE html>
<html>

<head>
  <title>Problem 6</title
</head>

<body>

<?php
  
  $string = htmlspecialchars($_POST['input6']);
  $myArray = explode(', ', $string);
  sort($myArray, SORT_STRING);
  
  echo "<table style=\"text-align: left;\"><br />";

  for ($row = 0; $row < sizeof($myArray); $row ++) {
    echo "<tr>";
    
    echo "<td>", $myArray[$row], "</td>";
  
    echo "</tr>";
  }

  echo "</table>";



?>

</body>
</html>