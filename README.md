# miniSet
jQuery plugin for displaying images

<h2 id="about">1. About miniStage</h2>

MiniSet is a jQuery plugin that allows you to quickly and painlessly install an image gallery. It is a light weight yet powerful plugin that requires minimal configurations or JavaScript knowledge. The gallery allows to quickly browse through a list of images. A larger version of the image is opened up when an image is clicked. The larger image may be closed by clicking once more, or by pressing ESC button on your keyboard.


---


<h2 id="installation">2. Installation</h2>

* Extract miniSet files and include them in your project:

* Include CSS file between the head tags:

<pre class="prettyprint linenums">
&lt;link rel='stylesheet/less' type='text/css' href='miniset.css'&gt;
</pre>

* Include jQuery before the closing body tag:

<pre class="prettyprint linenums">
&lt;script src='jquery.js'&gt;&lt;/script&gt;
</pre>

Alternatively, inlclude jQuery from a remote host:

<pre class="prettyprint linenums">
&lt;script src='http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js'&gt;&lt;/script&gt;
</pre>

* Include miniSet right after jQuery:

<pre class="prettyprint linenums">
&lt;script src='ministage.js'&gt;&lt;/script&gt;
</pre>

The final result:

<pre class="prettyprint linenums">
&lt;html&gt;
    &lt;head&gt;
        &lt;link rel='stylesheet/less' type='text/css' href='miniset.css'&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;script src='jquery.js'&gt;&lt;/script&gt;
        &lt;script src='miniset.js'&gt;&lt;/script&gt;
    &lt;/body&gt;
&lt;/html&gt;
</pre>


---


<h2 id="lightbox">3. Lightbox</h2>

Use miniSet Lightbox class to display sigle images. For a single image:

<pre class="prettyprint linenums">
&lt;img src='my_image.jpg' class="ms-lightbox" title="my_title"&gt;
</pre>

<span class="note">Note:</span> Make sure to add width and/or height attribute to the img attribute to get the required size.

Group several Lightbox class elements into a single container:

<pre class="prettyprint linenums">
&lt;div class="ms-lightbox-group"&gt;
    &lt;img src='my_image.jpg' class="ms-lightbox" title="my_title"&gt;
    &lt;img src='my_image.jpg' class="ms-lightbox" title="my_title"&gt;
    &lt;img src='my_image.jpg' class="ms-lightbox" title="my_title"&gt;
    &lt;!-- ... --&gt;
&lt;/div&gt;
</pre>


---


<h2 id="slider">4. Slider</h2>

Include the miniSet Slider function call before the closing body tag, right after including jQuery and miniStage files:

<pre class="prettyprint linenums">
&lt;script src='jquery.js'&gt;&lt;/script&gt;
&lt;script src='miniset.js'&gt;&lt;/script&gt;
&lt;script&gt;
    $( document ).ready(function() {
        // Initiate the Slider
        $('#ms-slider').showSlider({
            'height': 300,
            'fadeTime': 500,
            'intervalTime': 5000,
            'tray': true
        });
    });
&lt;/script&gt;
</pre>

<span class="note">Note:</span> The parameters passed to the function are optional, and will be set to default if not passed.

Once the call to Slider function is in place, create the miniSet Slider by including the following code:

<pre class="prettyprint linenums">
&lt;div class="ms-slider-group"&gt;
    &lt;ul id="ms-slider"&gt;
        &lt;li&gt;&lt;img src='my_image_1.jpg'&gt;&lt;/li&gt;
        &lt;li&gt;&lt;img src='my_image_2.jpg'&gt;&lt;/li&gt;
        &lt;li&gt;&lt;img src='my_image_3.jpg'&gt;&lt;/li&gt;
        &lt;!-- ... --&gt;
    &lt;/ul&gt;
&lt;/div&gt;
</pre>

<span class="note">Note:</span> The slider will span the whole width of the container, so make sure to adjust your images accordingly.


---



<h2 id="gallery">5. Gallery</h2>

Include the miniSet Gallery function call before the closing body tag, right after including jQuery and miniStage files:

<pre class="prettyprint linenums">
&lt;script src='jquery.js'&gt;&lt;/script&gt;
&lt;script src='miniset.js'&gt;&lt;/script&gt;
&lt;script&gt;
    $( document ).ready(function() {
        // Initiate the Gallery
        $('#ms-gallery').showGallery({
            'imgCounter': true,
            'width': 165,
            'height': 95
        });
    });
&lt;/script&gt;
</pre>

<span class="note">Note:</span> The parameters passed to the function are optional, and will be set to default if not passed.

Once the call to Gallery function is in place, create the miniSet Gallery by including the following code:

<pre class="prettyprint linenums">
&lt;div class="ms-gallery-group"&gt;
    &lt;ul id="ms-gallery"&gt;
        &lt;li&gt;&lt;img src='my_image_1.jpg' title='my_title_1'&gt;&lt;/li&gt;
        &lt;li&gt;&lt;img src='my_image_2.jpg' title='my_title_2'&gt;&lt;/li&gt;
        &lt;li&gt;&lt;img src='my_image_3.jpg' title='my_title_3'&gt;&lt;/li&gt;
        &lt;!-- ... --&gt;
    &lt;/ul&gt;
&lt;/div&gt;
</pre>
