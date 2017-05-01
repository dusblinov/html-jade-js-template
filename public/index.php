<!DOCTYPE html>

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
	<meta name="author" content="Matt Everson of Astuteo, LLC – https://www.astuteo.com/slickmap" />
	<title>Проект "Добросердие"</title>
	<link rel="stylesheet" type="text/css" media="screen, print" href="/project/slickmap.css" />
</head>

<body>

	<div class="sitemap">

		<h1>Проект "Добросердие"</h1>
		<h2>Карта страниц сайта &mdash; Версия 1.0 / Старт проекта - 17.04, Финиш - 01.06</h2>

		<ul id="utilityNav">
			<li><a href="http://dobroserdie.com/" target="_blank">Добросердие</a></li>      
		</ul>
		<?php 
		 $siteTree = require_once('./tree.php');
		?>
		<ul id="primaryNav" class="col<?php echo count($siteTree); ?> ">
			<li id="home">
        <a href="/page/home.html" target="_blank">Главная</a>
      </li>
			<?php foreach($siteTree as $item) : ?>
				<li>
					<a href="<?php echo $item['index']['href']; ?>" target="_blank">
						<?php echo $item['index']['title']; ?>
					</a>
					<?php if (count($item['child'])) { ?>
						<ul>
							<?php foreach($item['child'] as $child) : ?>
							<li>
								<a href="<?php echo $child['href']; ?>"  target="_blank">
									<?php echo $child['title']; ?>
								</a>
								<?php if($child['comment']){ ?>
									<ul>
										<li>
											<a>
												<?php echo $child['comment']; ?>
											</a>
										</li>
									</ul>
									
								<?php } ?>
							</li>
							<?php endforeach; ?>
						</ul>
					<?php } ?>
				</li>
			<?php endforeach; ?>
			
			
		</ul>

	</div>

</body>

</html>
