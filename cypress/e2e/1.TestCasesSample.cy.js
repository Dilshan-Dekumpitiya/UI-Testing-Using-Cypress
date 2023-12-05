describe('suite name', () => //describe --> Keyword
{
    //can include multiple it blocks
    it('test1', () =>
        {
          expect(true).to.equal(true)
        }
    )


    it('test2', () =>
        {
            expect(true).to.equal(true)
        }
    )
})


//Another way, can replace => instead to function as follows
describe('suite name', function () //describe --> Keyword
{
    //can include multiple it blocks
    it('test1', function ()
        {
            expect(true).to.equal(true)
        }
    )


    it('test2', function ()
        {
            expect(true).to.equal(true)
        }
    )
})
