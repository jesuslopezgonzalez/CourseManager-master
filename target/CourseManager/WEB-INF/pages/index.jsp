<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Course Manager WebApp</title>
  <link rel="stylesheet" href="${pageContext.request.contextPath}/css/normalize.css">
  <link rel="stylesheet" href="${pageContext.request.contextPath}/css/style.css">
</head>
<body>
	<script type="text/x-handlebars">
	{{outlet}}
	</script>
	
	<script type="text/x-handlebars" data-template-name="createCourse">
	</script>
	<script type="text/x-handlebars" data-template-name="courseList">
	</script>
 	
  <script src="${pageContext.request.contextPath}/js/libs/jquery-1.9.1.js"></script>
  <script src="${pageContext.request.contextPath}/js/libs/jquery-ui-1.10.3.custom.min.js"></script>
  <script src="${pageContext.request.contextPath}/js/libs/handlebars-1.0.0.js"></script>
  <script src="${pageContext.request.contextPath}/js/libs/ember-1.1.2.js"></script>
  <script src="${pageContext.request.contextPath}/js/app.js"></script>
  
  <script src="${pageContext.request.contextPath}/js/views/CourseListView.js"></script>
  <script src="${pageContext.request.contextPath}/js/views/CourseListTitleOrderView.js"></script>
  <script src="${pageContext.request.contextPath}/js/views/CreateCourseView.js"></script>
  
  <script src="${pageContext.request.contextPath}/js/routes/RouteMap.js"></script>
  <script src="${pageContext.request.contextPath}/js/routes/CourseListRoute.js"></script>
  <script src="${pageContext.request.contextPath}/js/routes/CreateCourseRoute.js"></script>
  
  <script src="${pageContext.request.contextPath}/js/ds/Course.js"></script>
  <script src="${pageContext.request.contextPath}/js/ds/CourseStore.js"></script>
  <script src="${pageContext.request.contextPath}/js/ds/Teacher.js"></script>
  <script src="${pageContext.request.contextPath}/js/ds/TeacherStore.js"></script>
  
  <script src="${pageContext.request.contextPath}/js/controllers/CourseController.js"></script>
  <script src="${pageContext.request.contextPath}/js/controllers/CourseListController.js"></script>
  <script src="${pageContext.request.contextPath}/js/controllers/CreateCourseController.js"></script>
  <script src="${pageContext.request.contextPath}/js/controllers/LevelController.js"></script>
  <script src="${pageContext.request.contextPath}/js/controllers/TeacherController.js"></script>
  

</body>
</html>
 