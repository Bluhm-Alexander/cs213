<!DOCTYPE html>
<html>

<head>
  <title>Problem 5</title
</head>

<body>

<?php
  
  $number = (float)$_POST['x'];
  $power = (float)$_POST['n'];
  
  echo "<table style=\"text-align: right;\"><br />";

  echo "<tr><th>N</th><th>Xn</tr>";
  for ($row = 0; $row < $power; $row ++) {
    echo "<tr>";
    
    echo "<td>", $row + 1, "</td>";
    
    echo "<td>", pow($number, ($row + 1)), "</td>";
  
  
    echo "</tr>";
  }

echo "</table>";
  
?>

</body>
</html>