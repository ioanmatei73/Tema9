(function($) {

    $('.woocommerce-LoopProduct-link').click(function(e) {
        e.preventDefault();

        $('.modal').css('display','block');

        $('.btn-close').click(function() {
            $('.modal').css('display','none');
        });

        var prod_id = $(this).children('button').attr('data-id');

        $('.modal-content').append("Product ID: " + prod_id);

        data = {
            action: 'quickview',
            prod_id: prod_id
        };

        $.ajax({
            //url: 'http://wpraidersacademy.local/wp-admin/admin-ajax.php',
            url: WPRQV.ajax_url,
            type: 'GET',
            data: data,
            success: function(response){
                console.log(response);
                if (response && response.length) {
                    
                    $('.modal').css('display','block');
                    var html = '';
                    
                    $('.modal-content').append(html);

                    // When the user clicks anywhere outside of the modal, close it
                    window.onclick = function(event) {
                        if (event.target == modal) {
                            modal.style.display = "none";
                        }
                    };
                }
            }
        });
    });

}) (jQuery);
