import CompraFinanciacion_PO from "../../page-objects/CompraFinanciacion_PO.js"
import CompraFacturacion_PO from "../../page-objects/CompraFacturacion_PO.js"
import Home_PO from "../../page-objects/Home_PO.js";
import Search_PO from "../../page-objects/Search_PO.js";
import Producto_PO from "../../page-objects/Producto_PO.js";
import CompraEntrega_PO from "../../page-objects/CompraEntrega_PO.js";
var config = require('../../config/main-config.js')

describe("Compra de una Heladera con retiro en sucursal y Tarjeta de débito Visa", () => {

    it('Visitar la pagina de garbarino', function(){
      browser.maximizeWindow()
      browser.url('/')
    })

    it('Buscar heladeras', () => {
      Home_PO.searchInput.setValue('Heladeras')
      Home_PO.clickBuscar()
    })

    it('Seleccionamos la primera opción', () => {
       Search_PO.clickItem()
    })

    it('Presionamos el boton de comprar', () => {
       Producto_PO.clickPurchaseButton()
    })

    it('Presionamos el boton de continuar', () => {
       Producto_PO.clickContinuarCarritoButton()
    })

    it('Ingresamos el barrio, localidad o ciudad', () => {
       CompraEntrega_PO.city.setValue('Villa Crespo, Buenos Aires, Ciudad de Buenos Aires')
    })

    it('Seleccionamos el barrio ingresado', () => {
      CompraEntrega_PO.clickSuggestionCity()
    })

    it('Seleccionamos retiro en sucursal', () => {
      CompraEntrega_PO.clickRetiroSucursal()
    })

    it('Seleccionamos la sucursal de retiro y presionamos el boton de continuar', () => {
      CompraEntrega_PO.clickSeleccionarSucursal()
      CompraEntrega_PO.clickContinuarPickUpButton()
    })

    it('Seleccionamos el metodo de pago débito', () => {
      CompraFinanciacion_PO.clickSeleccionarTarjetaDebito()
      CompraFinanciacion_PO.clickFormMetodosPago()
      CompraFinanciacion_PO.clickPresionarContinuarButtonMedioPago()
    })

    it('Llenamos el formulario de los datos de facturación', () => {
      CompraFacturacion_PO.firstName.setValue(config.firstName)
      CompraFacturacion_PO.lastName.setValue(config.lastName)
      CompraFacturacion_PO.documento.setValue(config.documento)
      CompraFacturacion_PO.diaNacimiento.selectByAttribute('value', config.diaNacimiento)
      CompraFacturacion_PO.mesNacimiento.selectByAttribute('value', config.mesNacimiento)
      CompraFacturacion_PO.anioNacimiento.selectByAttribute('value', config.anioNacimiento)
      CompraFacturacion_PO.clickSelectGenero()
      CompraFacturacion_PO.codigoArea.setValue(config.codigoArea)
      CompraFacturacion_PO.numeroTelefono.setValue(config.numeroTelefono)
      CompraFacturacion_PO.email.setValue(config.email)
      CompraFacturacion_PO.calle.setValue(config.calle)
      CompraFacturacion_PO.altura.setValue(config.altura)
      CompraFacturacion_PO.piso.setValue(config.piso)
      CompraFacturacion_PO.apartamento.setValue(config.apartamento)
      CompraFacturacion_PO.codigoPostal.setValue(config.codigoPostal)
      CompraFacturacion_PO.clickAceptoTerminos()
      CompraFacturacion_PO.clickButtonContinue()
      //browser.pause(5000)
    })
  });

  describe("Compra de una Heladera con retiro en sucursal y Tarjeta de crédito visa en 1 cuotas sin interés", () => {

    it('Visitar la pagina de garbarino', function(){
      browser.reloadSession()
      browser.maximizeWindow()
      browser.url('/')
    })

    it('Buscar heladeras', () => {
      Home_PO.searchInput.setValue('Heladeras')
      Home_PO.clickBuscar()
    })

    it('Seleccionamos la primera opción', () => {
       Search_PO.clickItem()
    })

    it('Presionamos el boton de comprar', () => {
       Producto_PO.clickPurchaseButton()
    })

    it('Presionamos el boton de continuar', () => {
       Producto_PO.clickContinuarCarritoButton()
    })

    it('Ingresamos el barrio, localidad o ciudad', () => {
       CompraEntrega_PO.city.setValue('Villa Crespo, Buenos Aires, Ciudad de Buenos Aires')
    })

    it('Seleccionamos el barrio ingresado', () => {
      CompraEntrega_PO.clickSuggestionCity()
    })

    it('Seleccionamos retiro en sucursal', () => {
      CompraEntrega_PO.clickRetiroSucursal()
    })

    it('Seleccionamos la sucursal de retiro y presionamos el boton de continuar', () => {
      CompraEntrega_PO.clickSeleccionarSucursal()
      CompraEntrega_PO.clickContinuarPickUpButton()
    })

    it('Seleccionamos el metodo de pago visa crédito 1 cuota', () => {
      CompraFinanciacion_PO.clickFormMetodosPago()
      CompraFinanciacion_PO.clickSeleccionarTarjetaCreditoVisa()
      CompraFinanciacion_PO.clickSeleccinarVisaTodosBancos18Cuotas()
      CompraFinanciacion_PO.cantidadCuotas.selectByIndex(1)
      CompraFinanciacion_PO.clickPresionarContinuarButtonMedioPago()
    })
    it('Llenamos el formulario de los datos de facturación', () => {
      CompraFacturacion_PO.firstName.setValue(config.firstName)
      CompraFacturacion_PO.lastName.setValue(config.lastName)
      CompraFacturacion_PO.documento.setValue(config.documento)
      CompraFacturacion_PO.diaNacimiento.selectByAttribute('value', config.diaNacimiento)
      CompraFacturacion_PO.mesNacimiento.selectByAttribute('value', config.mesNacimiento)
      CompraFacturacion_PO.anioNacimiento.selectByAttribute('value', config.anioNacimiento)
      CompraFacturacion_PO.clickSelectGenero()
      CompraFacturacion_PO.codigoArea.setValue(config.codigoArea)
      CompraFacturacion_PO.numeroTelefono.setValue(config.numeroTelefono)
      CompraFacturacion_PO.email.setValue(config.email)
      CompraFacturacion_PO.calle.setValue(config.calle)
      CompraFacturacion_PO.altura.setValue(config.altura)
      CompraFacturacion_PO.piso.setValue(config.piso)
      CompraFacturacion_PO.apartamento.setValue(config.apartamento)
      CompraFacturacion_PO.codigoPostal.setValue(config.codigoPostal)
      CompraFacturacion_PO.clickAceptoTerminos()
      CompraFacturacion_PO.clickButtonContinue()
      //browser.pause(5000)
    })
  });

  describe("Compra de una Heladera con envío a domicilio y Tarjeta de débito Visa", () => {

    it('Visitar la pagina de garbarino', function(){
      browser.reloadSession()
      browser.maximizeWindow()
      browser.url('/')
    })

    it('Buscar heladeras', () => {
      Home_PO.searchInput.setValue('Heladeras')
      Home_PO.clickBuscar()
    })

    it('Seleccionamos la primera opción', () => {
       Search_PO.clickItem()
    })

    it('Presionamos el boton de comprar', () => {
       Producto_PO.clickPurchaseButton()
    })

    it('Presionamos el boton de continuar', () => {
       Producto_PO.clickContinuarCarritoButton()
    })

    it('Ingresamos el barrio, localidad o ciudad', () => {
       CompraEntrega_PO.city.setValue('Villa Crespo, Buenos Aires, Ciudad de Buenos Aires')
    })

    it('Seleccionamos el barrio ingresado', () => {
      CompraEntrega_PO.clickSuggestionCity()
    })

    it('Seleccionamos envío a domicilio', () => {
      CompraEntrega_PO.clickEnvioDomicilio()
      
    })

    it('Llenamos el formulario con los datos del domicilio', () => {
      CompraEntrega_PO.calle.setValue(config.calle)
      CompraEntrega_PO.altura.setValue(config.altura)
      CompraEntrega_PO.piso.setValue(config.piso)
      CompraEntrega_PO.apartamento.setValue(config.apartamento)
      CompraEntrega_PO.entreCalle1.setValue(config.entreCalle1)
      CompraEntrega_PO.entreCalle2.setValue(config.entreCalle2)
      CompraEntrega_PO.codigoPostal.setValue(config.codigoPostal)
      CompraEntrega_PO.codigoArea.setValue(config.codigoArea)
      CompraEntrega_PO.numeroTelefono.setValue(config.numeroTelefono)
    })

    it('Seleccionamos fecha y horario para envío del pedido', () => {
      CompraEntrega_PO.clickFechaCalendario();
    })

    it('Presionamos el botón de continuar', () => {
      CompraEntrega_PO.clickContinuarDomicilioButton()
    })

    it('Seleccionamos el metodo de pago visa débito', () => {
      CompraFinanciacion_PO.clickSeleccionarTarjetaDebito()
      CompraFinanciacion_PO.clickFormMetodosPago()
      CompraFinanciacion_PO.clickPresionarContinuarButtonMedioPago()
    })

    it('Llenamos el formulario de los datos de facturación', () => {
      CompraFacturacion_PO.firstName.setValue(config.firstName)
      CompraFacturacion_PO.lastName.setValue(config.lastName)
      CompraFacturacion_PO.documento.setValue(config.documento)
      CompraFacturacion_PO.diaNacimiento.selectByAttribute('value', config.diaNacimiento)
      CompraFacturacion_PO.mesNacimiento.selectByAttribute('value', config.mesNacimiento)
      CompraFacturacion_PO.anioNacimiento.selectByAttribute('value', config.anioNacimiento)
      CompraFacturacion_PO.clickSelectGenero()
      CompraFacturacion_PO.codigoArea.setValue(config.codigoArea)
      CompraFacturacion_PO.numeroTelefono.setValue(config.numeroTelefono)
      CompraFacturacion_PO.email.setValue(config.email)
      CompraFacturacion_PO.clickAceptoTerminos()
      CompraFacturacion_PO.clickButtonContinue()
      //browser.pause(5000)
    })
  });

  