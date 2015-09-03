var Sidebar;

var Inicializar = function(){
    Sidebar = {
        Selector: $( ".Sidebar" ),
        Overlay : $( ".Overlay" ),
        Visible : false,

        Show : function(){
            this.Selector.addClass( "Expanded" );
            this.Overlay.show();
            this.Visible = true;
        },

        Hide : function(){
            this.Selector.removeClass( "Expanded" );
            this.Overlay.hide();
            this.Visible = false;
        },

        Toggle : function(){
            if ( this.Visible ){
                this.Hide();
            } else {
                this.Show();
            }
        },

        ToggleOverlay: function(){
            var Me = this;

            this.Overlay.click( function(){
                Me.Hide();
            });
        },

        Init : function(){
            this.Overlay.hide();
            this.ToggleOverlay();
        }
    }
}

var Eventos = function(){
    $( "#OpenSidebar" ).click(function(){
        Sidebar.Toggle();
    });
}

$(document).ready(function() {
    Inicializar();
    Sidebar.Init();
    Eventos();
});
