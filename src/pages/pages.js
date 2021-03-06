export default class Pages{
    constructor(){

    }

    initilize(){
        this.setClickLeftSidebar();
        this.setSidebars();
        this.setSelects();
    }

    setClickLeftSidebar(){
        var _this = this;
        $('.menu-btn').on('click', function(){            
            _this.checkMenuOpened();
        })
    }

    checkMenuOpened(opts){
        setTimeout(function(){
            var resizeEvent = window.document.createEvent('UIEvents'); 
            resizeEvent .initUIEvent('resize', true, false, window, 0); 
            window.dispatchEvent(resizeEvent);
        }, 300);

        if(opts !== 'close'){
            if(!$('body').hasClass('sideLeftClosed')){
                $('body').addClass('sideLeftClosed');
            }
            else{
                $('body').removeClass('sideLeftClosed');
                $('.sidenav-close').trigger('click');
            }
        }
        else{
            $('body').addClass('sideLeftClosed');
        }
    }

    setSidebars(){
        var _this = this;
        var sidebarAcc = $('#account-sidebar');

        var instances = M.Sidenav.init(sidebarAcc, {
            menuWidth: 300,
            closeOnClick: true,
            edge: 'right',
            onOpenStart: function(){
                _this.checkMenuOpened('close');
            }
        }); //inicia sidebar
    }

    setSelects(){
       var selects =  $('select');
       M.FormSelect.init(selects);
    }

    loadChart(options){  

        import('../js/highcharts/highstock.js').then((highcharts)=>{
            let Highcharts = highcharts.default
            Highcharts.setOptions({
                lang: {
                    loading: 'Aguarde...',
                    months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
                    weekdays: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
                    shortMonths: ['Jan', 'Feb', 'Mar', 'Abr', 'Maio', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
                    exportButtonTitle: "Exportar",
                    printButtonTitle: "Imprimir",
                    rangeSelectorFrom: "De",
                    rangeSelectorTo: "Até",
                    rangeSelectorZoom: "Periodo",
                    downloadPNG: 'Download imagem PNG',
                    downloadJPEG: 'Download imagem JPEG',
                    downloadPDF: 'Download documento PDF',
                    downloadSVG: 'Download imagem SVG'
                    // resetZoom: "Reset",
                    // resetZoomTitle: "Reset,
                    // thousandsSep: ".",
                    // decimalPoint: ','
                },
            });
            var chart = new Highcharts.Chart(options);
        });        
    }
}