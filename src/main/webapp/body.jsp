<!DOCTYPE html>
<html lang="en">
<%@include file="includes/head.jsp" %>
<body>
	<div id="wrap">
		<%@include file="includes/nav.jsp" %>

		<%String project = (String)request.getAttribute("project"); %>		
		<jsp:include page="/content${project}.jsp" flush="true" />

	</div>
	<%@include file="includes/footer.jsp" %>
</body>
</html>
