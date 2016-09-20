// Thanks to karma-chai-plugins, those libs are exposed as global variables for convenience
// over typing several lines of boilerplate code at the beginning of each test.
// Also declare them into typescript.
// NOTE: using those globals is optional, a require() (+boilerplate) still work and will even give correct typings.

/*type IChainMemberSignature = (t: string, f: Function) => void

interface IChainMember {
	(t: string, f?: Function): IChainMemberSignature
	only: IChainMemberSignature
	skip: IChainMemberSignature
}
declare const describe: IChainMember
declare const context: IChainMember
declare const it: IChainMember

declare const beforeEach: any
declare const afterEach: any
declare const before: any
declare const after: any*/
declare const expect: Chai.AssertionStatic
//declare const sinon: any
