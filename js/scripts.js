for (let i = 0; i < productos.length; i++) {
    $('#productos').append(
        '<div class="col-6 col-md-4">' +
        '<div class="sc-product-item product-container">' +
        '<img class="img-fluid rounded" data-name="product_image" src="img/productos/' + productos[i]['Imagen'] + '" alt="' + productos[i]['Nombre'] + '">' +
        '<h4 class="product-title" data-name="product_name">' + productos[i]['Nombre'] + '</h4>' +
        '<p data-name="product_desc">' + productos[i]['Descripcion'] + '</p>' +
        '<input name="product_price" value="' + productos[i]['Precio'] + '" type="hidden" >' +
        '<input name="product_id" value="' + productos[i] + '" type="hidden" >' +
        '<div class="product-price">$ <strong>' + productos[i]['Precio'] + '</strong></div>' +
        '<button class="sc-add-to-cart btn btn-success boton-cart">Agregar</button>' +
        '</div>' +
        '</div>'
    );
}


$('#smartcard').smartCart({
    cartItemTemplate: '<div class="d-flex">' +
        //'<img class="img-fluid" src="{product_image}" />' +
        '<h3 class="h5 list-group-item-heading" style="color: #8d4925;">{product_name}</h3>' +
        '</div>',
    lang: {
        cartTitle: '<span style="color: #ffb48a;">Mis productos</span>',
        checkout: 'Hacer pedido',
        clear: 'Borrar',
        subtotal: '<span style="color: #ffb48a;">Subtotal:</span>',
        cartRemove: '×',
        cartEmpty: '<span style="color: #8d4925;">¡Sin productos aún!<br><br/></span>',

    }
});

