const AWS = require('aws-sdk');

const uploadToS3 = (data, filename) => {
    const BUCKET_NAME = 'expensevinayprasad'
    const IAM_USER_KEY = 'AKIA4E6G7W6GQQAYCDSD'
    const IAM_USER_SECRET = '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'

    let s3bucket = new AWS.S3({
        accessKeyId: IAM_USER_KEY,
        secretAccessKey: IAM_USER_SECRET,
        Bucket: BUCKET_NAME
    })

    var params = {
        Bucket: BUCKET_NAME,
        Key: filename,
        Body: data,
        ACL: 'public-read'
    }
    console.log(data)

    return new Promise((resolve, reject) => {
        s3bucket.upload(params, (err, s3response) => {
            if (err) {
                console.log('something went wrong', err)
                reject(err)
            }
            else {
                console.log('success', s3response);
                resolve(s3response.Location);
            }
        })
    })

}

module.exports = { uploadToS3 }