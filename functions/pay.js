exports.pay  = {
    path: '/functions/pay',
    onRequest: (req, res)=>{
        res.json({message: 'payment methods work'});
    }
}
