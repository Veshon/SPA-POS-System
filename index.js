    var customers = []
    let recordIndex;


    $('#customerSec').css({display:'block'})
    $('#itemSec').css({display:'none'})
    $('#placeOrderSec').css({display:'none'})


    $('#itemForm').on('click',() =>{
        $('#itemSec').css({display:'block'})
        $('#customerSec').css({display:'none'})
        $('#placeOrderSec').css({display:'none'})
    })

    $('#cusForm').on('click',() =>{
        $('#customerSec').css({display:'block'})
        $('#itemSec').css({display:'none'})
        $('#placeOrderSec').css({display:'none'})
    })

    $('#placeOrderForm').on('click',() =>{
        $('#placeOrderSec').css({display:'block'})
        $('#itemSec').css({display:'none'})
        $('#customerSec').css({display:'none'})
    })

    ///////////////////////////////////////////////////////////
    
    function loadCustomers() {

        $('#cusTBody').empty()

        customers.map((item, index)=>{

            var record = `<tr>
                  <td class="cusId-value">${item.$id}</td>
                  <td class="cusName-value">${item.$name}</td>
                  <td class="cusAddress-value">${item.$address}</td>
                  <td class="cusMobile-value">${item.$mobile}</td>
                </tr>`;

            $("#cusTBody").append(record)

        })

    }

    $("#cusTBody").on('click', 'tr', function(){

        let index = $(this).index();
        recordIndex = index;

        let id = $(this).find(".cusId-value").text();
        let name = $(this).find(".cusName-value").text();
        let address = $(this).find(".cusAddress-value").text();
        let mobile = $(this).find(".cusMobile-value").text();

        console.log("Values: "+id)
        console.log("Values: "+name)
        console.log("Values: "+address)
        console.log("Values: "+mobile)

        $("#cusId").val(id);
        $("#cusName").val(name);
        $("#cusLAddress").val(address);
        $("#cusMobile").val(mobile);

    })


    $("#cusSubmit").on('click',() => {

        var id = $('#cusId').val();

        var name = $('#cusName').val();

        var address = $('#cusLAddress').val();

        var mobile = $('#cusMobile').val();

        console.log(id);
        console.log(name);
        console.log(address);
        console.log(mobile)

        /*Pushing student data to an array through an object*/
        let cusValues={
            $id: id,
            $name: name,
            $address: address,
            $mobile: mobile
        }

        customers.push(cusValues)

        loadCustomers();
        $("#cusReset").click();

    })


    $("#cusUpdate").on('click',() => {

        var id = $('#cusId').val();

        var name = $('#cusName').val();

        var address = $('#cusLAddress').val();

        var mobile = $('#cusMobile').val();


        let cusObj = {...customers[recordIndex]}
        cusObj.$id = id
        cusObj.$name = name
        cusObj.$address = address
        cusObj.$mobile = mobile

        loadCustomers();
        $("#cusReset").click();

    })


    $("#cusDelete").on('click',() => {

        customers.splice(recordIndex, 1);

        loadCustomers();
        $("#cusReset").click();

    })


    ////////////////////////////////////////////////////////

    var items = []
    let record;

    function loadAllItems() {

        $('#itemTBody').empty()

        items.map((item, index)=>{

            var record = `<tr>
                  <td class="itemId-value">${item.$id}</td>
                  <td class="itemDescription-value">${item.$desc}</td>
                  <td class="itemQty-value">${item.$qty}</td>
                  <td class="itemPrice-value">${item.$price}</td>
                </tr>`;

            $("#itemTBody").append(record)

        })


    }


    $("#itemTBody").on('click', 'tr', function(){

        let index = $(this).index();
        record = index;

        let id = $(this).find(".itemId-value").text();
        let desc = $(this).find(".itemDescription-value").text();
        let qty = $(this).find(".itemQty-value").text();
        let price = $(this).find(".itemPrice-value").text();

        console.log("Values:"+id)
        console.log("Values:"+desc)
        console.log("Values:"+qty)
        console.log("Values:"+price)

        $("#itemId").val(id);
        $("#itemDescription").val(desc);
        $("#itemQty").val(qty);
        $("#itemPrice").val(price);

    })
    
    
    $("#itemSave").on('click',() => {

        var id = $('#itemId').val();

        var desc = $('#itemDescription').val();

        var qty = $('#itemQty').val();

        var price = $('#itemPrice').val();

        console.log(id);
        console.log(desc);
        console.log(qty);
        console.log(price)

        /*Pushing student data to an array through an object*/
        let itemValues={
            $id: id,
            $desc: desc,
            $qty: qty,
            $price: price
        }

        items.push(itemValues)

        loadAllItems();
        $("#itemClear").click();

    })


    $("#itemUpdate").on('click',() => {

        var id = $('#itemId').val();

        var desc = $('#itemDescription').val();

        var qty = $('#itemQty').val();

        var price = $('#itemPrice').val();

        let itemObj = {...items[recordIndex]}
        itemObj.$id = id
        itemObj.$desc = desc
        itemObj.$qty = qty
        itemObj.$price = price

        loadAllItems();
        $("#itemClear").click();

    })

    
    $("#itemDelete").on('click',() => {

        items.splice(recordIndex, 1);

        loadAllItems();
        $("#itemClear").click();

    })


    ////////////////////////////////////////////////////////

    var orders = []
    let recods;


    function loadAllOrders() {

        $('#orderTBody').empty()

        orders.map((item, index)=>{

            var record = `<tr>
                  <td class="itemCode-value">${item.$itemCode}</td>
                  <td class="description-value">${item.$description}</td>
                  <td class="qtyOnHand-value">${item.$qtyOnHand}</td>
                  <td class="unitPrice-value">${item.$unitPrice}</td>
                  <td class="total-value">${item.$total}</td>
                </tr>`;

            $("#orderTBody").append(record)

        })

    }


    $("#orderSave").on('click',() => {

            var id = $('#orderId').val();

            var itemCode = $('#orderItemCode').val();

            var cusId = $('#orderCusId').val();

            var qtyOnHand = $('#orderQtyOnHand').val();

            var description = $('#orderDescription').val();

            var cusName = $('#orderCusName').val();

            var unitPrice = $('#orderUnitPrice').val();

            var qty = $('#orderQty').val();

            var total = $('#orderTotal').val();

            console.log(id);
            console.log(itemCode);
            console.log(cusId);
            console.log(qtyOnHand)
            console.log(description)
            console.log(cusName)
            console.log(unitPrice)
            console.log(qty)
            console.log(total)

            /*Pushing student data to an array through an object*/
            let orderValues={
                $id: id,
                $itemCode: itemCode,
                $cusId: cusId,
                $qtyOnHand: qtyOnHand,
                $description: description,
                $cusName: cusName,
                $unitPrice: unitPrice,
                $qty: qty,
                $total: total
            }

            orders.push(orderValues)

            loadAllOrders();
            $("#orderClear").click();

        })


    $("#orderTBody").on('click', 'tr', function(){

        let index = $(this).index();
        records = index;

        let itemCode = $(this).find(".itemCode-value").text();
        let description = $(this).find(".description-value").text();
        let qtyOnHand = $(this).find(".qtyOnHand-value").text();
        let unitPrice = $(this).find(".unitPrice-value").text();
        let total = $(this).find(".total-value").text();


        console.log("Values:"+itemCode)
        console.log("Values:"+description)
        console.log("Values:"+qtyOnHand)
        console.log("Values:"+unitPrice)
        console.log("Values:"+total)

        $("#orderItemCode").val(itemCode);
        $("#orderDescription").val(description);
        $("#orderQtyOnHand").val(qtyOnHand);
        $("#orderUnitPrice").val(unitPrice);
        $("#orderTotal").val(total);

    })


    $("#orderUpdate").on('click',() => {

        var id = $('#orderId').val();

        var date = $('#orderDate').val();

        var cusName = $('#orderCusName').val();

        var itemCode = $('#orderItemCode').val();


        let orderObj = {...orders[recordIndex]}
        orderObj.$id = id
        orderObj.$desc = desc
        orderObj.$qty = qty
        orderObj.$price = price

        loadAllOrders();
        $("#orderClear").click();

    })


    $("#orderDelete").on('click',() => {

        orders.splice(recordIndex, 1);

        loadAllOrders();
        $("#orderClear").click();

    })