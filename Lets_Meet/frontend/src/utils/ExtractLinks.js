// ExtractLinks.js
export function ExtractLinks(inputString) {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
  
    // Array to hold the found links
    const linkArray = [];
  
    // Replace the URLs with the desired HTML structure
    const modifiedString = inputString.replace(urlRegex, (url) => {
      try {
        const urlObject = new URL(url); // Parse the URL
        const domain = urlObject.hostname; // Extract the domain name
        linkArray.push(url); // Add the full URL to the array
  
        // Return the HTML structure
        return `<span class="text-blue-500 underline"><a href="${url}" target="_blank">${domain}</a></span>`;
      } catch (err) {
        console.error(`Invalid URL: ${url}`, err);
        return url; // If URL parsing fails, return the original string
      }
    });
  
    // Debugging: log the outputs
    console.log("Modified String:", modifiedString);
    console.log("Extracted Links:", linkArray);
  
    return { originalString: modifiedString, links: linkArray }; // Return both results
  }
  

  {/**Extracted Links: ['https://chatgpt.com/']
ExtractLinks.js:24 Modified String: tor mai ke chodo */}