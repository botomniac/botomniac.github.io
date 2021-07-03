function validateDefault(){$.validator.setDefaults({submitHandler:function(e){var t=e.serialize();$.ajax({type:"POST",url:"../../php/email.php",data:t,success:function(){$("#msg").addClass("form-sent")}})}})}function validateContactForm(){$("#contactForm").validate({errorElement:"span",rules:{name:"required",email:{required:!0,email:!0},subject:"required",message:"required"},messages:{name:"The name field must be filled.",email:{required:"The email field must be filled.",email:"Type a valid email."},subject:"The subject field must be filled.",message:"Type a message."},submitHandler:submitContactForm})}function validateContactFormTwo(){$("#contactFormTwo").validate({errorElement:"span",rules:{name:"required",email:{required:!0,email:!0},subject:"required",message:"required"},messages:{name:"O campo de nome deve ser preenchido.",email:{required:"O email deve ser preenchido.",email:"Insira um email válido."},subject:"O assunto deve ser preenchido.",message:"Este campo nao pode estar vazio."},submitHandler:submitContactForm})}function submitContactForm(e){var t=$(e).serialize();$.ajax({type:"POST",url:"../../php/email.php",data:t,success:function(){$("#msg").addClass("form-sent"),$(".form").each(function(){this.reset()})}})}function setLanguage(){var e="";function t(){var t,n;(t="userLang",n=document.cookie.match("(^|;)\\s*"+t+"\\s*=\\s*([^;]+)"),n?n.pop():"").length?"pt-BR"===e||"pt-PT"===e?addHTMLbr():addHTMLen():(document.cookie="userLang=''; max-age=0; expires=0",o())}function o(){var o,n,a,i,l,m;e=navigator.language||navigator.userLanguage,o="userLang",n=e,a="20",(m=new Date).setTime(m.getTime()+24*a*60*60*1e3),document.cookie=o+"="+n+"; expires="+m.toGMTString()+"path="+i+"domain="+l,t()}""===$("html").attr("lang")?o():t()}function btnLanguage(){$(document).on("click","#langPT",function(){addHTMLbr()}),$(document).on("click","#langEN",function(){addHTMLen()})}function addHTMLbr(){$("html").attr("lang","pt"),$("#header").load("html/pt-BR/common/header.html"),$("#footer").load("html/pt-BR/common/footer.html"),$("#sectionHome").load("html/pt-BR/components/home.html"),$("#sectionAbout").load("html/pt-BR/components/about.html"),$("#sectionServices").load("html/pt-BR/components/services.html"),$("#sectionGallery").load("html/pt-BR/components/gallery.html"),$("#sectionRecommends").load("html/pt-BR/components/recommendations.html"),$("#sectionContact").load("html/pt-BR/components/contact.html",validateContactFormTwo)}function addHTMLen(){$("html").attr("lang","en"),$("#header").load("html/en-US/common/header.html"),$("#footer").load("html/en-US/common/footer.html"),$("#sectionHome").load("html/en-US/components/home.html"),$("#sectionAbout").load("html/en-US/components/about.html"),$("#sectionServices").load("html/en-US/components/services.html"),$("#sectionGallery").load("html/en-US/components/gallery.html"),$("#sectionRecommends").load("html/en-US/components/recommendations.html"),$("#sectionContact").load("html/en-US/components/contact.html",validateContactForm)}function collapseMenu(){$(window).width()>991&&$("body").addClass("menu-collapsed"),$(".collapse").click(function(){$("body").toggleClass("menu-collapsed")})}function menuScrollspy(){$(window).bind("scroll",function(){var e=$(window).scrollTop();$(".bloco").each(function(t){var o=$(this).offset().top-100,n=o+$(this).height();if(e>=o&&e<=n){var a=$(this).attr("id");$('a[href="#'+a+'"]').addClass("active").parent().siblings().find("a").removeClass("active")}})})}function discoverButton(){$("#discover").on("click",function(){$(this).addClass("active"),setTimeout(function(){$("#discover").removeClass("active"),window.open("https://www.behance.net/mrwsantos")},2500)})}function hideHeaderOnInputFocus(){$("form input, form textarea").focus(function(){$(".header.mobile").addClass("hide")}),$("form input, form textarea").focusout(function(){$(".header.mobile").removeClass("hide")})}function toggleMode(){var e=document.querySelector('.label input[type="checkbox"]'),t=localStorage.getItem("theme");t&&(document.documentElement.setAttribute("data-theme",t),"light"===t&&(e.checked=!0)),e.addEventListener("change",function(e){e.target.checked?(document.documentElement.setAttribute("data-theme","light"),localStorage.setItem("theme","light")):(document.documentElement.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark"))},!1)}function galleryColoured(){$(window).width()>=768&&setInterval(function(){var e=$("#myTabContent");$("#myTabContent:hover").length>0?e.find("img:hover").addClass("hovered"):e.find("img:not(hover)").removeClass("hovered")},200)}function lightbox(){$("#logos .aria a").simpleLightbox(),$("#websites .aria a").simpleLightbox(),$("#drawings .aria a").simpleLightbox(),$("#low-poly .aria a").simpleLightbox()}$(document).init(function(){setLanguage(),ScrollOut({targets:"section,div.load"})}),$(document).ajaxStop(function(){collapseMenu(),menuScrollspy(),hideHeaderOnInputFocus(),discoverButton(),toggleMode(),lightbox()}),window.onload=function(){},$(document).ready(function(){galleryColoured(),btnLanguage(),validateDefault()});