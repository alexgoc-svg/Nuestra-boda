$gh = "C:\Program Files\GitHub CLI\gh.exe"
$git = "C:\Program Files\Git\cmd\git.exe"

$token = (& $gh auth token).Trim()
$remoteUrl = "https://x-access-token:$token@github.com/alexgoc-svg/Nuestra-boda.git"

& $git add .
& $git commit -m "feat: implementar estilo magico astral inspirado en El Castillo Vagabundo"
& $git push -u $remoteUrl feature/estilo-magico-ghibli
Remove-Item $PSCommandPath
