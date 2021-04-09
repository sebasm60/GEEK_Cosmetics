'use strict';

window.onload = function() {

    //Se guardan los articulos seleccionados en localStorage para despues listarlos.
    const btnAdd = document.getElementById('btnAdd');
    if (btnAdd){
        btnAdd.addEventListener('click', (e) => {
            const articulo = document.getElementById('articulo').value;
            const cantidad = document.getElementById('cantidad').value;
            const subtotal = document.getElementById('subtotal').value;

            const ordenes = [{articulo, cantidad, subtotal}];

            if (localStorage.getItem('orden') === null){
                let orden = [];
                orden.push(ordenes);
                localStorage.setItem('orden', JSON.stringify(orden));
            } else {
                let orden = JSON.parse(localStorage.getItem('orden'));
                orden.push(ordenes);
                localStorage.setItem('orden', JSON.stringify(orden));
            };
        });
    };

    const btnDelete = document.getElementById('delete');
    if (btnDelete) {
        btnDelete.addEventListener('click', (e) => {
            let orden = JSON.parse(localStorage.getItem('orden'));
            const articulo = e.target.id.split('_')[1];
            for (let i = 0; i < orden.length; i++) {
                if (orden[i][0].articulo === articulo) {
                    orden.splice(i, 1);
                    window.location.reload();
                    break;
                }
            };
            localStorage.setItem('orden', JSON.stringify(orden));
        });
    };

    function fecha () {
        const fecha = document.getElementById('fecha');
        if (fecha) {
            const date = new Date();

            const year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();
            const hour = date.getHours();
            const minute = date.getMinutes();

            if (day < 10) {
                day = '0' + day;
            };
            if (month < 10) {
                month = '0' + month;
            };
            
            fecha.defaultValue = year + '/' + month + '/' + day +' ' + hour + ':' + minute;
            ;
        };
    };
    fecha();

    function total () {
        const articulos = JSON.parse(localStorage.getItem('orden'));

        let subTotal = 0;

        for (let i = 0; i < articulos.length; i++) {
            subTotal = subTotal + parseInt(articulos[i][0].subtotal);
        };

        let subtot = document.getElementById('subtot').innerHTML = subTotal;
        let ivaa = document.getElementById('iva').innerHTML = (subTotal * 19) / 100;
        let total = document.getElementById('total').innerHTML = (subTotal * 1.19);

        localStorage.setItem('subtot', JSON.stringify(subtot));
        localStorage.setItem('iva', JSON.stringify(ivaa));
        localStorage.setItem('total', JSON.stringify(total));
    };

    if(document.getElementById('subtot') && document.getElementById('iva') && document.getElementById('total')){
        total();
    };
};  