import { ContextMock } from '../../src/context/context.mock';
import { ClientContextMock } from '../../src/clientcontext/clientcontext.mock';

describe('Xrm.Context Mock', () => {
    beforeEach(() => {
        this.clientUrl = 'https://org.crm.dynamics.com/';
        this.userId = '{B05EC7CE-5D51-DF11-97E0-00155DB232D0}';
        this.userRoles = ['cf4cc7ce-5d51-df11-97e0-00155db232d0'];
        this.version = '8.2.1.185';
        this.context = new ContextMock(new ClientContextMock('Web', 'Online'),
        this.clientUrl, 'default', false, 1031, 'Contoso', 0,
        this.userId, 1031, 'Joe Bloggs', this.userRoles, this.version);
    });

    it('should exist', () => {
        expect(this.context).toBeDefined();
    });   

    it('should get the client Url', () => {
        expect(this.context.getClientUrl()).toBe(this.clientUrl);
    });

    it('should get the current theme', () => {
        expect(this.context.getCurrentTheme()).toBe('default');
    });

    it('should not have auto save enabled', () => {
        expect(this.context.getIsAutoSaveEnabled()).toBe(false);
    });

    it ('should have an org language code of 1031', () => {
        expect(this.context.getOrgLcid()).toBe(1031);
    });

    it('should have an org name of Contoso', () => {
        expect(this.context.getOrgUniqueName()).toBe('Contoso');
    });

    it('should have no time zone offset', () => {
        expect(this.context.getTimeZoneOffsetMinutes()).toBe(0);
    });

    it('should return the correct user id', () => {
        expect(this.context.getUserId()).toBe(this.userId);
    });

    it('should return the correct users language code', () => {
        expect(this.context.getUserLcid()).toBe(1031);
    });

    it('should return the correct user name', () => {
        expect(this.context.getUserName()).toBe('Joe Bloggs');
    });

    it('should return the correct user roles', () => {
        expect(this.context.getUserRoles()).toBe(this.userRoles);
    });

    it('should return the correct CRM version', () => {
        expect(this.context.getVersion()).toBe(this.version);
    });

    it('should prepend the org name with the client url', () => {
        let prependedUrl = this.context.prependOrgName(this.clientUrl);
        expect(prependedUrl).toBe(this.clientUrl + 'Contoso');
    });
});
