import {
	//LocaleCode,
	//IMessagesStore,
	//IIntl,
	//IIntlChangeListener,
	default_instance,
	//factory,
} from './icu-data-container'

describe('icu-data-container', function() {

	describe('setter', function() {

		it('should be exposed', function() {
			expect(default_instance.set_icu_data).to.be.a('function')
		})

		context('when given correct parameters', function() {
			it('should work')
		})

		context('when given bad parameters', function() {
			it('should revert to last good known lang if available')
		})
	})

	describe('getter', function() {

		describe('locale change listener', function() {
			it('should be called on locale change')
		})
	})
})
