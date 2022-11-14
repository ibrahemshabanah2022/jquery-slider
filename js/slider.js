$(document).ready(function () {
  "use strict";

  (function ($) {
    $.fn.showLightbox = function () {
      var windowHeight = window.innerHeight || $(window).height(),
        windowWidth = window.innerWidth || $(window).width();

      $('<div id="ms-overlay"></div>').css({ opacity: "0.9" }).appendTo("body");

      $('<div id="ms-lightbox"></div>').hide().appendTo("body");

      $("<img>")
        .attr("src", $(this).attr("src"))
        .css({
          height: 500,
          width: 800,
        })
        .load(function () {
          $("#ms-lightbox")
            .css({
              top: (windowHeight - $("#ms-lightbox").height()) / 2,
              left: (windowWidth - $("#ms-lightbox").width()) / 2,
            })
            .fadeIn();
        })
        .appendTo("#ms-lightbox");

      $('<div id="ms-title-wrap"></div>').appendTo("#ms-lightbox");

      $('<p id="ms-title"></p>').appendTo("#ms-title-wrap");
      document.getElementById("ms-title").innerHTML = $(this).attr("title");

      $("#ms-overlay, #ms-lightbox").click(function () {
        $("#ms-overlay, #ms-lightbox").remove();
      });

      $(document).keyup(function (event) {
        if (event.which == 27) {
          $("#ms-overlay, #ms-lightbox").remove();
        }
      });

      return this;
    };

    $.fn.showSlider = function (params) {
      var options = $.extend(
          {
            height: 300,
            fadeTime: 5000,
            intervalTime: 7000,
            tray: true,
          },
          params
        ),
        imgCount = $(this).children().length,
        trayMenu = $('<ul id="tray"></ul>'),
        dothtml = '<li class="dot selected"><a href="#">0</a></li>',
        imageItem = $(this).children(),
        pics = imageItem.children(),
        tray,
        intervalID,
        intervalTime = options.intervalTime,
        fade = options.fadeTime,
        height = options.height;

      $(this).css({ height: height + "px" });
      pics.css({ height: height + "px" });

      if (options.tray) {
        for (var i = 1; i < imgCount; i++) {
          dothtml +=
            '<li class="dot deselected"><a href="#">' + i + "</a></li>";
        }

        trayMenu.append(dothtml);
        trayMenu.insertAfter($(this));

        tray = $("#tray").children();

        tray.click(function (event) {
          event.preventDefault();

          var chosenPicIndex = $(this).text();

          clearInterval(intervalID);

          fadeOutAndIn(imageItem.eq(chosenPicIndex));

          setTimeout(function () {
            makeInterval();
          }, fade);
        });
      }
      imageItem.css({ zIndex: "1", opacity: "1" });

      imageItem
        .eq(0)
        .addClass("visible")
        .css({ zIndex: "3", position: "relative" });

      function changeDotFocus(currentDot, nextDot) {
        currentDot.removeClass("selected").addClass("deselected");
        nextDot.removeClass("deselected").addClass("selected");
      }

      function fadeOutAndIn(chosenPic) {
        var current = $(".visible"),
          next;

        if (!chosenPic) {
          if (current.index() === imgCount - 1) {
            next = 0;
          } else {
            next = current.index() + 1;
          }

          chosenPic = imageItem.eq(next);
        }

        if (current.index() !== chosenPic.index()) {
          chosenPic.css({ zIndex: "2" });

          if (options.tray) {
            changeDotFocus(
              tray.eq(current.index()),
              tray.eq(chosenPic.index())
            );
          }

          current.fadeTo(fade, 0.0, function () {
            current.removeClass("visible").css({ zIndex: "1", opacity: "1" });

            chosenPic.addClass("visible").css({ zIndex: "3" });
          });
        }
      }

      function makeInterval() {
        intervalID = setInterval(function () {
          fadeOutAndIn();
        }, intervalTime);
      }

      makeInterval();

      return this;
    };

    $.fn.showGallery = function (params) {
      $("#ms-gallery").children().addClass("ms-gallery-item");

      var options = $.extend(
          {
            imgCounter: true,
            width: 165,
            height: 95,
          },
          params
        ),
        picWidth = options.width,
        picHeight = options.height,
        listItems = $(this).children(),
        imageItem = listItems.children(),
        imgCount = listItems.size();

      imageItem.css({ width: picWidth + "px", height: picHeight + "px" });

      imageItem.click(function () {
        var imageId = $(this).parent().index();

        loadImg($(this), imageId);
      });

      function loadImg(obj, imageId) {
        $("#ms-lightbox, #ms-overlay").remove();

        obj.showLightbox();

        createArrowLinks(imageId);
      }

      function createArrowLinks(imageId) {
        var top = ($(window).height() - $("#ms-lightbox").height()) / 2,
          side = ($(window).width() - $("#ms-lightbox").width()) / 2,
          middle = $("#ms-lightbox").height() / 2,
          prevImg,
          nextImg;

        if (imageId !== 0) {
          prevImg = $(listItems)
            .eq(imageId - 1)
            .children();

          $('<div id="arrow-left"></div>')
            .appendTo("#ms-lightbox")
            .css({ left: "-80px", top: middle })
            .click(function () {
              loadImg(prevImg, imageId - 1);
            });

          $('<div id="arrow-left-icon"></div>').appendTo("#arrow-left");
        }

        if (imageId + 1 !== imgCount) {
          nextImg = $(listItems)
            .eq(imageId + 1)
            .children();

          $('<div id="arrow-right"></div>')
            .appendTo("#ms-lightbox")
            .css({ right: "-80px", top: middle })
            .click(function () {
              loadImg(nextImg, imageId + 1);
            });

          $('<div id="arrow-right-icon"></div>').appendTo("#arrow-right");
        }

        if (options.imgCounter) {
          imgCounter(imageId, top, side);
        }
      }

      function imgCounter(imageId) {
        $('<div id="counter"></div>').appendTo("#ms-lightbox");

        $("<span></span>")
          .appendTo("#counter")
          .text(imageId + 1 + "/" + imgCount);
      }

      return this;
    };
  })(jQuery);

  $(".ms-lightbox").click(function () {
    $(this).showLightbox();
  });
});
