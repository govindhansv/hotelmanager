var db = require('./connection')

module.exports = {
    createOrder: (data, total, user) => {
        return new Promise(async(resolve, reject) => {
            var datetime = new Date().toLocaleString();
            console.log(datetime);
            let order = { products: data, total: total, user: user, status: 'recieved', datetime: datetime }
            db.get().collection('carts').deleteMany({ "user": user })
            db.get().collection('orders').insertOne(order).then((response) => {
                resolve(response.insertedId)
            })

        })
    },

    imgUpload: (data) => {
        return new Promise(async(resolve, reject) => {

            console.log(data);
            let img = data.imgurl
            let id = data.userid
            console.log(img, id);
            cloudinary.v2.uploader.upload("https://media.istockphoto.com/photos/the-girl-standing-on-the-rocks-near-the-beach-with-beautiful-million-picture-id1142366551?b=1&k=20&m=1142366551&s=170667a&w=0&h=UI08guBTkXyI_C7R2pITkP6UB8qjk_YrFOfUTQ17mBM=", { public_id: "olympic_flagfgd" },
                function(error, result) { console.log(result); })

        })
    },

}