"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sinon = require("sinon");
const format_icu_message_1 = require("./format-icu-message");
const timezone_plus_1 = !!process.env.TIMEZONE_PLUS_ONE;
describe('format-icu-message', function () {
    let error_reporter;
    beforeEach(() => {
        error_reporter = sinon.spy();
    });
    it('should expose a function', function () {
        expect(format_icu_message_1.format).to.be.a('function');
    });
    describe('format()', function () {
        context('when passed correct parameters', function () {
            afterEach(() => {
                const call = error_reporter.firstCall;
                if (call)
                    console.error(call.args);
                expect(error_reporter).to.not.have.been.called;
            });
            const test_cases = [
                {
                    message: 'foo',
                    expected: 'foo'
                },
                {
                    message: 'Bonjour {name} !',
                    expected: 'Bonjour M. World !',
                    values: {
                        name: 'M. World'
                    }
                },
                {
                    locale: 'fr',
                    message: 'Il est {now, time, long} et tout va bien.',
                    // TODO check the suspicious triple space
                    expected: `Il est ${timezone_plus_1 ? 7 : 6}:56:07   et tout va bien.`,
                    values: {
                        now: new Date(1234567890)
                    }
                },
                {
                    locale: 'en',
                    message: 'It’s {now, time, long} and all is well.',
                    // TODO check the suspicious double space
                    expected: `It’s ${timezone_plus_1 ? 7 : 6}:56:07 AM  and all is well.`,
                    values: {
                        now: 1234567890
                    }
                },
                {
                    locale: 'fr',
                    message: 'J’ai {numCats, number} chats. Environ {percentBlackCats, number, percent} d’entre eux sont noirs.',
                    expected: 'J’ai 5 chats. Environ 23\u00A0% d’entre eux sont noirs.',
                    values: {
                        numCats: 5,
                        percentBlackCats: 0.234
                    }
                },
                {
                    locale: 'en',
                    message: 'I have {numCats, number} cats. Almost {percentBlackCats, number, percent} of them are black.',
                    expected: 'I have 5 cats. Almost 23% of them are black.',
                    values: {
                        numCats: 5,
                        percentBlackCats: 0.234
                    }
                },
            ];
            test_cases.forEach(function (test_case) {
                it('should format correctly "' + test_case.message + '"', function () {
                    const res = format_icu_message_1.format(test_case.message, test_case.values, test_case.locale, test_case.custom_formats, 'TC#123', // example debug id
                    error_reporter);
                    expect(res).to.equal(test_case.expected);
                });
            });
        });
        context('when passed incorrect parameters', function () {
            afterEach(() => {
                expect(error_reporter).to.have.been.calledOnce;
            });
            const test_cases = [
                {
                    locale: null,
                    message: 'Il est {now, time, long} et tout va bien.',
                    expected: `Il est ${timezone_plus_1 ? 7 : 6}:56:07 AM  et tout va bien.`,
                    values: {
                        now: 1234567890
                    }
                },
                {
                    locale: 'fr',
                    message: null,
                    expected: '[i18n|fr|???|TC#123]'
                }
            ];
            test_cases.forEach(function (test_case, index) {
                it('should return a best effort string,' +
                    ' as explicit as possible and containing maximum information - case #' + index, function () {
                    const res = format_icu_message_1.format(test_case.message, test_case.values, test_case.locale, test_case.custom_formats, 'TC#123', // example debug id
                    error_reporter);
                    expect(res).to.equal(test_case.expected);
                });
            });
        });
    });
});
//# sourceMappingURL=format-icu-message_spec.js.map