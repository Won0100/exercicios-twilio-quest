function construct(msg){
    var user = {
        name : msg,
        material : 'human',
        assemble: true,
        duration: Number('1000') 
    }
    return user
}