const person = {
    firstName:'John',
    lasName:'Done',
    id:5566,
    'Phone number':'0266753276',
    fullName:function () {
        return this.firstName + " " + this.lasName;
    }
};
person.firstName = 'New John';