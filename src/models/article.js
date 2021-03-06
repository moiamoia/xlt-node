const model = {
    name: 'article', // 指定数据库中的collection
    schema: {
        user_id:String,
        user_name:String,
        headimage:String,
        title:String,
        content:String,
        images:[],
        voices:[],
        videos:[],
        create_time:{
            type:Number,
            default:Date.now,
        },
        is_delete: {
            type: Boolean,
            default: false
        }
    }
}

module.exports = model
