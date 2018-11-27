<!DOCTYPE html>
<html>

<head>
  <title>Submission Page</title
</head>

<body>
<a href="store.html">Return to store page</a>

<?php
  echo '<h1>Order ' . $_POST['send'] . 'ed!</h1>';
  echo $_POST['first'] . ' ';
  echo $_POST['last'];
?>

<br>

<?php
  echo $_POST['street'] . '<br>'
   . $_POST['suite'] . '<br>' . $_POST['zip'] . ', ' . $_POST['state'];
?>

<br>
<p>Phone Number: </p>

<?php
  echo $_POST['phone'];
?>

<p>Credit Card Info: </p>
<?php
  echo $_POST['cardNumber'] . '<br>' . $_POST['cardType']
   . '<br>Expiration: ' . $_POST['month'] . '/' . $_POST['year'];
?>

<p>Order Total:</p>

<script type="text/javascript">
  //window.onload = alert(localStorage.getItem("storageName"));
</script>

</body>
</html>