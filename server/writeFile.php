<?php
$pause = $_POST['play'];
$command = "echo \"{play:".$pause."}\" > settings";
$output = shell_exec($command);
echo $command;
?>