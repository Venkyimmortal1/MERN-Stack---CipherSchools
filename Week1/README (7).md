# Lecture8-DOM-Traversal-Cipherschools

#HTML Code

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" />
    <link rel="Stylesheet" href=""/> 
    <title>Venkat's Website</title>
</head>
<body>
    <h1>My Page Title</h1>
    <p>Nice caption goes here</p>

    <article class="first_article">
    <h2>List of amazing fruits</h2>
    <p>Must eat fruits</p>
    <div class="wrapper-1">
    <ul class="apple-list">
        <li class="apple">Apples</li>
        <li class="orange">Oranges</li>
        <li class="avacado">Avacados</li>
        <li class="grape">Grapes
    <ul>
        <li class="type-1">Moon drops</li>
        <li>Sultana</li>
        <li>Concord</li>
        <li>Crimson Seedless</li>
    </ul>
        </li>
        <li class="banana">Banana</li>
    </ul>
    <button>Read Full List</button>
    <h2>Amazing places in Kenya</h2>
    <p>Must visit places in Kenya</p>
    <ul>
        <li>Maasai Mara</li>
        <li>Diani Beach</li>
        <li>Watamu Beach</li>
        <li>Amboseli national park</li>
        <li>Lake Nakuru</li>
    </ul>
    <button>Read Full List</button>
</body>
</html>


#Javascript :- Path: Webpage -> Inspect -> Console :

const headings=document.querySelectorAll("h2")
undefined
headings
NodeList(2) [h2, h2]0: h21: h2length: 2[[Prototype]]: NodeList
const firstHeading=headings[0]
undefined
firstHeading
<h2>​List of amazing fruits​</h2>​
const secondHeadin=headings[1]
undefined
secondHeading
VM1404:1 Uncaught ReferenceError: secondHeading is not defined
    at <anonymous>:1:1
(anonymous) @ VM1404:1
const secondHeading=heading[1]
VM1438:1 Uncaught ReferenceError: heading is not defined
    at <anonymous>:1:21
(anonymous) @ VM1438:1
const secondHeading=headings[1]
undefined
secondHeading
<h2>​Amazing places in Kenya​</h2>​
document.querySelector(".orange").innerHTML
'Oranges'
const appleList=document.querySelector(".apple-list")
undefined
appleList.children
HTMLCollection(5) [li.apple, li.orange, li.avacado, li.grape, li.banana]0: li.apple1: li.orange2: li.avacado3: li.grape4: li.bananalength: 5[[Prototype]]: HTMLCollection
appleList.childNodes
NodeList(11) [text, li.apple, text, li.orange, text, li.avacado, text, li.grape, text, li.banana, text]0: text1: li.apple2: text3: li.orange4: text5: li.avacado6: text7: li.grape8: text9: li.banana10: textlength: 11[[Prototype]]: NodeList
appleList.firstChild
#textassignedSlot: nullbaseURI: "file:///C:/Users/venkatesh/CipherSchools/HTML/myfirstwebsite.html"childNodes: NodeList []data: "\n        "firstChild: nullisConnected: truelastChild: nulllength: 9nextElementSibling: li.applenextSibling: li.applenodeName: "#text"nodeType: 3nodeValue: "\n        "ownerDocument: documentparentElement: ul.apple-listparentNode: ul.apple-listpreviousElementSibling: nullpreviousSibling: nulltextContent: "\n        "wholeText: "\n        "[[Prototype]]: Text
appleList.lastChild
#textassignedSlot: nullbaseURI: "file:///C:/Users/venkatesh/CipherSchools/HTML/myfirstwebsite.html"childNodes: NodeList []data: "\n    "firstChild: nullisConnected: truelastChild: nulllength: 5nextElementSibling: nullnextSibling: nullnodeName: "#text"nodeType: 3nodeValue: "\n    "ownerDocument: documentparentElement: ul.apple-listparentNode: ul.apple-listpreviousElementSibling: li.bananapreviousSibling: li.bananatextContent: "\n    "wholeText: "\n    "[[Prototype]]: Text
appleList.parentElement
<div class=​"wrapper-1">​<ul class=​"apple-list">​…​</ul>​<button>​Read Full List​</button>​<h2>​Amazing places in Kenya​</h2>​<p>​Must visit places in Kenya​</p>​<ul>​…​</ul>​<button>​Read Full List​</button>​</div>​
appleList.parentNode
<div class=​"wrapper-1">​<ul class=​"apple-list">​…​</ul>​<button>​Read Full List​</button>​<h2>​Amazing places in Kenya​</h2>​<p>​Must visit places in Kenya​</p>​<ul>​…​</ul>​<button>​Read Full List​</button>​</div>​
const btn1=document.queryCommandValue(".btn-1")
undefined
btn1.closest("main")
VM2475:1 Uncaught TypeError: btn1.closest is not a function
    at <anonymous>:1:6
(anonymous) @ VM2475:1
const btn1=document.querySelector(".btn-1")
undefined
btn1.closest("main")
VM2621:1 Uncaught TypeError: Cannot read properties of null (reading 'closest')
    at <anonymous>:1:6
(anonymous) @ VM2621:1
const btn1=document.querySelector(".btn-1")
undefined
btn1.closest("main")
VM2753:1 Uncaught TypeError: Cannot read properties of null (reading 'closest')
    at <anonymous>:1:6
(anonymous) @ VM2753:1
btn1
null
const orange=document.querySelector(".orange")
undefined
const apple=orange.previousElementSibling;
undefined
const avacado=orange.nextElementSibling
undefined
apple
<li class=​"apple">​::marker​"Apples"</li>​
avacado
<li class=​"avacado">​::marker​"Avacados"</li>​
