<?php
$scriptPath = __DIR__ . '/setup.sh';
$scriptContent = "#!/bin/bash\necho 'Hello'\nexit 0;\n";

file_put_contents($scriptPath, $scriptContent);
chmod($scriptPath, 0755);

echo "Script creado en: $scriptPath\n";

$cronJob = "0 3 * * * /bin/bash " . escapeshellarg($scriptPath) . " >> " . escapeshellarg(__DIR__ . '/cron.log') . " 2>&1";

$currentCrontab = shell_exec('crontab -l 2>/dev/null');

if ($currentCrontab === null || strpos($currentCrontab, $scriptPath) === false) {
    $tempFile = tempnam(sys_get_temp_dir(), 'cron');
    
    file_put_contents($tempFile, $currentCrontab . $cronJob . PHP_EOL);
    
    shell_exec('crontab ' . escapeshellarg($tempFile));
    
    unlink($tempFile);
    
    echo "Script programado en crontab exitosamente.\n";
} else {
    echo "El script ya se encuentra programado en crontab.\n";
}
?>