# jquery-find-namespace-elements
Javascript jQuery - find element tags with namespaces 

---
## Installation
Just include the jquery.findNSElement.js AFTER jquery script.
````javascript
<script src="https://code.jquery.com/jquery-3.3.1.min.js" crossorigin="anonymous"></script>
<script src="jquery.findNSElement.js"></script>
````


---

## Example Soap xml:

```xml
<?xml version="1.0"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
        <ns1:StringActionResponse xmlns:ns1="http://string.drv.de/String">
            <StringMessageResponse xmlns:ns2="http://string.drv.de/xmlschema/string/v0" xmlns:ns3="http://string.drv.de/xmlschema/string">
                <ns3:RoutingHeader>
                    <ns3:GdsAgency>123</ns3:GdsAgency>
                </ns3:RoutingHeader>
                <ns3:Payload>
                    <ns3:Content>
                        <ns3:StringResponse Success="true">
                            <ns2:ActionResult xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="ns2:RetrieveBookingResponseType">
                                <ns2:Status>
                                    <ns2:BookingState>OK</ns2:BookingState>
                                </ns2:Status>
                                <ServicesResponseType>
                                    <ns2:Service>
                                        <ns2:Details xsi:type="ns2:AccommodationResponseType">
                                            <ns2:Type>HOTEL</ns2:Type>
                                            <ns2:StartDate>2019-11-01</ns2:StartDate>
                                            <ns2:EndDate>2019-11-10</ns2:EndDate>
                                        </ns2:Details>
                                    </ns2:Service>
                                </ServicesResponseType>
                            </ns2:ActionResult>
                        </ns3:StringResponse>
                    </ns3:Content>
                </ns3:Payload>
            </StringMessageResponse>
        </ns1:StringActionResponse>
    </soap:Body>
</soap:Envelope>
```

### Get values:
````javascript
var jqXml = $( $.parseXML( "<?xml....</soap:Envelope>") );

var str = $( jqXml ).findNSElements( 'GdsAgency' ).text();

str = $( jqXml ).findNSElements( 'ns3:GdsAgency' ).text()

str = $( jqXml ).findNSElements( 'Body GdsAgency' ).text()

str = $( jqXml ).filterNSAttributes( "xsi:type", "AccommodationResponseType" )
                .findNSElements("StartDate").text()
````

### Set value:
````javascript
var jqXml = $( $.parseXML( "<?xml....</soap:Envelope>") );

$( jqXml ).findNSElements( 'GdsAgency' ).text('abc');
````
