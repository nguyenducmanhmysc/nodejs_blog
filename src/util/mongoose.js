module.exports = {
    multipleMongooseToObject: function (dataArray) {
        return dataArray.map(item => item.toObject());
    },

    singleMongooseToObject: function (data) {
        return data?data.toObject():data;
    }
}