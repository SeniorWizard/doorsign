$(document).ready(function() {

		function getCookieVars() {
			var ca = document.cookie.split(';');
      setKeyVal(ca);
    }

		function setCookieVars() {
			var exdays = 500;
			var d = new Date();
			d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
			var expires = "expires="+d.toUTCString();
			$('#chform').find(':input').each(function(){
					 document.cookie = this.id + "=" + $(this).val() + ";" + expires + ";path=/";
			});
		}

		function getUrlVars() {
				var ca = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        setKeyVal(ca);
		}

    function setKeyVal(arr) {
		  var c;
      console.log(arr);
			for(var i = 0; i < arr.length; i++) {
        if (arr[i].search('=') > 0 ) {
				  var c = arr[i].split("=");
          if (c[0].length > 1) {
				    console.log("key: " + c[0] + "=" + c[1]);
            var elem = $('#' + c[0].trim());
            if (elem.is("input[type='text']") ) {
              //console.log( c[0] + " is input text");
				      $('#' + c[0].trim()).val(decodeURIComponent(c[1]));
            }
          }
        }
      }
    }

		function CopyInput() {
			$('#chform').find(':input[type="text"]').each(function(){
					 $('#sign_' + this.id).html($(this).val()+'&nbsp;');
			});
		}

    $("#clear").click(function(){
      console.log("deleting vars");
			$('#chform').find(':input[type="text"]').each(function(){
					 $('#sign_' + this.id).html('&nbsp;');
           $(this).val('');
			});
		});

    $("#print").click(function(){
      console.log("setting vars");
			setCookieVars();
			window.print();
		});

    
    $('input[type="text"]').keyup(function() {
			CopyInput();
    });

    getCookieVars();
    getUrlVars();
    CopyInput();
	console.log("Loaded and ready");	

});
