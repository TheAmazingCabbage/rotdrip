$url = 'https://rr.noordstar.me/0a588736';
if (isset($_GET['url']) && !empty($_GET['url'])) {
	$url = urldecode($_GET['url']);
} else if (isset($_GET['legacy_url']) && !empty($_GET['legacy_url'])) {
	$url = $_GET['legacy_url'];
}
?>
<html>
	<head>
	<meta id="redirect" http-equiv="refresh" content="0;URL='<?php echo htmlspecialchars($url, ENT_QUOTES, 'UTF-8'); ?>'" />
	</head>
</html>
