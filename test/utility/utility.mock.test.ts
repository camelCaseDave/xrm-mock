import { UtilityMock } from '../../src/utility/utility.mock';

describe('Xrm.Utility Mock', () => {
    beforeEach(() => {
        this.utility = new UtilityMock();
        
    });

    it('should instantiate', () => {
        expect(this.utility).toBeDefined();
    });

    it('should alert', () => {
        spyOn(window, 'alert');
        spyOn(console, 'log');

        this.utility.alertDialog('Are you sure?', () => {
            console.log('alert closed');
        });

        expect(window.alert).toHaveBeenCalledWith('Are you sure?');
        expect(console.log).toHaveBeenCalledWith('alert closed');
    });

    describe('confirmDialog', () => {
        beforeEach(() => {
            spyOn(console, 'log');
        });

        it('should confirm and call yes callback', () => {
            spyOn(window, 'confirm').and.returnValue(true);

            this.utility.confirmDialog('Are you sure?',
                () => {
                    console.log('yes');
                },
                () => {
                    console.log('no');
                });

            expect(window.confirm).toHaveBeenCalledWith('Are you sure?');
            expect(console.log).toHaveBeenCalledWith('yes');
            expect(console.log).not.toHaveBeenCalledWith('no');
        });

        it('should confirm and call no callback', () => {
            spyOn(window, 'confirm').and.returnValue(false);

            this.utility.confirmDialog('Are you sure?',
                () => {
                    console.log('yes');
                },
                () => {
                    console.log('no');
                });
                
            expect(window.confirm).toHaveBeenCalledWith('Are you sure?');
            expect(console.log).toHaveBeenCalledWith('no');
            expect(console.log).not.toHaveBeenCalledWith('yes');
        });
    });
})
