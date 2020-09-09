# HTML DOCUMENT STRUCTURE

```` html
<!-- Folder: hds/hds.index.html -->

<!DOCTYPE html> <!-- document declaration -->
<html dir="ltr" lang="en">
	<head> 
		
		<!-- Document header related tags -->

		<meta charset		="utf-8" />
		<meta http-equiv	="X-UA-Compatible" 	content ="IE=edge" />
		<meta name			="viewport" 		content ="width=device-width; initial-scale=1.0" />
		
		<title> Document Appropriate Skelton </title>

			<!-- 
				[ CSS ] -->

		<link 	rel		="stylesheet" 		
				type	="text/css" 
				href	="./public/css/style.main.css" 
				media	="screen" />

		<link 	rel		="shortcut icon"
				type	="image/ico" 	
				href	="./favicon.ico" />
	</head>
<body>
	
	<!-- Document body related tags -->
	<header role="tda-main-header">

	</header>
	
	<main id="tda-main">
		<section>
			<h1> Document Appropriate Skelton </h1>
		</section>	
	<main>	
	
	<footer id="tda-footer">
		
	</footer>
<!--|---------------------------------------------------------------------------------------|			
	|					[ JavaScript external ]												|	
	|_______________________________________________________________________________________| -->
			
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js"></script>
		<script src="public/js/main.js"></script>

	</body>
</html>
````
A typical HTML document will have the following structure:

	1. Document declaration tag
	2. Document root tag
	3. Document header related tags
	4. Document body related tags

We will be study the head and body related tags in subsequent section. but before we go any futher, let's just look at what is document declaration.

	The <!DOCTYPE> declaration tag is used by the web browser to understand the version of the HTML used in the document. There are many other declaration types which can be used in HTML document depending on what version of HTML is being used. Current version of HTML is 5 and it makes use of the following declaration: <!DOCTYPE html>. 

### HTML Tags

HTML is a markup language and makes use of various tags to format the content. These tags are enclosed within angle braces <Tag Name>. Except few tags, most of the tags have their corresponding closing tags. For example, <html> has its closing tag </html> and <body> tag has its closing tag </body> tag etc.

Above HTML document stracture uses the following tags

| Tags 		     | Description |
| -------------- | ----------- |
|`<!DOCTYPE...>` | This tag defines the document type and HTML version. |
|`<html>`        | This tag encloses the complete HTML document and mainly comprises of document header which is represented by `<head>...</head>` and document body which is represented by `<body>...</body>` tags. |
| `<head>`  | This tag represents the document's header which can keep other HTML tags like `<title>, <link>` etc. |
| `<title>` | The `<title>` tag is used inside the `<head>` tag to mention the document title. |
| `<body>`  | This tag represents the document's body which keeps other HTML tags like `<h1>, <div>, <p>`   etc. |
| `<h1>`    | This tag represents the heading. |
| `<p>`     | This tag represents a paragraph. |
