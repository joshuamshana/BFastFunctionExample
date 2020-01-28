exports.pay  = {
    path: '/pay',
    onRequest: (req, res)=>{
        
        res.json({message: 'payment methods work'});
    }
}
