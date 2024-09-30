# Lecture5-CipherSchools
<!-- CSS Selectors
HTML code -->
<!DOCTYPE html>
<html lang = "en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA_compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="./test.css"/>
        <title>First HTML Page</title>
    </head>
    <body>
        <q>I am Amazing.</q>
        <h1>My Heading 1</h1>
        <h2>My Heading 2</h2>
        <h3>My Heading 3</h3>
        <h4>My Heading 3</h4>
        <h5>My Heading 3</h5>
        <h6>My Heading 3</h6>
        <p id="Mainparagraph">This is main paragraph.</p>
        <p class="center-paragraph"> This is another Para. </p>
        <p><abbr title="Body Mass Index">BMI</abbr> indicates default weight and healthy body growth.</p><br>
        Complete Homework.
        <a href="https://instagram.com" target="_blank"><i>click here!</i></a> <br>
        Complete Assignment.
        <a href="https://facebook.com" target="_blank"><i>click here!</i> </a>
        <address>
            Learned by Venkatesh.<br>
            Check me out on instagram: <br>
        </address>
        <img 
        src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
        alt="Frog Image"
        />
        <button>Click Me!!!</button>
        <h3>Unordered List</h3>
        <ul>
            <li>Link</li>
            <li>pink</li>
            <li>oink</li>
        </ul>
        <h3>Ordered List</h3>
        <ol>
            <li>Link</li>
            <li>pink</li>
            <li>oink</li>
        </ol>
        <dl>
            <dt>Link</dt>
            <dd>--An <i>address</i> which directs the client to the desired web page acc to the link the client entered.</dd>
            <dt>pink</dt>
            <dd>--A shade of <u><span style="color:red">red</span></u> colour.</dd>
            <dt>oink</dt>
            <dd>--Sound of a <b>pig</b>.</dd>
        </dl>
        <p>This is venkatesh and he lives in india.<br/>he loves Chocolates.</p>
        <hr/>
        <div>
            <p>Shanthanu is teaching me</p>
            <P>He's got good knowledge on the subject.</P>
        </div>
        <p>yellow</p>

    </body>
</html>


/*CSS Code*/

p:hover {
    text-align: center;
    background-color: bisque;
} /*element selector*/
#Mainparagraph:hover{
    text-align: center;
    background-color: aqua;
    zoom: 120%;
}/*id selector*/
.center-paragraph {
    text-align: left;
    text-decoration: dotted;
}/*class selector*/
*{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}/*universal selector*/
div:hover::first-line{
    color: red;
    text-align: center;
}
a[target]{
    background-color:white;
}

