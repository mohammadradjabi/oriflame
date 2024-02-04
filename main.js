///////////////////////////////////////////////////
//1st slider
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 5000,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
    snapOnRelease: true,
    dragSize: "200px",
  },
});
//2nd slider
var swiper = new Swiper(".radjabi", {
  slidesPerView: 9,
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    500: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    550: {
      slidesPerView: 5,
      spaceBetween: 0,
    },
    600: {
      slidesPerView: 5.5,
      spaceBetween: 0,
    },
    650: {
      slidesPerView: 6,
      spaceBetween: 0,
    },
    700: {
      slidesPerView: 6.5,
      spaceBetween: 0,
    },
    750: {
      slidesPerView: 7,
      spaceBetween: 0,
    },
    800: {
      slidesPerView: 7.5,
      spaceBetween: 0,
    },
    850: {
      slidesPerView: 8,
      spaceBetween: 0,
    },
  },
});
//3rd slider
var swiper = new Swiper(".oriflame", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1000: {
      slidesPerView: 3.5,
      spaceBetween: 30,
    },

    1300: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});
var swiper = new Swiper(".oriflame-xs", {
  slidesPerView: 2,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    550: {
      slidesPerView: 2.1,
      spaceBetween: 30,
    },
    600: {
      slidesPerView: 2.3,
      spaceBetween: 30,
    },
    650: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
    750: {
      slidesPerView: 2.3,
      spaceBetween: 30,
    },
  },
});
/////////////////////////////////////////////
//submenu
$("div.submenu>div>ul>li:nth-of-type(1)").on("mouseenter", function () {
  $("div.submenu-offers").css({
    display: "block",
  });
  $("div.submenu-catalogue").css({
    display: "none",
  });
  $("div.submenu-inspiration").css({
    display: "none",
  });
  $("div.submenu-nutrition").css({
    display: "none",
  });
  $("div.submenu-skin").css({
    display: "none",
  });
  $("div.submenu-make-up").css({
    display: "none",
  });
  $("div.submenu-fragrance").css({
    display: "none",
  });
  $("div.submenu-bath").css({
    display: "none",
  });
  $("div.submenu-hair").css({
    display: "none",
  });
  $("div.submenu-accessories").css({
    display: "none",
  });
  $("div.submenu-men").css({
    display: "none",
  });
  $("div.submenu-kids").css({
    display: "none",
  });
});
$("div.submenu>div>ul>li:nth-of-type(2)").on("mouseenter", function () {
  $("div.submenu-offers").css({
    display: "none",
  });
  $("div.submenu-catalogue").css({
    display: "block",
  });
  $("div.submenu-inspiration").css({
    display: "none",
  });
  $("div.submenu-nutrition").css({
    display: "none",
  });
  $("div.submenu-skin").css({
    display: "none",
  });
  $("div.submenu-make-up").css({
    display: "none",
  });
  $("div.submenu-fragrance").css({
    display: "none",
  });
  $("div.submenu-bath").css({
    display: "none",
  });
  $("div.submenu-hair").css({
    display: "none",
  });
  $("div.submenu-accessories").css({
    display: "none",
  });
  $("div.submenu-men").css({
    display: "none",
  });
  $("div.submenu-kids").css({
    display: "none",
  });
});
$("div.submenu>div>ul>li:nth-of-type(3)").on("mouseenter", function () {
  $("div.submenu-offers").css({
    display: "none",
  });
  $("div.submenu-catalogue").css({
    display: "none",
  });
  $("div.submenu-inspiration").css({
    display: "block",
  });
  $("div.submenu-nutrition").css({
    display: "none",
  });
  $("div.submenu-skin").css({
    display: "none",
  });
  $("div.submenu-make-up").css({
    display: "none",
  });
  $("div.submenu-fragrance").css({
    display: "none",
  });
  $("div.submenu-bath").css({
    display: "none",
  });
  $("div.submenu-hair").css({
    display: "none",
  });
  $("div.submenu-accessories").css({
    display: "none",
  });
  $("div.submenu-men").css({
    display: "none",
  });
  $("div.submenu-kids").css({
    display: "none",
  });
});
$("div.submenu>div>ul>li:nth-of-type(4)").on("mouseenter", function () {
  $("div.submenu-offers").css({
    display: "none",
  });
  $("div.submenu-catalogue").css({
    display: "none",
  });
  $("div.submenu-inspiration").css({
    display: "none",
  });
  $("div.submenu-nutrition").css({
    display: "flex",
  });
  $("div.submenu-skin").css({
    display: "none",
  });
  $("div.submenu-make-up").css({
    display: "none",
  });
  $("div.submenu-fragrance").css({
    display: "none",
  });
  $("div.submenu-bath").css({
    display: "none",
  });
  $("div.submenu-hair").css({
    display: "none",
  });
  $("div.submenu-accessories").css({
    display: "none",
  });
  $("div.submenu-men").css({
    display: "none",
  });
  $("div.submenu-kids").css({
    display: "none",
  });
});
$("div.submenu>div>ul>li:nth-of-type(5)").on("mouseenter", function () {
  $("div.submenu-offers").css({
    display: "none",
  });
  $("div.submenu-catalogue").css({
    display: "none",
  });
  $("div.submenu-inspiration").css({
    display: "none",
  });
  $("div.submenu-nutrition").css({
    display: "none",
  });
  $("div.submenu-skin").css({
    display: "flex",
  });
  $("div.submenu-make-up").css({
    display: "none",
  });
  $("div.submenu-fragrance").css({
    display: "none",
  });
  $("div.submenu-bath").css({
    display: "none",
  });
  $("div.submenu-hair").css({
    display: "none",
  });
  $("div.submenu-accessories").css({
    display: "none",
  });
  $("div.submenu-men").css({
    display: "none",
  });
  $("div.submenu-kids").css({
    display: "none",
  });
});
$("div.submenu>div>ul>li:nth-of-type(6)").on("mouseenter", function () {
  $("div.submenu-offers").css({
    display: "none",
  });
  $("div.submenu-catalogue").css({
    display: "none",
  });
  $("div.submenu-inspiration").css({
    display: "none",
  });
  $("div.submenu-nutrition").css({
    display: "none",
  });
  $("div.submenu-skin").css({
    display: "none",
  });
  $("div.submenu-make-up").css({
    display: "flex",
  });
  $("div.submenu-fragrance").css({
    display: "none",
  });
  $("div.submenu-bath").css({
    display: "none",
  });
  $("div.submenu-hair").css({
    display: "none",
  });
  $("div.submenu-accessories").css({
    display: "none",
  });
  $("div.submenu-men").css({
    display: "none",
  });
  $("div.submenu-kids").css({
    display: "none",
  });
});
$("div.submenu>div>ul>li:nth-of-type(7)").on("mouseenter", function () {
  $("div.submenu-offers").css({
    display: "none",
  });
  $("div.submenu-catalogue").css({
    display: "none",
  });
  $("div.submenu-inspiration").css({
    display: "none",
  });
  $("div.submenu-nutrition").css({
    display: "none",
  });
  $("div.submenu-skin").css({
    display: "none",
  });
  $("div.submenu-make-up").css({
    display: "none",
  });
  $("div.submenu-fragrance").css({
    display: "flex",
  });
  $("div.submenu-bath").css({
    display: "none",
  });
  $("div.submenu-hair").css({
    display: "none",
  });
  $("div.submenu-accessories").css({
    display: "none",
  });
  $("div.submenu-men").css({
    display: "none",
  });
  $("div.submenu-kids").css({
    display: "none",
  });
});
$("div.submenu>div>ul>li:nth-of-type(8)").on("mouseenter", function () {
  $("div.submenu-offers").css({
    display: "none",
  });
  $("div.submenu-catalogue").css({
    display: "none",
  });
  $("div.submenu-inspiration").css({
    display: "none",
  });
  $("div.submenu-nutrition").css({
    display: "none",
  });
  $("div.submenu-skin").css({
    display: "none",
  });
  $("div.submenu-make-up").css({
    display: "none",
  });
  $("div.submenu-fragrance").css({
    display: "none",
  });
  $("div.submenu-bath").css({
    display: "flex",
  });
  $("div.submenu-hair").css({
    display: "none",
  });
  $("div.submenu-accessories").css({
    display: "none",
  });
  $("div.submenu-men").css({
    display: "none",
  });
  $("div.submenu-kids").css({
    display: "none",
  });
});
$("div.submenu>div>ul>li:nth-of-type(9)").on("mouseenter", function () {
  $("div.submenu-offers").css({
    display: "none",
  });
  $("div.submenu-catalogue").css({
    display: "none",
  });
  $("div.submenu-inspiration").css({
    display: "none",
  });
  $("div.submenu-nutrition").css({
    display: "none",
  });
  $("div.submenu-skin").css({
    display: "none",
  });
  $("div.submenu-make-up").css({
    display: "none",
  });
  $("div.submenu-fragrance").css({
    display: "none",
  });
  $("div.submenu-bath").css({
    display: "none",
  });
  $("div.submenu-hair").css({
    display: "flex",
  });
  $("div.submenu-accessories").css({
    display: "none",
  });
  $("div.submenu-men").css({
    display: "none",
  });
  $("div.submenu-kids").css({
    display: "none",
  });
});
$("div.submenu>div>ul>li:nth-of-type(10)").on("mouseenter", function () {
  $("div.submenu-offers").css({
    display: "none",
  });
  $("div.submenu-catalogue").css({
    display: "none",
  });
  $("div.submenu-inspiration").css({
    display: "none",
  });
  $("div.submenu-nutrition").css({
    display: "none",
  });
  $("div.submenu-skin").css({
    display: "none",
  });
  $("div.submenu-make-up").css({
    display: "none",
  });
  $("div.submenu-fragrance").css({
    display: "none",
  });
  $("div.submenu-bath").css({
    display: "none",
  });
  $("div.submenu-hair").css({
    display: "none",
  });
  $("div.submenu-accessories").css({
    display: "flex",
  });
  $("div.submenu-men").css({
    display: "none",
  });
  $("div.submenu-kids").css({
    display: "none",
  });
});
$("div.submenu>div>ul>li:nth-of-type(11)").on("mouseenter", function () {
  $("div.submenu-offers").css({
    display: "none",
  });
  $("div.submenu-catalogue").css({
    display: "none",
  });
  $("div.submenu-inspiration").css({
    display: "none",
  });
  $("div.submenu-nutrition").css({
    display: "none",
  });
  $("div.submenu-skin").css({
    display: "none",
  });
  $("div.submenu-make-up").css({
    display: "none",
  });
  $("div.submenu-fragrance").css({
    display: "none",
  });
  $("div.submenu-bath").css({
    display: "none",
  });
  $("div.submenu-hair").css({
    display: "none",
  });
  $("div.submenu-accessories").css({
    display: "none",
  });
  $("div.submenu-men").css({
    display: "flex",
  });
  $("div.submenu-kids").css({
    display: "none",
  });
});
$("div.submenu>div>ul>li:nth-of-type(12)").on("mouseenter", function () {
  $("div.submenu-offers").css({
    display: "none",
  });
  $("div.submenu-catalogue").css({
    display: "none",
  });
  $("div.submenu-inspiration").css({
    display: "none",
  });
  $("div.submenu-nutrition").css({
    display: "none",
  });
  $("div.submenu-skin").css({
    display: "none",
  });
  $("div.submenu-make-up").css({
    display: "none",
  });
  $("div.submenu-fragrance").css({
    display: "none",
  });
  $("div.submenu-bath").css({
    display: "none",
  });
  $("div.submenu-hair").css({
    display: "none",
  });
  $("div.submenu-accessories").css({
    display: "none",
  });
  $("div.submenu-men").css({
    display: "none",
  });
  $("div.submenu-kids").css({
    display: "flex",
  });
});
//burger menu
{
  flag = true;

  $("nav.menu-lg>div:nth-of-type(1)>div:nth-of-type(1)").on(
    "click",
    function () {
      if (flag == true) {
        $(
          "nav.menu-lg>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(1)"
        ).css({
          transform: "rotate(-45deg)",
          top: "calc(50% - 1px)",
          transition: "300ms linear",
        });
        $(
          "nav.menu-lg>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(2)"
        ).css({
          transition: "200ms linear",
          transform: "translateX(30px)",
          opacity: "0",
        });
        $(
          "nav.menu-lg>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(3)"
        ).css({
          transform: "rotate(45deg)",
          bottom: "calc(50% - 1px)",
          transition: "300ms linear",
        });
        $("nav.menu-lg>div>div.submenu").css({
          display: "flex",
        });
        $("main").css({
          filter: "blur(2px)",
        });
        $("div.joinus").css({
          display: "none",
        });

        flag = false;
      } else {
        $(
          "nav.menu-lg>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(1)"
        ).css({
          transform: "rotate(0)",
          top: "5px",
          transition: "300ms linear",
        });
        $(
          "nav.menu-lg>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(2)"
        ).css({
          transition: "200ms linear",
          transform: "translateX(0px)",
          opacity: "1",
        });
        $(
          "nav.menu-lg>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(3)"
        ).css({
          transform: "rotate(0)",
          bottom: "5px",
          transition: "300ms linear",
        });
        $("nav.menu-lg>div>div.submenu").css({
          display: "none",
        });
        $("main").css({
          filter: "blur(0px)",
        });
        flag = true;
      }
    }
  );
}
//search
{
  $("input.search-lg").on("click", function () {
    $("i.times-lg").css({
      display: "block",
    });
  });
  $("i.times-lg").on("click", function () {
    $(this).css({
      display: "none",
    });
  });
}
{
  $("div#search-xs>i").on("click", function () {
    $("div.search-sm").css({
      display: "flex",
    });
  });
  $("i.times-xs").on("click", function () {
    $("div.search-sm").css({
      display: "none",
    });
  });
}
//join us
{
  flagj = true;
  $("a.join").on("click", function () {
    if (flagj == true) {
      $("div.joinus").css({
        display: "block",
      });
      $("main").css({
        filter: "blur(5px)",
      });
      $("div.signin").css({
        left: "-270px",
        transition: "100ms linear all",
      });
      $(
        "nav.menu-lg>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(1)"
      ).css({
        transform: "rotate(0)",
        top: "5px",
        transition: "300ms linear",
      });
      $(
        "nav.menu-lg>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(2)"
      ).css({
        transition: "200ms linear",
        transform: "translateX(0px)",
        opacity: "1",
      });
      $(
        "nav.menu-lg>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(3)"
      ).css({
        transform: "rotate(0)",
        bottom: "5px",
        transition: "300ms linear",
      });
      $("nav.menu-lg>div>div.submenu").css({
        display: "none",
      });
      flag = true;
      flags = true;
      flagj = false;
    } else {
      $("div.joinus").css({
        display: "none",
      });
      $("main").css({
        filter: "blur(0px)",
      });

      flagj = true;
    }
  });
}
//signin
{
  flags = true;
  $("a.sign").on("click", function () {
    if (flags == true) {
      $("div.signin").css({
        left: "0",
        transition: "100ms linear all",
      });
      $("main").css({
        filter: "blur(5px)",
      });
      $("div.joinus").css({
        display: "none",
      });
      $(
        "nav.menu-lg>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(1)"
      ).css({
        transform: "rotate(0)",
        top: "5px",
        transition: "300ms linear",
      });
      $(
        "nav.menu-lg>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(2)"
      ).css({
        transition: "200ms linear",
        transform: "translateX(0px)",
        opacity: "1",
      });
      $(
        "nav.menu-lg>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(3)"
      ).css({
        transform: "rotate(0)",
        bottom: "5px",
        transition: "300ms linear",
      });
      $("nav.menu-lg>div>div.submenu").css({
        display: "none",
      });
      flag = true;
      flagj = true;
      flags = false;
    } else {
      $("div.signin").css({
        left: "-270px",
        transition: "100ms linear all",
      });
      $("main").css({
        filter: "blur(0px)",
      });
      flags = true;
    }
  });
}
//main
{
  $("main").on("click", function () {
    $("div.joinus").css({
      display: "none",
    });
    $("i.times-lg").css({
      display: "none",
    });
    $("main").css({
      filter: "blur(0px)",
    });
    $("div.signin").css({
      left: "-270px",
      transition: "100ms linear all",
    });
    $("div.submenu-xs").css({
      left: "-270px",
      transition: "100ms linear all",
    });

    $("div.search-sm").css({
      display: "none",
    });

    flags = true;
    flagj = true;
  });
  //bag
  flagsh = true;
  $("i.bag-lg").on("mouseenter", function () {
    $("div.store").css({
      display: "flex",
    });
    $("div.signin").css({
      left: "-270px",
      transition: "100ms linear all",
    });
    $("div.joinus").css({
      display: "none",
    });
    $("i.times").css({
      display: "none",
    });
    $("main").css({
      filter: "blur(5px)",
    });
    $("div.joinus").css({
      display: "none",
    });
    $(
      "nav.menu-lg>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(1)"
    ).css({
      transform: "rotate(0)",
      top: "5px",
      transition: "300ms linear",
    });
    $(
      "nav.menu-lg>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(2)"
    ).css({
      transition: "200ms linear",
      transform: "translateX(0px)",
      opacity: "1",
    });
    $(
      "nav.menu-lg>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(3)"
    ).css({
      transform: "rotate(0)",
      bottom: "5px",
      transition: "300ms linear",
    });
    $("nav.menu-lg>div>div.submenu").css({
      display: "none",
    });
    flag = true;
    flagj = true;
    flags = true;
    flagsh = false;

    $("main").on("click", function () {
      $("div.store").css({
        display: "none",
      });
      $("main").css({
        filter: "blur(0px)",
      });
    });
    flagsh = true;
  });
}
// xs menu dropdown
{
  {
    Flagcat = true;
    $("li.submenu-catalogue-xs>div:nth-of-type(1)").on("click", function () {
      if (Flagcat) {
        $("li.submenu-catalogue-xs>div:nth-of-type(2)").css({
          display: "block",
        });
        $("li.submenu-inspiration-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-nutrition-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-skin-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-make-up-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-fragrance-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-bath-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-hair-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-accessories-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-men-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-kids-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-catalogue-xs>div:nth-of-type(1)>i").css({
          transform: "rotate(180deg)",
          transition: "100ms linear",
        });
        Flagcat = false;
      } else {
        $("li.submenu-catalogue-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-catalogue-xs>div:nth-of-type(1)>i").css({
          transform: "rotate(0)",
          transition: "100ms linear",
        });
        Flagcat = true;
      }
    });
  }
  {
    Flagins = true;
    $("li.submenu-inspiration-xs>div:nth-of-type(1)").on("click", function () {
      if (Flagins) {
        $("li.submenu-catalogue-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-inspiration-xs>div:nth-of-type(2)").css({
          display: "block",
        });
        $("li.submenu-nutrition-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-skin-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-make-up-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-fragrance-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-bath-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-hair-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-accessories-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-men-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-kids-xs>div:nth-of-type(2)").css({
          display: "none",
        });

        $("li.submenu-inspiration-xs>div:nth-of-type(1)>i").css({
          transform: "rotate(180deg)",
          transition: "100ms linear",
        });

        Flagins = false;
      } else {
        $("li.submenu-inspiration-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-inspiration-xs>div:nth-of-type(1)>i").css({
          transform: "rotate(0)",
          transition: "100ms linear",
        });
        Flagins = true;
      }
    });
  }
  {
    Flagnut = true;
    $("li.submenu-nutrition-xs>div:nth-of-type(1)").on("click", function () {
      if (Flagnut) {
        $("li.submenu-catalogue-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-inspiration-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-nutrition-xs>div:nth-of-type(2)").css({
          display: "block",
        });
        $("li.submenu-skin-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-make-up-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-fragrance-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-bath-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-hair-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-accessories-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-men-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-kids-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-nutrition-xs>div:nth-of-type(1)>i").css({
          transform: "rotate(180deg)",
          transition: "100ms linear",
        });
        Flagnut = false;
      } else {
        $("li.submenu-nutrition-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-nutrition-xs>div:nth-of-type(1)>i").css({
          transform: "rotate(0)",
          transition: "100ms linear",
        });
        Flagnut = true;
      }
    });
  }
  {
    Flagski = true;
    $("li.submenu-skin-xs>div:nth-of-type(1)").on("click", function () {
      if (Flagski) {
        $("li.submenu-catalogue-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-inspiration-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-nutrition-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-skin-xs>div:nth-of-type(2)").css({
          display: "block",
        });
        $("li.submenu-make-up-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-fragrance-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-bath-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-hair-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-accessories-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-men-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-kids-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-skin-xs>div:nth-of-type(1)>i").css({
          transform: "rotate(180deg)",
          transition: "100ms linear",
        });
        Flagski = false;
      } else {
        $("li.submenu-skin-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-skin-xs>div:nth-of-type(1)>i").css({
          transform: "rotate(0)",
          transition: "100ms linear",
        });
        Flagski = true;
      }
    });
  }
  {
    Flagmak = true;
    $("li.submenu-make-up-xs>div:nth-of-type(1)").on("click", function () {
      if (Flagmak) {
        $("li.submenu-catalogue-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-inspiration-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-nutrition-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-skin-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-make-up-xs>div:nth-of-type(2)").css({
          display: "block",
        });
        $("li.submenu-fragrance-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-bath-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-hair-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-accessories-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-men-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-kids-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-make-up-xs>div:nth-of-type(1)>i").css({
          transform: "rotate(180deg)",
          transition: "100ms linear",
        });
        Flagmak = false;
      } else {
        $("li.submenu-make-up-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-make-up-xs>div:nth-of-type(1)>i").css({
          transform: "rotate(0)",
          transition: "100ms linear",
        });
        Flagmak = true;
      }
    });
  }
  {
    Flagfra = true;
    $("li.submenu-fragrance-xs>div:nth-of-type(1)").on("click", function () {
      if (Flagfra) {
        $("li.submenu-catalogue-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-inspiration-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-nutrition-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-skin-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-make-up-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-fragrance-xs>div:nth-of-type(2)").css({
          display: "block",
        });
        $("li.submenu-bath-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-hair-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-accessories-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-men-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-kids-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-fragrance-xs>div:nth-of-type(1)>i").css({
          transform: "rotate(180deg)",
          transition: "100ms linear",
        });
        Flagfra = false;
      } else {
        $("li.submenu-fragrance-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-fragrance-xs>div:nth-of-type(1)>i").css({
          transform: "rotate(0)",
          transition: "100ms linear",
        });
        Flagfra = true;
      }
    });
  }
  {
    Flagbat = true;
    $("li.submenu-bath-xs>div:nth-of-type(1)").on("click", function () {
      if (Flagbat) {
        $("li.submenu-catalogue-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-inspiration-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-nutrition-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-skin-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-make-up-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-fragrance-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-bath-xs>div:nth-of-type(2)").css({
          display: "block",
        });
        $("li.submenu-hair-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-accessories-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-men-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-kids-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-bath-xs>div:nth-of-type(1)>i").css({
          transform: "rotate(180deg)",
          transition: "100ms linear",
        });
        Flagbat = false;
      } else {
        $("li.submenu-bath-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-bath-xs>div:nth-of-type(1)>i").css({
          transform: "rotate(0)",
          transition: "100ms linear",
        });
        Flagbat = true;
      }
    });
  }
  {
    Flaghai = true;
    $("li.submenu-hair-xs>div:nth-of-type(1)").on("click", function () {
      if (Flaghai) {
        $("li.submenu-catalogue-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-inspiration-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-nutrition-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-skin-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-make-up-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-fragrance-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-bath-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-hair-xs>div:nth-of-type(2)").css({
          display: "block",
        });
        $("li.submenu-accessories-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-men-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-kids-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-hair-xs>div:nth-of-type(1)>i").css({
          transform: "rotate(180deg)",
          transition: "100ms linear",
        });
        Flaghai = false;
      } else {
        $("li.submenu-hair-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-hair-xs>div:nth-of-type(1)>i").css({
          transform: "rotate(0)",
          transition: "100ms linear",
        });
        Flaghai = true;
      }
    });
  }
  {
    Flagacc = true;
    $("li.submenu-accessories-xs>div:nth-of-type(1)").on("click", function () {
      if (Flagacc) {
        $("li.submenu-catalogue-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-inspiration-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-nutrition-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-skin-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-make-up-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-fragrance-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-bath-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-hair-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-accessories-xs>div:nth-of-type(2)").css({
          display: "block",
        });
        $("li.submenu-men-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-kids-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-accessories-xs>div:nth-of-type(1)>i").css({
          transform: "rotate(180deg)",
          transition: "100ms linear",
        });
        Flagacc = false;
      } else {
        $("li.submenu-accessories-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-accessories-xs>div:nth-of-type(1)>i").css({
          transform: "rotate(0)",
          transition: "100ms linear",
        });
        Flagacc = true;
      }
    });
  }
  {
    Flagmen = true;
    $("li.submenu-men-xs>div:nth-of-type(1)").on("click", function () {
      if (Flagmen) {
        $("li.submenu-catalogue-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-inspiration-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-nutrition-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-skin-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-make-up-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-fragrance-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-bath-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-hair-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-accessories-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-men-xs>div:nth-of-type(2)").css({
          display: "block",
        });
        $("li.submenu-kids-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-men-xs>div:nth-of-type(1)>i").css({
          transform: "rotate(180deg)",
          transition: "100ms linear",
        });
        Flagmen = false;
      } else {
        $("li.submenu-men-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-men-xs>div:nth-of-type(1)>i").css({
          transform: "rotate(0)",
          transition: "100ms linear",
        });
        Flagmen = true;
      }
    });
  }
  {
    Flagkid = true;
    $("li.submenu-kids-xs>div:nth-of-type(1)").on("click", function () {
      if (Flagkid) {
        $("li.submenu-catalogue-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-inspiration-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-nutrition-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-skin-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-make-up-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-fragrance-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-bath-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-hair-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-accessories-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-men-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-kids-xs>div:nth-of-type(2)").css({
          display: "block",
        });
        $("li.submenu-kids-xs>div:nth-of-type(1)>i").css({
          transform: "rotate(180deg)",
          transition: "100ms linear",
        });
        Flagkid = false;
      } else {
        $("li.submenu-kids-xs>div:nth-of-type(2)").css({
          display: "none",
        });
        $("li.submenu-kids-xs>div:nth-of-type(1)>i").css({
          transform: "rotate(0)",
          transition: "100ms linear",
        });
        Flagkid = true;
      }
    });
  }
}
{
  $("div.burgur-menu-xs").on("click", function () {
    $("div.submenu-xs").css({
      transition: "300ms",
      left: "0",
    });
    $("main").css({
      filter: "blur(5px)",
    });
  });
  $("div.burgur-menu-xs-toggle").on("click", function () {
    $("div.submenu-xs").css({
      left: "-270px",
      transition: "300ms",
    });
  });
  flagUser = true;
  $("i.user-xs").on("click", function () {
    if (flagUser) {
      $("div.signin").css({
        left: "0",
        transition: "300ms",
      });
      $("main").css({
        filter: "blur(5px)",
      });
      $("div.submenu-xs").css({
        left: "-270px",
      });
      flagUser = false;
    } else {
      $("div.signin").css({
        left: "-270px",
        transition: "300ms",
      });
      $("main").css({
        filter: "blur(0px)",
      });
      $("div.submenu-xs").css({
        left: "-270px",
      });
      flagUser = true;
    }
  });
  $("div.products-bg>span").on("click", function () {
    $("div.signin").css({
      left: "-270px",
    });
    $("div.submenu-xs").css({
      left: "0px",
    });
  });
  $("div.register-bg>span").on("click", function () {
    $("div.signin").css({
      left: "0px",
    });
    $("div.submenu-xs").css({
      left: "-270px",
    });
  });
  $("div.burgur-menu-xs-toggle").on("click", function () {
    $("div.submenu-xs").css({
      left: "-270px",
    });
    $("div.signin").css({
      left: "-270px",
      transition: "300ms",
    });
    $("main").css({
      filter: "blur(0px)",
    });
    $("div.signin").css({
      left: "-270px",
    });
  });
}

var vids = $("video");
$.each(vids, function () {
  this.controls = false;
});
//Loop though all Video tags and set Controls as false

$("video").on("click", function () {
  //console.log(this);
  if (this.paused) {
    this.play();
    $("i.video-play").css({
      display: "none",
    });
  } else {
    this.pause();
    $("i.video-play").css({
      display: "block",
    });
  }
});
{
  let flag = true;
  $("div.footerxs>ul>li:nth-of-type(1)").on("click", function () {
    if (flag) {
      $("div.footerxs>ul>li:nth-of-type(1)>div").slideDown(300);
      $("div.footerxs>ul>li:nth-of-type(1)>p>span>i").css({
        transform: "rotate(180deg)",
        transition: "200ms",
      });
      flag = false;
    } else {
      $("div.footerxs>ul>li:nth-of-type(1)>div").slideUp(300);
      $("div.footerxs>ul>li:nth-of-type(1)>p>span>i").css({
        transform: "rotate(0deg)",
        transition: "200ms",
      });
      flag = true;
    }
  });
}
{
  let flag = true;
  $("div.footerxs>ul>li:nth-of-type(2)").on("click", function () {
    if (flag) {
      $("div.footerxs>ul>li:nth-of-type(2)>div").slideDown(300);
      $("div.footerxs>ul>li:nth-of-type(2)>p>span>i").css({
        transform: "rotate(180deg)",
        transition: "200ms",
      });
      flag = false;
    } else {
      $("div.footerxs>ul>li:nth-of-type(2)>div").slideUp(300);
      $("div.footerxs>ul>li:nth-of-type(2)>p>span>i").css({
        transform: "rotate(0deg)",
        transition: "200ms",
      });
      flag = true;
    }
  });
}
{
  let flag = true;
  $("div.footerxs>ul>li:nth-of-type(3)").on("click", function () {
    if (flag) {
      $("div.footerxs>ul>li:nth-of-type(3)>div").slideDown(300);
      $("div.footerxs>ul>li:nth-of-type(3)>p>span>i").css({
        transform: "rotate(180deg)",
        transition: "200ms",
      });
      flag = false;
    } else {
      $("div.footerxs>ul>li:nth-of-type(3)>div").slideUp(300);
      $("div.footerxs>ul>li:nth-of-type(3)>p>span>i").css({
        transform: "rotate(0deg)",
        transition: "200ms",
      });
      flag = true;
    }
  });
}
