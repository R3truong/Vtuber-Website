<?php
header('Content-Type: text/plain'); // Ensures the output is plain text

try {
    // Adjust this path if necessary
    $vtuberdb = new SQLite3('vtuber-database.db'); 
    echo "Database Connected!";
    $vtuberdb->close();
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}
?>