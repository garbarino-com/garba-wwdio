import CompraFinanciacion_PO from "../page-objects/CompraFinanciacion_PO.js"
import CompraFacturacion_PO from "../page-objects/CompraFacturacion_PO.js"
import Home_PO from "../page-objects/Home_PO.js";
import Search_PO from "../page-objects/Search_PO.js";
import Producto_PO from "../page-objects/Producto_PO.js";
import CompraEntrega_PO from "../page-objects/CompraEntrega_PO.js";
var config = require('../config/main-config.js')

describe("Flujo de compra de una Heladera con retiro en sucursal y Tarjeta de débito", () => {

    it('Visitar la pagina de garbarino', function(){
      browser.url('/')
    })

    it('Buscar heladeras', () => {
      Home_PO.searchInput.setValue('Heladeras')
      Home_PO.clickBuscar()
    })

    it('Seleccionamos la primera opción', () => {
       Search_PO.clickItem()
       browser.pause(5000)
    })

    it('Presionamos el boton de comprar', () => {
       Producto_PO.clickPurchaseButton()
    })

    it('Presionamos el boton de continuar', () => {
       Producto_PO.clickContinuarCarritoButton()
    })

    it('Ingresamos el barrio, localidad o ciudad', () => {
       CompraEntrega_PO.city.setValue('Villa Crespo, Buenos Aires, Ciudad de Buenos Aires')
       browser.pause(4000)
    })

    it('Seleccionamos el barrio ingresado', () => {
      CompraEntrega_PO.clickSuggestionCity()
      browser.pause(4000)
    })

    it('Seleccionamos retiro en sucursal', () => {
      CompraEntrega_PO.clickRetiroSucursal()
      browser.pause(2000)
    })

    it('Seleccionamos la sucursal de retiro y presionamos el boton de continuar', () => {
      CompraEntrega_PO.clickSeleccionarSucursal()
      browser.pause(2000)
      CompraEntrega_PO.clickContinuarPickUpButton()
      browser.pause(5000)
    })

    it('Seleccionamos el metodo de pago débito', () => {
      CompraFinanciacion_PO.clickSeleccionarTarjetaDebito()
      CompraFinanciacion_PO.clickFormMetodosPago()
      browser.pause(2000)
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
      browser.pause(5000)
    })
  });

  