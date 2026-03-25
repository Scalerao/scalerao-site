<?php
if (isset($_GET['code'])) {
    $code = $_GET['code'];

    echo "<h2>Authorization Successful</h2>";
    echo "<p>Code: " . htmlspecialchars($code) . "</p>";
} else {
    echo "<h2>No authorization code received</h2>";
}
?>
