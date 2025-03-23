Q1: What does `?v=1.0` do in `<link rel="stylesheet" href="./css/styles.css?v=1.0">`?

`?v=1.0` is a query string used for cache busting. It ensures that the browser loads the most recent version of the stylesheet by treating the URL as unique whenever the version number changes. This prevents the browser from using a cached version of the file, which might be outdated.

Q2: How does the browser cache work?

The browser cache is a mechanism that allows web browsers to store copies of web resources (like HTML pages, images, CSS files, and JavaScript files) locally on a user's device. This helps improve the performance and speed of web browsing by reducing the need to download the same resources repeatedly.
When a user visits a site, the browser first checks if it has a cached version of the resource.
If the resource is cached and still valid (basedIf the resource has changed (e.g., ?v=1.1 in a CSS file), the browser treats it as a new file and downloads it again.
on HTTP headers like Cache-Control and Expires), the browser loads it from cache instead of downloading it again.
If the resource has changed (e.g., ?v=1.1 in a CSS file), the browser treats it as a new file and downloads it again.
