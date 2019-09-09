---
layout: default
title:  "JS questions"
date:   2019-09-06 17:45:00 +0300
thumbnail:  "/images/avatar.jpg"
categories: meeting
excerpt_separator: <!--more-->
---
<!--more-->

## read

```html
<!doctype html>
<html>
<head>
  <script>
    alert(document.getElementById('myInput').value);
  </script>
</head>
<body>
  <div>
    <input type="text" id="myInput" value="foo"/>
  </div>
</body>
</html>
```

## resolve handle function 
```javascript
const tournament = {
    title: 'Tournament',
    status: 'active',
    prizes: [
        { id: 81, place: 2, name: "Bar"  },
        { id: 12, place: 1, name: "Foo" },
        { id: 44, place: 3, name: "Baz" }
    ],
};

const handle = (tournament) => { 
    const arr = [...tournament.prizes];
    return arr.sort((a,b)=> {
        return a.place - b.place; 
    }).map(t => t.prizes.name).join(','); 
};

const result = handle(tournament); 
console.log(result); // "Foo, Bar, Baz"
```

## how work context
```html
<script>
    function foo() {
        console.log(this);
    }

    var a = foo();    
    var b = new foo();

    var c = {};
</script>
```

## what return
```javascript
const x = Promise.resolve().then(() => 42);

console.log(x);
```

## what it does for browser
```javascript
import foo from 'foo';
```


<div class="m-5"></div>
