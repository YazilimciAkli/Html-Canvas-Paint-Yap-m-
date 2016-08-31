<?php
$boyut=$_GET['boyut'] ?: 20;
$boyut*=2;
$img = imagecreate($boyut+1, $boyut+1);
$color = imagecolorallocatealpha($img, 0, 0, 0, 127);
imagefill($img, 0, 0, $color);
$col_ellipse = imagecolorallocate($img, 0, 0, 0);
imageellipse($img, $boyut/2, $boyut/2, $boyut, $boyut, $col_ellipse);
header("Content-type: image/png");
imagepng($img);
?>