class Hello{
    
    constructor(Message)
    {
        this.Message = Message;
    }

    callMe() {
        return this.Message;
    }
}

var h = new Hello('Hello');
console.log(h instanceof Hello);