var AWS = require("aws-sdk");

AWS.config.update({
  region: "ap-southeast-1"
});
var dynamodb = new AWS.DynamoDB();

var params = {
    TableName : "idIoTdb",
    KeySchema: [
        { AttributeName: "year", KeyType: "HASH"},  //Partition key
        { AttributeName: "title", KeyType: "RANGE" }  //Sort key
    ],
    AttributeDefinitions: [
        { AttributeName: "year", AttributeType: "N" },
        { AttributeName: "title", AttributeType: "S" }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10
    }
};

dynamodb.createTable(params, function(err, data) {
    if (err) {
        console.error("Gak bisa bikin tabel.  JSON errror:", JSON.stringify(err, null, 2));
    } else {
        console.log("Tabel dibuat. Deskripsi JSON tabel:", JSON.stringify(data, null, 2));
    }
});
