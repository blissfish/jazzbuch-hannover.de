<!DOCTYPE html>
<html lang="en">
<%@include file="includes/head.jsp"%>

<body>
	<div id="wrap">
		<!-- Wrap all page content here -->
		<!-- Fixed navbar -->
		<%@include file="includes/nav.jsp"%>
		<!-- Navbar -->
		<!-- Begin page content -->

		<div class="container-fluid p-3 p-md-5">
			<div class="jumbotron">
				<h1 class="display-4">Ein Stück Jazzgeschichte</h1>
				<p class="lead">Die Doppel CD zum Buch</p>
			</div>

			<div class="card flex-md-row mb-4 h-md-250">
				<div
					style="width: image width px; font-size: 80%; text-align: left;"
					class="card-body  ">
					<img src="images/image068.jpg" class="img-responsive box-shadow"
						alt="Generic placeholder thumbnail"> <span
						class="text-muted"><br />Ein Stück Jazzgeschichte - Eine
						musikalische Zeitreise Herausgegeben in 2007</span>
				</div>
					
				<div class="card-body d-flex flex-column align-items-start">
		
					
				</div>
			</div>
			
			<div class="card flex-md-row mb-3 h-md-250">				
					<%@include file="jazzgeschichte_cd_table.jsp"%>
			</div>
		</div>
	</div>

	<!-- footer start -->
	<%@include file="includes/footer.jsp"%>
	<!-- footer end -->
</body>
</html>
