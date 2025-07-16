const AsposePdf = require('asposepdfnodejs');
AsposePdf().then(AsposePdfModule => {
    /*Get info about Product*/
    const json = AsposePdfModule.AsposePdfAbout();
    /* JSON
    Product name       : json.product
    Product family     : json.family
    Product version    : json.version
    Date release       : json.releasedate
    Full name/producer : json.producer
    Product is licensed: json.islicensed
    */
    console.log("AsposePdfAbout => %O", json.errorCode == 0 ? 'Full name/producer: ' + json.producer : json.errorText);
});