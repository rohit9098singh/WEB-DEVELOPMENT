/*
slugify('some string', {
  replacement: '-',  // replace spaces with replacement character, defaults to `-`
  remove: undefined, // remove characters that match regex, defaults to `undefined`
  lower: false,      // convert to lower case, defaults to `false`
  strict: false,     // strip special characters except replacement, defaults to `false`
  locale: 'vi',      // language code of the locale to use
  trim: true         // trim leading and trailing replacement chars, defaults to `true`
})*/ 

const slugify = require("slugify");


let defaultSlug = slugify("some string");
console.log("Default slugify:", defaultSlug);


let customCharSlug = slugify("some string", {
  replacement: '_', // replace spaces with underscores
});
console.log("Slugify with custom character:", customCharSlug);


let removeOptionSlug = slugify("hello slugify here i am using you now", {
  remove: /hello/g, // remove the word "hello"
});
console.log("Slugify with remove option:", removeOptionSlug);


let lowerCaseSlug = slugify("Some String To Be Slugified", {
  lower: true, // result in lower case
});
console.log("Slugify with lower case:", lowerCaseSlug);


let strictOptionSlug = slugify("Hello, world! This is an example.", {
  strict: true, // strip special characters except replacement
});
console.log("Slugify with strict option:", strictOptionSlug);

let trimOptionSlug = slugify("   some string to be slugified   ", {
  trim: true, // trim leading and trailing spaces
});
console.log("Slugify with trim option:", trimOptionSlug);







