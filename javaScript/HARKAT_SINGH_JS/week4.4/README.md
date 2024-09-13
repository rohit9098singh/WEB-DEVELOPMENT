TO RENDER SOMETHING WE USE THIS MANY USECASES THEY ARE :-

1) document.getElementById('example').textContent = "HelloWorld!";
// It is a straightforward way to insert text, and it does not parse HTML tags. This means that if you set textContent to a string containing HTML tags, those tags will be displayed as plain text.

2) document.getElementById('example').innerHTML = "<p>Hello, <b>World!</b></p>";
//It allows you to include HTML tags and elements, which will be parsed and rendered accordingly. This is useful for adding formatted content but should be used carefully to avoid potential security issues such as Cross-Site Scripting (XSS) if the content includes user input.


3) document.getElementById('example').innerText = "Hello, World!";
//However, innerText is more aware of the CSS styling and the visible content. For instance, it takes into account hidden elements and line breaks.

4) document.getElementById('example').outerHTML = "<p>New content</p>";
// This means you can replace the entire element with new HTML. It is useful for replacing an element with a completely new structure.

5) document.getElementById('inputField').value = "New value";
//Used specifically for form elements like <input>, <textarea>, and <select>. It sets or gets the value of the form element.



