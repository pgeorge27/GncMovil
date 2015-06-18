$(document).ready(function() {
	$(".compartir").click(function() {
		var share = new Share();
		share.show({
			subject: 'GncMovil',
			text: 'Descarga GncMovil desde http://goo.gl/LFxWVm y disfruta de los productos gnc donde quiera que te encuentres.'},
		    function() {}, // Success function
		    function() {alert('Error al compartir')} // Failure function

		    );
	}); 
	
});

$( document ).on( "pageinit", "#producto", function() {
	$( document ).on( "swipeleft swiperight", "#producto", function( e ) {
        // We check if there is no open panel on the page because otherwise
        // a swipe to close the left panel would also open the right panel (and v.v.).
        // We do this by checking the data that the framework stores on the page element (panel: open).
        if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
        	if ( e.type === "swipeleft"  ) {
        		$( "#right-panel" ).panel( "open" );
        	} 
        }
    });
});